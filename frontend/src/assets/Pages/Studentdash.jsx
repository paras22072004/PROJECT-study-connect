import React from 'react';
import { Link } from 'react-router-dom';
import './Dash.css'

export default function StudentDashboard(){
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="divmain">
      <h1 className="h1dash">Student Dashboard</h1>
      <p>Welcome, {user.name || user.email}</p>
      <ul className="listul">
        <li><Link to="/chat" className="listli">Ask Doubts in Chat</Link></li>
        <li>View assignments </li>
      </ul>
    </div>
  );
}
