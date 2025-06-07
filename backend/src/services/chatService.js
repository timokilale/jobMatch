const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma');
const AIService = require('./aiService');

class ChatService {
  constructor(server) {
    this.io = socketIo(server, {
      cors: {
        origin: ["http://localhost:3000", "http://localhost:3001"],
        credentials: true,
        methods: ["GET", "POST"]
      }
    });

    this.connectedUsers = new Map();
    this.supportAgents = new Map();
    this.chatRooms = new Map();
    this.aiService = new AIService();

    this.setupSocketHandlers();
    this.initializeAutoResponses();
  }
  
  setupSocketHandlers() {
    this.io.on('connection', (socket) => {
      console.log('New socket connection:', socket.id);
      
      // User authentication with JWT token
      socket.on('authenticate', async (token) => {
        try {
          console.log('Authenticating with token...');
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            include: { applicant: true, employer: true }
          });

          if (user) {
            await this.authenticateUser(socket, user);
          } else {
            socket.emit('auth_error', 'User not found');
          }
        } catch (error) {
          console.error('Authentication error:', error);
          socket.emit('auth_error', 'Invalid token');
        }
      });

      // Alternative authentication with user ID (for cookie-based auth)
      socket.on('authenticate_user', async (data) => {
        try {
          console.log('Authenticating with user ID:', data.userId);
          const user = await prisma.user.findUnique({
            where: { id: parseInt(data.userId) },
            include: { applicant: true, employer: true }
          });

          if (user) {
            await this.authenticateUser(socket, user);
          } else {
            socket.emit('auth_error', 'User not found');
          }
        } catch (error) {
          console.error('User authentication error:', error);
          socket.emit('auth_error', 'Authentication failed');
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

          // Only send welcome message if there's an actual initial message
          let response = null;
          if (data.message && data.message.trim() !== '') {
            response = await this.handleInitialMessage(chatRoom, data.message, socket);
          }

          socket.emit('chat_started', {
            roomId: chatRoom.id,
            message: response // Will be null for clean start
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
          
          // Check if this is the first user message in the room
          const messageCount = await prisma.chatMessage.count({
            where: {
              roomId: parseInt(roomId),
              senderId: { not: null } // Only count user messages, not bot messages
            }
          });

          // If this is the first user message, send a welcome response
          if (messageCount === 1) {
            const userName = socket?.userData?.fullName || socket?.userData?.companyName || 'User';
            const welcomeMessage = `Hello ${userName}! 👋 Welcome to Job Match support. I'm here to help you with job applications, profile updates, CV downloads, and more. How can I assist you today?`;

            setTimeout(() => {
              this.sendBotMessage(roomId, welcomeMessage);
            }, 500);
          } else {
            // Generate auto-response for subsequent messages
            const autoResponse = await this.generateAutoResponse(message, roomId, socket);
            if (autoResponse) {
              setTimeout(() => {
                this.sendBotMessage(roomId, autoResponse);
              }, 1000);
            }
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
  
  async handleInitialMessage(chatRoom, message, socket) {
    try {
      const userName = socket?.userData?.fullName || socket?.userData?.companyName || 'User';

      // If no initial message provided, just send a clean welcome
      if (!message || message.trim() === '') {
        const welcomeMessage = `Hello ${userName}! 👋 Welcome to Job Match support. I'm here to help you with job applications, profile updates, CV downloads, and more. What can I assist you with today?`;
        await this.sendBotMessage(chatRoom.id, welcomeMessage);
        return welcomeMessage;
      }

      // If there's an initial message, process it normally
      const context = {
        userRole: socket?.userRole || 'User',
        userName: userName,
        chatHistory: [],
        roomId: chatRoom.id,
        isInitialMessage: true
      };

      const welcomeMessage = await this.aiService.generateResponse(
        `Hello! ${message}`,
        context
      );

      await this.sendBotMessage(chatRoom.id, welcomeMessage);
      return welcomeMessage;

    } catch (error) {
      console.error('Error generating initial AI response:', error);

      // Fallback to FAQ check if there's a message
      if (message && message.trim() !== '') {
        const faqResponse = this.checkFAQPatterns(message);
        if (faqResponse) {
          await this.sendBotMessage(chatRoom.id, faqResponse);
          return faqResponse;
        }
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
        // Default bot assistance message
        const userName = socket?.userData?.fullName || socket?.userData?.companyName || 'User';
        const defaultMessage = `Hello ${userName}! 👋 Welcome to Job Match support. I'm here to help you with job applications, profile updates, CV downloads, and more. What can I assist you with today?`;
        await this.sendBotMessage(chatRoom.id, defaultMessage);
        return defaultMessage;
      }
    }
  }
  
  initializeAutoResponses() {
    this.faqPatterns = [
      {
        keywords: ['password', 'reset', 'forgot', 'login', 'signin', 'sign in'],
        response: "To reset your password, go to the login page and click 'Forgot Password'. You'll receive an email with reset instructions."
      },
      {
        keywords: ['apply', 'job', 'application', 'apply for job', 'job application'],
        response: "To apply for a job, browse the job listings in your dashboard and click 'Apply' on any position that interests you. Make sure your profile is complete for better chances!"
      },
      {
        keywords: ['profile', 'update', 'edit', 'change profile', 'update profile'],
        response: "You can update your profile by going to your dashboard and selecting the relevant section (Academic Qualifications, Work Experience, Computer Skills, Languages, etc.)."
      },
      {
        keywords: ['cv', 'resume', 'download', 'download cv', 'download resume'],
        response: "You can preview and download your CV from the 'CV Preview' section in your dashboard. Make sure all your information is up to date!"
      },
      {
        keywords: ['jobs', 'find jobs', 'search jobs', 'job search'],
        response: "You can find jobs by browsing the job listings in your dashboard. Use the search and filter options to find positions that match your skills and preferences."
      },
      {
        keywords: ['notification', 'notifications', 'alerts'],
        response: "You can view your notifications in the notifications section of your dashboard. You'll receive alerts about job applications, interview invitations, and other important updates."
      },
      {
        keywords: ['interview', 'interviews', 'interview schedule'],
        response: "Interview information and schedules can be found in your dashboard. You'll receive notifications when interviews are scheduled or updated."
      },
      {
        keywords: ['account', 'registration', 'register', 'sign up', 'signup'],
        response: "To create an account, go to the registration page and choose whether you're an applicant or employer. Fill in the required information to get started."
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
  
  async generateAutoResponse(message, roomId, socket) {
    try {
      // Get chat context
      const context = await this.buildChatContext(roomId, socket);

      // Use AI service to generate response
      const aiResponse = await this.aiService.generateResponse(message, context);

      return aiResponse;
    } catch (error) {
      console.error('Error generating AI response:', error);

      // Fallback to simple keyword-based responses
      return await this.generateFallbackResponse(message);
    }
  }

  async buildChatContext(roomId, socket) {
    try {
      // Get recent chat history
      const recentMessages = await prisma.chatMessage.findMany({
        where: { roomId: parseInt(roomId) },
        orderBy: { timestamp: 'desc' },
        take: 5,
        include: {
          sender: {
            include: {
              applicant: true,
              employer: true
            }
          }
        }
      });

      // Get user information
      const userRole = socket.userRole;
      const userName = socket.userData?.fullName || socket.userData?.companyName || 'User';

      return {
        userRole,
        userName,
        chatHistory: recentMessages.reverse(), // Reverse to get chronological order
        roomId
      };
    } catch (error) {
      console.error('Error building chat context:', error);
      return {
        userRole: socket.userRole || 'User',
        userName: socket.userData?.fullName || socket.userData?.companyName || 'User',
        chatHistory: [],
        roomId
      };
    }
  }

  async generateFallbackResponse(message) {
    // Enhanced fallback system (same as in AIService)
    const lowerMessage = message.toLowerCase();

    // FAQ patterns
    const faqResponse = this.checkFAQPatterns(message);
    if (faqResponse) {
      return faqResponse;
    }

    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm here to help you with the job matching system. What can I assist you with today?";
    }

    // Help requests
    if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('assist')) {
      return "I can help you with:\n🔍 Finding and applying for jobs\n📝 Updating your profile\n📄 Downloading your CV\n🔐 Password and login issues\n📊 Understanding system features\n\nWhat specific help do you need?";
    }

    // Thank you responses
    if (lowerMessage.includes('thank')) {
      return "You're very welcome! 😊 Is there anything else I can help you with?";
    }

    // Goodbye responses
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! 👋 Best of luck with your job search. Feel free to come back anytime!";
    }

    // General questions
    if (lowerMessage.includes('how') || lowerMessage.includes('what') || lowerMessage.includes('where') || lowerMessage.includes('?')) {
      return "I'd be happy to help you with that! Could you please be more specific? I can assist with job applications, profile management, CV downloads, and more.";
    }

    // Default response
    return "I'm here to help you with the job matching system! 🚀 Type 'help' to see what I can assist you with, or just ask me a question!";
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
  
  // Helper method to authenticate users
  async authenticateUser(socket, user) {
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
        name: user.role === 'APPLICANT' ? user.applicant?.fullName : user.employer?.companyName
      }
    });

    // Don't automatically load chat history - let users start fresh
    console.log(`User ${user.id} authenticated successfully`);
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
