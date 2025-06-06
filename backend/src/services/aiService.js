const OpenAI = require('openai');
const axios = require('axios');

class AIService {
  constructor() {
    this.openai = null;
    this.aiProvider = process.env.AI_PROVIDER || 'openai'; // openai, gemini, claude, ollama
    this.initializeAI();
  }

  initializeAI() {
    switch (this.aiProvider) {
      case 'openai':
        if (process.env.OPENAI_API_KEY) {
          this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });
          console.log('OpenAI initialized successfully');
        } else {
          console.warn('OpenAI API key not found. AI responses will use fallback system.');
        }
        break;
      case 'gemini':
        // Google Gemini initialization
        this.geminiApiKey = process.env.GEMINI_API_KEY;
        break;
      case 'claude':
        // Anthropic Claude initialization
        this.claudeApiKey = process.env.CLAUDE_API_KEY;
        break;
      case 'ollama':
        // Local Ollama initialization
        this.ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
        break;
      default:
        console.warn('Unknown AI provider. Using fallback system.');
    }
  }

  async generateResponse(message, context = {}) {
    try {
      switch (this.aiProvider) {
        case 'openai':
          return await this.generateOpenAIResponse(message, context);
        case 'gemini':
          return await this.generateGeminiResponse(message, context);
        case 'claude':
          return await this.generateClaudeResponse(message, context);
        case 'ollama':
          return await this.generateOllamaResponse(message, context);
        default:
          return await this.generateFallbackResponse(message, context);
      }
    } catch (error) {
      console.error('AI response generation error:', error);
      return await this.generateFallbackResponse(message, context);
    }
  }

  async generateOpenAIResponse(message, context) {
    if (!this.openai) {
      return await this.generateFallbackResponse(message, context);
    }

    const systemPrompt = this.buildSystemPrompt(context);
    
    const completion = await this.openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  }

  async generateGeminiResponse(message, context) {
    if (!this.geminiApiKey) {
      return await this.generateFallbackResponse(message, context);
    }

    const systemPrompt = this.buildSystemPrompt(context);
    const prompt = `${systemPrompt}\n\nUser: ${message}\nAssistant:`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.geminiApiKey}`,
      {
        contents: [{
          parts: [{ text: prompt }]
        }]
      }
    );

    return response.data.candidates[0].content.parts[0].text.trim();
  }

  async generateClaudeResponse(message, context) {
    if (!this.claudeApiKey) {
      return await this.generateFallbackResponse(message, context);
    }

    const systemPrompt = this.buildSystemPrompt(context);

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-sonnet-20240229',
        max_tokens: 300,
        system: systemPrompt,
        messages: [
          { role: 'user', content: message }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.claudeApiKey,
          'anthropic-version': '2023-06-01'
        }
      }
    );

    return response.data.content[0].text.trim();
  }

  async generateOllamaResponse(message, context) {
    const systemPrompt = this.buildSystemPrompt(context);

    const response = await axios.post(`${this.ollamaUrl}/api/generate`, {
      model: process.env.OLLAMA_MODEL || 'llama2',
      prompt: `${systemPrompt}\n\nUser: ${message}\nAssistant:`,
      stream: false
    });

    return response.data.response.trim();
  }

  buildSystemPrompt(context) {
    const { userRole, userName, chatHistory } = context;
    
    return `You are a helpful AI assistant for a job matching system in Tanzania. Your role is to help users with:

1. Job applications and search
2. Profile management and updates
3. CV/Resume creation and download
4. Account and password issues
5. General system navigation

User Context:
- Role: ${userRole || 'User'}
- Name: ${userName || 'User'}

Guidelines:
- Be friendly, professional, and helpful
- Provide specific, actionable advice
- Keep responses concise but informative
- If you don't know something, suggest contacting human support
- Focus on job matching system features and functionality
- Use simple language suitable for users in Tanzania

Available system features:
- Job browsing and application
- Profile management (Academic Qualifications, Work Experience, Skills, Languages)
- CV preview and download
- Notifications and alerts
- Interview scheduling
- Market analytics and skill recommendations

Respond in a helpful, conversational tone.`;
  }

  async generateFallbackResponse(message, context) {
    // Enhanced fallback system with better keyword matching
    const lowerMessage = message.toLowerCase();
    
    // FAQ patterns with more comprehensive responses
    const faqPatterns = [
      {
        keywords: ['password', 'reset', 'forgot', 'login', 'signin', 'sign in'],
        response: "To reset your password, go to the login page and click 'Forgot Password'. You'll receive an email with reset instructions. If you don't receive the email, check your spam folder or contact support."
      },
      {
        keywords: ['apply', 'job', 'application', 'apply for job', 'job application'],
        response: "To apply for a job:\n1. Browse job listings in your dashboard\n2. Click 'Apply' on positions that interest you\n3. Make sure your profile is complete\n4. Submit your application\n\nTip: Complete profiles get better responses from employers!"
      },
      {
        keywords: ['profile', 'update', 'edit', 'change profile', 'update profile'],
        response: "You can update your profile sections:\n• Academic Qualifications\n• Work Experience\n• Computer Skills\n• Languages\n• Personal Information\n\nGo to your dashboard and select the section you want to update."
      },
      {
        keywords: ['cv', 'resume', 'download', 'download cv', 'download resume'],
        response: "To download your CV:\n1. Go to 'CV Preview' in your dashboard\n2. Review your information\n3. Click 'Download PDF'\n\nMake sure all your profile sections are complete for the best CV!"
      },
      {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        response: "Hello! 👋 I'm here to help you with the job matching system. I can assist you with job applications, profile updates, CV downloads, and more. What would you like to know?"
      },
      {
        keywords: ['help', 'support', 'assist', 'what can you do'],
        response: "I can help you with:\n🔍 Finding and applying for jobs\n📝 Updating your profile\n📄 Downloading your CV\n🔐 Password and login issues\n📊 Understanding system features\n\nWhat specific help do you need?"
      },
      {
        keywords: ['thank', 'thanks', 'appreciate'],
        response: "You're very welcome! 😊 I'm glad I could help. Is there anything else you'd like to know about the job matching system?"
      },
      {
        keywords: ['bye', 'goodbye', 'see you', 'farewell'],
        response: "Goodbye! 👋 Best of luck with your job search. Feel free to come back anytime if you need help with the system!"
      }
    ];

    // Check FAQ patterns
    for (const pattern of faqPatterns) {
      if (pattern.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return pattern.response;
      }
    }

    // Question detection
    if (lowerMessage.includes('how') || lowerMessage.includes('what') || lowerMessage.includes('where') || lowerMessage.includes('?')) {
      return "I'd be happy to help you with that! Could you please be more specific? I can assist with:\n• Job applications and search\n• Profile management\n• CV/Resume download\n• Account issues\n• System navigation\n\nWhat exactly would you like to know?";
    }

    // Default helpful response
    return "I'm here to help you with the job matching system! 🚀\n\nI can assist with job applications, profile updates, CV downloads, and more. Type 'help' to see all the ways I can assist you, or just ask me a specific question!";
  }
}

module.exports = AIService;
