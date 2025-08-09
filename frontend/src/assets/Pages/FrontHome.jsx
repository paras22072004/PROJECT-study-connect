import React, { useState } from 'react';
import './Home.css'

const FrontHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <div className='homemain'> 
   <div id="welcome">
      <h1 class="typewriter">"Welcome to Study-Connect"</h1>
      <h2>Empowering Students & Teachers and Where Students and Teachers Meet</h2> 
      <h3>Connect, Learn, and Grow</h3>
   </div>
   <div className='div2nd'>
      <div id="teacher">
        <h2>For Teachers</h2>
        <p>"Share your knowledge and help students grow.
            Connect with learners, answer their queries, and make a difference—anytime, anywhere.
            Teaching made simple and impactful."</p>
        <p> Join as Teacher</p>
    </div>
    <div id="student">
         <h2>For Students</h2>
         <p>Got doubts? Get instant help from experienced teachers.
          Join your class, ask questions anytime, and get clear answers with step-by-step explanations.
          Your learning, your pace, your success."</p>
         <p>Join as Student</p>
    </div>

   </div>

  </div>
  )
}
export default FrontHome;

  