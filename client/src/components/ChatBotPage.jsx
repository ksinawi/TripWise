import '../styles/chatbot.css';
import robot from '../images/chatbot.png';

import React, { useState, useRef, useEffect } from 'react';
import ChatMessages from './ChatMessages';

const ChatBotPage = () => {

    const [chatHistory, setChatHistory] = useState([]);

    const chatBodyRef = useRef();

    const generateBotResponse = async (chatHistory) => {
        const updateHistory = (text) => {
            setChatHistory(c => [...c.filter(msg => msg.text !== 'Thinking...'), {role: 'model', text}]);
        }

        chatHistory = chatHistory.map(({role, text}) => ({ role, parts: [{ text }]}));

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contents: chatHistory}),
        }

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            
            if(!response.ok) throw new Error(data.error.message || "Error");
            console.log(data);
            
            const parts = data.candidates[0].content.parts;

            let apiResponseText = '';
            
            if (parts.length > 1) {
                apiResponseText = parts[1].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
            } else {
                apiResponseText = parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
            }

            updateHistory(apiResponseText);

        } catch (err) {
            console.log(err);
        }
    }

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userMessage = inputRef.current.value.trim();
        inputRef.current.value = '';

        if (!userMessage) {
            return;
        }

        const updatedChatHistory = [...chatHistory, { role: "user", text: userMessage }];

        setChatHistory(updatedChatHistory);

        setTimeout(() => {
            const updatedChatWithThinking = [...updatedChatHistory, { role: "model", text: "Thinking..." }];
            setChatHistory(updatedChatWithThinking);
        
            generateBotResponse(updatedChatWithThinking);
          }, 300);

    }

    useEffect(() => {
        chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});
    }, [chatHistory]);

    return (
        <section className='chatbot-grid'>
            <div className='chatbot-container'>
                <div className='container-header'>
                    <img src={robot} className='header-img' alt="AI" />
                    <p className='header-name'>Chatbot</p>
                </div>
                
                <div className='container-main'>
                    <div ref={chatBodyRef} className="chat-window">
                        <ChatMessages chat={{ role: 'model', text: 'Hi! How can I help you today?' }} />

                        {chatHistory.map((message, index) => (
                            <ChatMessages key={index} chat={message}/>
                        ))}
                    </div>

                    <form action="#" className='user-input' onSubmit={handleSubmit}>
                        <input ref={inputRef} type='text' placeholder='Message...' className='main-input'/>
                        <button className="send-button">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ChatBotPage;
