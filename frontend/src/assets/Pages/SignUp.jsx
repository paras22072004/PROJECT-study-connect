import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const API = 'http://localhost:5000/api/auth';

export default function SignUp(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('student');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/signup`, { name, email, password, role });
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate(res.data.user.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
  <div className="mainhead">
    <div className="signup-wrapper">
      <div className="signup-left">
      </div>

      <div className="signup-right">
        <h2 className="headingh2">Sign Up</h2>
        <form onSubmit={submit} className="form">
          <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
          <input required value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
          <input required value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
          <select value={role} onChange={e=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <button className="btn">Sign Up</button>
        </form>
      </div>

    </div>
  </div>

  );
}
