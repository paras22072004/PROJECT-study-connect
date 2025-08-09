import React from 'react';
import { Link } from 'react-router-dom';
import './Dash.css'

export default function TeacherDashboard(){
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="tmain">
      <h1 className="th1">Teacher Dashboard</h1>
      <p>Welcome, {user.name || user.email}</p>
      <ul className="tul">
        <li><Link to="/chat" className="tl">Open Live Chat</Link></li>
        <li>View student submissions </li>
        <li>Post announcements </li>
      </ul>
    </div>
  );
}
