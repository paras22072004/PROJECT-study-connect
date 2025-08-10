import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const API = 'https://project-study-connect-backend.onrender.com/api/auth';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate(res.data.user.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="loginmain">
      <h2 className="heading">Login</h2>
      <form onSubmit={submit} className="form">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className='emailfinput' />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="finput"/>
        <button className="loginbtn">Login</button>
      </form>
    </div>
  );
}
