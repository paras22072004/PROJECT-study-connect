import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './chat.css'

const SOCKET_URL = 'http://localhost:5000';
const API_MESSAGES = 'http://localhost:5000/api/messages';

export default function ChatRoom(){
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const bottomRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_MESSAGES).then(res => setMessages(res.data)).catch(()=>{});

    const s = io(SOCKET_URL);
    setSocket(s);

    s.on('newMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const payload = { senderId: user.id, senderName: user.name || user.email, text };
    
    socket.emit('sendMessage', payload);
    setText('');
  };

  const goToDashboard = () => {
    if(user.role === 'teacher') {
      navigate('/teacher-dashboard');
    } else if(user.role === 'student') {
      navigate('/student-dashboard');
    } else {
      alert('User role unknown!');
    }
  }

  return (
    <div className="mainchat">
      <h2 className="chath2">Live Doubt Chat</h2>

      
      <button onClick={goToDashboard} className="dashboard-btn">
        Go to Dashboard
      </button>

      <div className="chat1st">
        {messages.map((m) => (
          <div key={m._id || Math.random()} className={`mb-2 ${m.senderId === user.id ? 'text-right' : 'text-left'}`}>
            <div className="chat2nd">
              <small className="csmall1">{m.senderName}</small>
              <div>{m.text}</div>
              <small className="csmall2">{new Date(m.createdAt).toLocaleString()}</small>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={send} className="chatform">
        <input className="inputc" value={text} onChange={e=>setText(e.target.value)} placeholder="Type your doubt..." />
        <button className="chatbtn">Send</button>
      </form>
    </div>
  );
}
