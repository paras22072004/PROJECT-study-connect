import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import pic from '../assets/logo.png'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="main">
      <div id="logo-icon">
        <img src={pic} alt="logo" />
      </div>

      <div id="options">
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
        <button onClick={() => setIsModalOpen(true)}>Get Started</button>

       {isModalOpen && (
      <div className="navdiv">
        <div className="nav2nd">
          <h2 className="navh2">Welcome</h2>
           <div className="navdiv2">
            <Link to="/login">
             <button className="navlogin" onClick={() => setIsModalOpen(false)}>Login</button>
            </Link>
            <Link to="/signup">
            < button className="navsign" onClick={() => setIsModalOpen(false)}>Sign Up</button>
            </Link>
          </div>
            <button className="navbtnc" onClick={() => setIsModalOpen(false)}>Close</button>
       </div>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
