import { useState, useReducer, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Message } from '../../types';
import styles from './AIAssistant.module.css';

type ChatState = {
  messages: Message[];
  isLoading: boolean;
};

type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_MESSAGES' };

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'CLEAR_MESSAGES':
      return { messages: [], isLoading: false };
    default:
      return state;
  }
};

const SYSTEM_PROMPT = `You are an AI assistant embedded in Shivabasava G. Nandargi's portfolio. You have deep knowledge about:
- His experience as a Full-Stack Developer and GenAI Engineer
- His expertise in React, Angular, TypeScript, Python, FastAPI, LangChain, RAG, Vector DBs, and AI Agents
- His work on production-scale applications serving 50K+ users
- His focus on GenAI security, including prompt injection defense and data leakage prevention
- His 6+ years of experience across various tech companies

Provide helpful, accurate information about his background, skills, and projects. Be professional yet conversational.`;

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    isLoading: false,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
    setInput('');
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...state.messages, userMessage],
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message || 'Sorry, I encountered an error.',
      };

      dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage });
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content:
          'To enable the AI assistant, connect to Supabase from the Make settings page and add your ANTHROPIC_API_KEY as a secret. The assistant will then be able to answer questions about this portfolio.',
      };
      dispatch({ type: 'ADD_MESSAGE', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <>
      <button
        className={styles.floatingButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.header}>
              <div>
                <h3 className={styles.title}>AI Assistant</h3>
                <p className={styles.subtitle}>Ask me anything about this portfolio</p>
              </div>
              <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            <div className={styles.messages}>
              {state.messages.length === 0 && (
                <div className={styles.welcomeMessage}>
                  <p>👋 Hi! I can help you learn more about Shivabasava's experience and skills.</p>
                  <div className={styles.suggestions}>
                    <button
                      className={styles.suggestion}
                      onClick={() => setInput('What are your main areas of expertise?')}
                    >
                      What are your main areas of expertise?
                    </button>
                    <button
                      className={styles.suggestion}
                      onClick={() => setInput('Tell me about your GenAI projects')}
                    >
                      Tell me about your GenAI projects
                    </button>
                    <button
                      className={styles.suggestion}
                      onClick={() => setInput('What is your approach to AI security?')}
                    >
                      What is your approach to AI security?
                    </button>
                  </div>
                </div>
              )}
              {state.messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === 'user' ? styles.userMessage : styles.assistantMessage
                  }
                >
                  <div className={styles.messageContent}>{message.content}</div>
                </div>
              ))}
              {state.isLoading && (
                <div className={styles.assistantMessage}>
                  <div className={styles.typing}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button className={styles.sendButton} onClick={handleSend} disabled={!input.trim()}>
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
