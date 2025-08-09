import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About <span>Study-Connect</span></h1>
      <p>
        Study-Connect is an interactive platform designed to bridge the gap
        between <strong>students</strong> and <strong>teachers</strong>.  
        We believe learning should be <em>accessible</em>, <em>collaborative</em>, 
        and <em>engaging</em>.  
      </p>
      <p>
        Our mission is to provide a space where students can clarify their
        doubts instantly and teachers can guide them effectively — anytime,
        anywhere.
      </p>
      <div className="about-features">
        <div className="feature-card">
          <h3>💬 Easy Doubt Solving</h3>
          <p>Real-time chat with teachers for instant clarification.</p>
        </div>
        <div className="feature-card">
          <h3>📚 Resource Sharing</h3>
          <p>Share notes, assignments, and study materials seamlessly.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Community Learning</h3>
          <p>Engage in discussions and grow together as a learning community.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
