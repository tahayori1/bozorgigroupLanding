import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ChatMessage } from '../types';

interface ChatboxProps {
  isHidden: boolean;
}

const Chatbox: React.FC<ChatboxProps> = ({ isHidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();
  const initialMessage = t['chatbox.initialMessage'];

  useEffect(() => {
    if (initialMessage) {
      setMessages([
        { id: Date.now(), text: initialMessage, sender: 'bot' }
      ]);
    }
  }, [locale, initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Close chat window if parent component requests it to be hidden (e.g. mobile menu opens)
  useEffect(() => {
    if (isHidden) {
      setIsOpen(false);
    }
  }, [isHidden]);

  // Focus trapping for accessibility
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = chatboxRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    firstElement?.focus();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    };

  }, [isOpen]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate a bot response after a short delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: t['chatbox.cannedResponse'],
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <div className={`fixed bottom-8 transition-all duration-500 z-50 ${locale === 'ar' ? 'left-8' : 'right-8'} ${isHidden ? 'opacity-0 scale-75 pointer-events-none' : ''}`}>
        {/* Ripple Effect Container */}
        <div className="relative group">
            {!isOpen && (
               <>
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce z-10"></span>
               </>
            )}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 bg-gradient-to-r from-primary to-yellow-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 transform transition-all duration-300 hover:scale-110"
            aria-label={t['chatbox.title']}
            aria-expanded={isOpen}
            aria-controls="chatbox-window"
            tabIndex={isHidden ? -1 : 0}
            >
            {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )}
            </button>
        </div>
      </div>

      <div
        id="chatbox-window"
        ref={chatboxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbox-header"
        className={`fixed bottom-28 z-50 w-[90vw] max-w-sm h-[65vh] bg-background text-foreground border border-border rounded-3xl shadow-2xl flex flex-col transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) ${locale === 'ar' ? 'left-8' : 'right-8'} ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}
      >
        <header className="flex items-center justify-between p-5 border-b border-border bg-gradient-to-r from-primary to-yellow-600 text-white rounded-t-3xl">
          <div className="flex items-center gap-3">
              <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse absolute bottom-0 right-0 border border-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </div>
              </div>
              <div>
                  <h3 id="chatbox-header" className="text-base font-bold tracking-wide leading-none">{t['chatbox.title']}</h3>
                  <span className="text-xs text-white/80 font-light">Online</span>
              </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full p-1 transition-colors" aria-label={t['chatbox.close']}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-secondary/30">
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex items-end gap-2 animate-fade-in-up ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 shadow-sm ${msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-none' : 'bg-white border border-border text-foreground rounded-2xl rounded-bl-none'}`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start animate-fade-in">
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-none bg-white border border-border shadow-sm`}>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-background rounded-b-3xl">
          <div className="flex items-center space-x-2 rtl:space-x-reverse relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t['chatbox.placeholder']}
              aria-label={t['chatbox.placeholder']}
              className="flex-1 w-full bg-muted/40 text-foreground px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/50 focus:bg-background shadow-inner"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !inputValue.trim()} className="absolute right-2 w-10 h-10 flex-shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-md" aria-label={t['chatbox.send']}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rtl:rotate-180 translate-x-0.5 rtl:-translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbox;