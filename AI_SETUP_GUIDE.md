# AI Chatbot Integration Guide

Your job matching system now supports multiple AI providers for intelligent chat responses. Here's how to set up and configure different AI services.

## Quick Setup (Recommended: OpenAI)

### 1. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Click "Create new secret key"
4. Copy the API key (starts with `sk-`)

### 2. Configure Environment
Edit `backend/.env` file:
```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your-actual-api-key-here
OPENAI_MODEL=gpt-3.5-turbo
```

### 3. Restart Backend Server
```bash
cd backend
npm start
```

That's it! Your chatbot now uses OpenAI GPT for intelligent responses.

## Alternative AI Providers

### Option 1: Google Gemini (Free Tier Available)
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Update `.env`:
```env
AI_PROVIDER=gemini
GEMINI_API_KEY=your-gemini-api-key-here
```

### Option 2: Anthropic Claude (High Quality)
1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Create an API key
3. Update `.env`:
```env
AI_PROVIDER=claude
CLAUDE_API_KEY=your-claude-api-key-here
```

### Option 3: Local AI (Ollama - Free & Private)
1. Install [Ollama](https://ollama.ai/)
2. Run: `ollama pull llama2`
3. Update `.env`:
```env
AI_PROVIDER=ollama
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama2
```

## Features

### What the AI Bot Can Do:
- ✅ Answer questions about job applications
- ✅ Help with profile management
- ✅ Guide users through CV creation
- ✅ Assist with password resets
- ✅ Explain system features
- ✅ Provide personalized responses based on user context
- ✅ Remember conversation history
- ✅ Fallback to keyword responses if AI fails

### Smart Features:
- **Context Awareness**: Knows if user is applicant or employer
- **Conversation Memory**: Remembers recent chat history
- **Fallback System**: Works even without AI API keys
- **Multi-language Support**: Can be configured for different languages
- **Cost Control**: Limits response length to control API costs

## Cost Considerations

### OpenAI GPT-3.5-turbo
- ~$0.002 per 1K tokens
- Average chat response: ~100-200 tokens
- Cost per response: ~$0.0002-0.0004
- 1000 chat responses ≈ $0.20-0.40

### Google Gemini
- Free tier: 60 requests per minute
- Paid: $0.00025 per 1K characters

### Anthropic Claude
- $0.008 per 1K tokens (input)
- $0.024 per 1K tokens (output)

### Ollama (Local)
- Completely free
- Requires local computing resources
- No internet dependency

## Customization

### Modify AI Behavior
Edit `backend/src/services/aiService.js` → `buildSystemPrompt()` method to customize:
- Personality and tone
- Specific knowledge areas
- Response format
- Language and cultural context

### Add New AI Providers
1. Add new case in `generateResponse()` method
2. Implement provider-specific API call
3. Add environment variables
4. Update this guide

## Troubleshooting

### Bot Not Responding
1. Check backend console for errors
2. Verify API key is correct
3. Check internet connection
4. Ensure AI provider service is available

### Fallback Mode
If AI fails, the system automatically uses enhanced keyword-based responses. This ensures the chat always works.

### Rate Limits
- OpenAI: 3 requests per minute (free tier)
- Gemini: 60 requests per minute (free tier)
- Claude: Varies by plan

## Testing

Send these messages to test AI integration:
- "Hello, I need help with job applications"
- "How do I update my profile?"
- "Can you help me download my CV?"
- "I forgot my password"

## Security Notes

- Never commit API keys to version control
- Use environment variables for all secrets
- Monitor API usage and costs
- Consider rate limiting for production use

## Support

If you need help setting up AI integration:
1. Check the console logs for error messages
2. Verify your API keys are valid
3. Test with the fallback system first
4. Contact support with specific error messages

---

**Note**: The system works perfectly without AI integration using the enhanced fallback responses. AI integration just makes the responses more intelligent and contextual.
