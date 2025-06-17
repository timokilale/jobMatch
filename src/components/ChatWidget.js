import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

const ChatWidget = () => {
  const [socket, setSocket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatRoom, setChatRoom] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const { user, token } = useSelector(state => state.auth);

  // Helper function to get cookie value
  const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Debug logging
  useEffect(() => {
    console.log('ChatWidget - User:', user);
    console.log('ChatWidget - Token:', token ? 'Token exists' : 'No token');
    console.log('ChatWidget - Cookie token:', getCookieValue('token') ? 'Cookie token exists' : 'No cookie token');
    console.log('ChatWidget - Auth state:', { user: !!user, token: !!token });
  }, [user, token]);

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (user) {
      console.log('Initializing socket for user:', user);
      initializeSocket();
    }

    return () => {
      if (socket) {
        console.log('Disconnecting socket');
        socket.disconnect();
      }
    };
  }, [user]); // Removed token dependency since we'll get it from localStorage
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeSocket = () => {
    console.log('Creating socket connection...');
    const newSocket = io('http://localhost:5000', {
      withCredentials: true,
      transports: ['websocket', 'polling']
    });

    newSocket.on('connect', () => {
      console.log('Connected to chat server');
      // Get token from cookies or localStorage
      const authToken = getCookieValue('token') || localStorage.getItem('token') || token;
      console.log('Authenticating with token:', authToken ? 'Token found' : 'No token');
      if (authToken) {
        newSocket.emit('authenticate', authToken);
      } else {
        console.error('No authentication token available');
        // Try to authenticate with user ID if available
        if (user?.id) {
          console.log('Attempting authentication with user ID:', user.id);
          // Create a temporary token or use a different auth method
          newSocket.emit('authenticate_user', { userId: user.id });
        }
      }
    });
    
    newSocket.on('authenticated', (data) => {
      console.log('Authenticated successfully:', data);
      setIsConnected(true);
    });

    newSocket.on('auth_error', (error) => {
      console.error('Authentication error:', error);
      setIsConnected(false);
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      setIsConnected(false);
    });

    newSocket.on('disconnect', (reason) => {
      console.log('Disconnected:', reason);
      setIsConnected(false);
    });
    
    newSocket.on('chat_started', (data) => {
      setChatRoom({ id: data.roomId });
      if (data.message) {
        addMessage({
          id: Date.now(),
          message: data.message,
          senderId: null,
          senderName: 'Support Bot',
          timestamp: new Date(),
          type: 'bot'
        });
      }
    });
    
    newSocket.on('new_message', (message) => {
      addMessage(message);
      if (message.senderId !== user.id && !isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    });
    
    newSocket.on('user_typing', (data) => {
      if (data.userId !== user.id) {
        setIsTyping(data.isTyping);
      }
    });
    
    newSocket.on('agent_joined', (data) => {
      addMessage({
        id: Date.now(),
        message: `${data.agentName} has joined the chat`,
        senderId: null,
        senderName: 'System',
        timestamp: new Date(),
        type: 'system'
      });
    });
    
    newSocket.on('chat_ended', (data) => {
      addMessage({
        id: Date.now(),
        message: data.message,
        senderId: null,
        senderName: 'System',
        timestamp: new Date(),
        type: 'system'
      });
      setChatRoom(null);
    });
    
    newSocket.on('error', (error) => {
      console.error('Chat error:', error);
      const errorMessage = typeof error === 'string' ? error :
                          error?.message || error?.error ||
                          JSON.stringify(error) || 'Unknown error occurred';
      addMessage({
        id: Date.now(),
        message: `Error: ${errorMessage}`,
        senderId: null,
        senderName: 'System',
        timestamp: new Date(),
        type: 'error'
      });
    });
    
    setSocket(newSocket);
  };
  
  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const startChat = () => {
    if (!socket || !isConnected) {
      console.error('Socket not connected');
      return;
    }

    // Start chat without sending an initial message
    socket.emit('start_chat', {
      topic: 'General Support',
      message: '' // Empty message to just initialize the chat
    });
  };
  
  const sendMessage = () => {
    if (!currentMessage.trim() || !socket || !chatRoom) return;
    
    const messageData = {
      roomId: chatRoom.id,
      message: currentMessage.trim(),
      type: 'text'
    };
    
    socket.emit('send_message', messageData);
    setCurrentMessage('');
    
    // Stop typing indicator
    socket.emit('typing', { roomId: chatRoom.id, isTyping: false });
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  const handleTyping = (value) => {
    setCurrentMessage(value);
    
    if (!socket || !chatRoom) return;
    
    // Send typing indicator
    socket.emit('typing', { roomId: chatRoom.id, isTyping: true });
    
    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    // Set timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit('typing', { roomId: chatRoom.id, isTyping: false });
    }, 1000);
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
      // Clear any existing messages for a fresh start
      setMessages([]);
      if (!chatRoom && isConnected) {
        startChat();
      }
    }
  };
  
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  const getMessageStyle = (message) => {
    if (message.type === 'bot' || message.type === 'system') {
      return 'bg-gray-100 text-gray-800';
    }
    if (message.type === 'error') {
      return 'bg-red-100 text-red-800';
    }
    if (message.senderId === user.id) {
      return 'bg-green-600 text-white ml-auto';
    }
    return 'bg-white text-gray-800 border';
  };
  
  if (!user) return null;
  
  return (
    <div className="chat-widget-mobile">
      {/* Chat Window */}
      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl border mb-4 flex flex-col chat-window ${
          isMobile
            ? 'fixed inset-4 w-auto h-auto'
            : 'w-80 h-96'
        }`}>
          {/* Header */}
          <div className={`bg-green-600 text-white rounded-t-lg flex justify-between items-center ${
            isMobile ? 'p-3' : 'p-4'
          }`}>
            <div>
              <h3 className={`font-semibold ${isMobile ? 'text-lg' : 'text-base'}`}>Support Chat</h3>
              <p className="text-sm opacity-90">
                {isConnected ? 'Connected' : 'Connecting...'}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 touch-target"
            >
              <i className={`fas fa-times ${isMobile ? 'text-lg' : 'text-base'}`}></i>
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm">
                <p>Welcome to support chat!</p>
                <p>How can we help you today?</p>
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-xs p-3 rounded-lg text-sm ${getMessageStyle(message)}`}
              >
                <div className="font-medium text-xs mb-1">
                  {message.senderName}
                </div>
                <div>{message.message}</div>
                <div className="text-xs opacity-70 mt-1">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-gray-100 text-gray-800 max-w-xs p-3 rounded-lg text-sm">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-xs">Agent is typing...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => handleTyping(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={!isConnected || !chatRoom}
              />
              <button
                onClick={sendMessage}
                disabled={!currentMessage.trim() || !isConnected || !chatRoom}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isConnected ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-600'} text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center relative touch-target transition-colors`}
        data-tutorial="chat-widget"
        title={isConnected ? 'Chat Support - Connected' : 'Chat Support - Connecting...'}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-xl`}></i>
        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
        {/* Connection status indicator */}
        <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></span>
      </button>
    </div>
  );
};

export default ChatWidget;
