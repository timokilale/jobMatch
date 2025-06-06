const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma');

class ChatService {
  constructor(server) {
    this.io = socketIo(server, {
      cors: {
        origin: "http://localhost:3001",
        credentials: true
      }
    });
    
    this.connectedUsers = new Map();
    this.supportAgents = new Map();
    this.chatRooms = new Map();
    
    this.setupSocketHandlers();
    this.initializeAutoResponses();
  }
  
  setupSocketHandlers() {
    this.io.on('connection', (socket) => {
      console.log('New socket connection:', socket.id);
      
      // User authentication
      socket.on('authenticate', async (token) => {
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            include: { applicant: true, employer: true }
          });
          
          if (user) {
            socket.userId = user.id;
            socket.userRole = user.role;
            socket.userData = user.role === 'APPLICANT' ? user.applicant : user.employer;
            
            socket.join(`user_${user.id}`);
            this.connectedUsers.set(socket.id, {
              userId: user.id,
              role: user.role,
              socketId: socket.id
            });
            
            socket.emit('authenticated', {
              success: true,
              user: {
                id: user.id,
                role: user.role,
                name: user.role === 'APPLICANT' ? user.applicant.fullName : user.employer.companyName
              }
            });
            
            // Load chat history
            await this.loadChatHistory(socket);
          }
        } catch (error) {
          console.error('Authentication error:', error);
          socket.emit('auth_error', 'Invalid token');
        }
      });
      
      // Start chat session
      socket.on('start_chat', async (data) => {
        if (!socket.userId) {
          socket.emit('error', 'Not authenticated');
          return;
        }
        
        try {
          const chatRoom = await this.createOrGetChatRoom(socket.userId, data.topic);
          socket.join(`chat_${chatRoom.id}`);
          
          // Auto-assign agent or provide bot response
          const response = await this.handleInitialMessage(chatRoom, data.message);
          
          socket.emit('chat_started', {
            roomId: chatRoom.id,
            message: response
          });
        } catch (error) {
          console.error('Start chat error:', error);
          socket.emit('error', 'Failed to start chat');
        }
      });
      
      // Send message
      socket.on('send_message', async (data) => {
        if (!socket.userId) {
          socket.emit('error', 'Not authenticated');
          return;
        }
        
        try {
          const { roomId, message, type = 'text' } = data;
          
          // Save message to database
          const savedMessage = await prisma.chatMessage.create({
            data: {
              roomId: parseInt(roomId),
              senderId: socket.userId,
              message,
              type,
              timestamp: new Date()
            }
          });
          
          // Broadcast to room
          this.io.to(`chat_${roomId}`).emit('new_message', {
            id: savedMessage.id,
            message: savedMessage.message,
            senderId: savedMessage.senderId,
            senderName: socket.userData?.fullName || socket.userData?.companyName,
            timestamp: savedMessage.timestamp,
            type: savedMessage.type
          });
          
          // Generate auto-response if needed
          const autoResponse = await this.generateAutoResponse(message, roomId);
          if (autoResponse) {
            setTimeout(() => {
              this.sendBotMessage(roomId, autoResponse);
            }, 1000);
          }
          
        } catch (error) {
          console.error('Send message error:', error);
          socket.emit('error', 'Failed to send message');
        }
      });
      
      // Agent joins chat
      socket.on('agent_join_chat', async (data) => {
        if (socket.userRole !== 'SUPPORT_AGENT') {
          socket.emit('error', 'Unauthorized');
          return;
        }
        
        const { roomId } = data;
        socket.join(`chat_${roomId}`);
        
        // Update room with agent
        await prisma.chatRoom.update({
          where: { id: parseInt(roomId) },
          data: { agentId: socket.userId, status: 'ACTIVE' }
        });
        
        // Notify user that agent joined
        this.io.to(`chat_${roomId}`).emit('agent_joined', {
          agentName: socket.userData?.name || 'Support Agent'
        });
      });
      
      // Mark messages as read
      socket.on('mark_read', async (data) => {
        try {
          const { roomId } = data;
          await prisma.chatMessage.updateMany({
            where: {
              roomId: parseInt(roomId),
              senderId: { not: socket.userId },
              isRead: false
            },
            data: { isRead: true, readAt: new Date() }
          });
          
          socket.emit('messages_marked_read', { roomId });
        } catch (error) {
          console.error('Mark read error:', error);
        }
      });
      
      // Typing indicator
      socket.on('typing', (data) => {
        const { roomId, isTyping } = data;
        socket.to(`chat_${roomId}`).emit('user_typing', {
          userId: socket.userId,
          userName: socket.userData?.fullName || socket.userData?.companyName,
          isTyping
        });
      });
      
      // End chat session
      socket.on('end_chat', async (data) => {
        try {
          const { roomId } = data;
          await prisma.chatRoom.update({
            where: { id: parseInt(roomId) },
            data: { status: 'CLOSED', endedAt: new Date() }
          });
          
          this.io.to(`chat_${roomId}`).emit('chat_ended', {
            message: 'Chat session has been ended. Thank you for contacting support!'
          });
        } catch (error) {
          console.error('End chat error:', error);
        }
      });
      
