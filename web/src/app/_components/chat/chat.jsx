'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';
import { logger } from '../../logger';
import styles from './chat.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AIChat() {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [messages, setMessages] = useState([
      { id: crypto.randomUUID(), sender: 'ai', text: `Let's get to work!` },
   ]);
   const [userInputText, setUserInputText] = useState('');
   const [loading, setLoading] = useState(false);
   const [visible, setVisible] = useState(false);
   const messagesEndRef = useRef(null);

   useEffect(() => {
      const isChatVisible = searchParams.get('chat') === 'true';
      setVisible(isChatVisible);
   }, [searchParams]);

   // Auto-scroll to latest message
   useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);

   const sendMessage = async (message = null, isConfirmed = false) => {
      let text = message?.text || userInputText;
      if (text.trim().length === 0) return;
      logger.info('Sending message:', text);

      if (!isConfirmed) {
         const userMessage = {
            id: crypto.randomUUID(),
            text,
            sender: 'user',
            action: 'message',
            showSupportingHtml: false,
         };
         setMessages((prev) => [...prev, userMessage]);
         setUserInputText('');
      }
      setLoading(true);

      try {
         const response = await fetch('/api/ai/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, isConfirmed }),
         });

         const payload = await response.json();
         if (response.ok) {
            const aiMessage = {
               id: crypto.randomUUID(),
               text: payload.response,
               data: payload.data,
               html: payload.html,
               renderCode: payload.renderCode,
               sender: 'ai',
               action: payload.requiresConfirmation ? 'confirm' : 'message',
               showSupportingHtml: false,
            };
            setMessages((prev) => [...prev, aiMessage]);
         } else {
            logger.error('API Error:', payload);
         }
      } catch (error) {
         logger.error('Network error:', error);
      } finally {
         setLoading(false);
      }
   };

   const showSupportingHtml = (idx) => {
      setMessages((prevMessages) => {
         return prevMessages.map((msg, i) =>
            i === idx
               ? { ...msg, showSupportingHtml: !msg.showSupportingHtml }
               : msg,
         );
      });
   };

   const closePanel = () => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('chat');

      const newPath = `${window.location.pathname}?${params.toString()}`;
      router.replace(newPath);

      setVisible(false);
   };

   return (
      <div
         className={styles.main}
         style={{ display: visible ? 'flex' : 'none' }}
      >
         <div className="spaced-row">
            <h1>AI Chat</h1>
            <button onClick={closePanel}>
               <CloseIcon
                  sx={{ color: 'var(--subtle-color)' }}
                  fontSize="small"
               />
            </button>
         </div>
         <div className={styles.messageList}>
            {messages.map((msg, idx) => (
               <React.Fragment key={msg.id}>
                  {msg.data && (
                     <div className={styles.dataContainer}>
                        {/* {msg.renderCode !== 'list_aircraft' && (
                           <pre style={{ maxWidth: 300 }}>
                              {msg.renderCode}
                              {JSON.stringify(msg.data, null, 2)}
                           </pre>
                        )} */}
                        {/* {msg.renderCode === 'list_aircraft' && (
                           <ListAircraft envelopedData={msg.data} />
                        )} */}
                     </div>
                  )}

                  <motion.div
                     className={`${styles.message} ${
                        msg.sender === 'user'
                           ? styles.userMessage
                           : styles.aiMessage
                     }`}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <div>
                        <Markdown>{msg.text}</Markdown>
                        {msg.html && (
                           <>
                              <button onClick={() => showSupportingHtml(idx)}>
                                 {msg.showSupportingHtml
                                    ? 'Hide reference information'
                                    : 'See reference information'}
                              </button>
                              <div
                                 style={{
                                    display: msg.showSupportingHtml
                                       ? 'block'
                                       : 'none',
                                 }}
                                 className={styles.supportingHtml}
                                 dangerouslySetInnerHTML={{
                                    __html: msg.html,
                                 }}
                              ></div>
                           </>
                        )}
                        {msg.action === 'confirm' && idx > 0 && (
                           <div className={styles.confirmButtons}>
                              <button
                                 onClick={() =>
                                    sendMessage(messages[idx - 1], true)
                                 }
                                 className={styles.confirmButton}
                              >
                                 Confirm
                              </button>
                           </div>
                        )}
                     </div>
                  </motion.div>
               </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
         </div>

         {/* Input Field */}
         <div className={styles.inputContainer}>
            <input
               type="text"
               className={styles.messageInput}
               placeholder="Type a message..."
               value={userInputText}
               autoFocus
               onChange={(e) => setUserInputText(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
               onClick={sendMessage}
               disabled={loading}
               className={styles.sendButton}
            >
               {loading ? (
                  <div className={styles.loadingSpinner}></div>
               ) : (
                  <span>Send</span>
               )}
            </button>
         </div>
      </div>
   );
}