      // Handle disconnection
      socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
        this.connectedUsers.delete(socket.id);
        
        if (socket.userRole === 'SUPPORT_AGENT') {
          this.supportAgents.delete(socket.id);
        }
      });
    });
  }
  
  async createOrGetChatRoom(userId, topic) {
    // Check for existing active chat room
    let chatRoom = await prisma.chatRoom.findFirst({
      where: {
        userId: userId,
        status: { in: ['WAITING', 'ACTIVE'] }
      }
    });
    
    if (!chatRoom) {
      chatRoom = await prisma.chatRoom.create({
        data: {
          userId: userId,
          topic: topic || 'General Support',
          status: 'WAITING',
          createdAt: new Date()
        }
      });
    }
    
    return chatRoom;
  }
  
  async loadChatHistory(socket) {
    try {
      const chatRooms = await prisma.chatRoom.findMany({
        where: { userId: socket.userId },
        include: {
          messages: {
            orderBy: { timestamp: 'asc' },
            take: 50 // Last 50 messages
          }
        },
        orderBy: { createdAt: 'desc' },
        take: 5 // Last 5 chat rooms
      });
      
      socket.emit('chat_history', chatRooms);
    } catch (error) {
      console.error('Load chat history error:', error);
    }
  }
  
  async handleInitialMessage(chatRoom, message) {
    // Check if message matches FAQ patterns
    const faqResponse = this.checkFAQPatterns(message);
    if (faqResponse) {
      await this.sendBotMessage(chatRoom.id, faqResponse);
      return faqResponse;
    }
    
    // Check for available agents
    const availableAgent = this.getAvailableAgent();
    if (availableAgent) {
      // Assign agent
      await prisma.chatRoom.update({
        where: { id: chatRoom.id },
        data: { agentId: availableAgent.userId, status: 'ACTIVE' }
      });
      
      return "You've been connected to a support agent. They'll be with you shortly!";
    } else {
      // Queue for agent or provide bot assistance
      return "All our agents are currently busy. You can continue chatting with our AI assistant, or wait for the next available agent.";
    }
  }
  
  initializeAutoResponses() {
    this.faqPatterns = [
      {
        keywords: ['password', 'reset', 'forgot', 'login'],
        response: "To reset your password, go to the login page and click 'Forgot Password'. You'll receive an email with reset instructions."
      },
      {
        keywords: ['apply', 'job', 'application'],
        response: "To apply for a job, browse the job listings in your dashboard and click 'Apply' on any position that interests you."
      },
      {
        keywords: ['profile', 'update', 'edit'],
        response: "You can update your profile by going to your dashboard and selecting the relevant section (Academic Qualifications, Work Experience, etc.)."
      },
      {
        keywords: ['cv', 'resume', 'download'],
        response: "You can preview and download your CV from the 'CV Preview' section in your dashboard."
      }
    ];
  }
  
  checkFAQPatterns(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const pattern of this.faqPatterns) {
      if (pattern.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return pattern.response;
      }
    }
    
    return null;
  }
  
  async generateAutoResponse(message, roomId) {
    // Simple keyword-based responses
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Thank you for contacting support! Have a great day!";
    }
    
    return null;
  }
  
  async sendBotMessage(roomId, message) {
    try {
      const botMessage = await prisma.chatMessage.create({
        data: {
          roomId: parseInt(roomId),
          senderId: null, // Bot messages have no sender
          message,
          type: 'bot',
          timestamp: new Date()
        }
      });
      
      this.io.to(`chat_${roomId}`).emit('new_message', {
        id: botMessage.id,
        message: botMessage.message,
        senderId: null,
        senderName: 'Support Bot',
        timestamp: botMessage.timestamp,
        type: 'bot'
      });
    } catch (error) {
      console.error('Send bot message error:', error);
    }
  }
  
  getAvailableAgent() {
    // Simple round-robin agent assignment
    const agents = Array.from(this.supportAgents.values());
    return agents.find(agent => agent.status === 'available') || null;
  }
  
  // Method to add support agents
  addSupportAgent(socketId, agentData) {
    this.supportAgents.set(socketId, {
      ...agentData,
      status: 'available',
      activeChats: 0
    });
  }
  
  // Get chat statistics
  async getChatStatistics() {
    const stats = await prisma.chatRoom.groupBy({
      by: ['status'],
      _count: true
    });
    
    return {
      totalChats: stats.reduce((sum, stat) => sum + stat._count, 0),
      activeChats: stats.find(s => s.status === 'ACTIVE')?._count || 0,
      waitingChats: stats.find(s => s.status === 'WAITING')?._count || 0,
      connectedUsers: this.connectedUsers.size,
      availableAgents: Array.from(this.supportAgents.values()).filter(a => a.status === 'available').length
    };
  }
}

module.exports = ChatService;
