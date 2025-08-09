import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FrontHome from './assets/Pages/FrontHome';
import About from './assets/Pages/About';
import Login from './assets/Pages/Login';
import SignUp from './assets/Pages/SignUp';
import TeacherDashboard from './assets/Pages/TeacherDash';
import StudentDashboard from './assets/Pages/Studentdash';
import ChatRoom from './Components/Chat';
import Footer from './Components/Footer';


const App = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/student-dashboard", "/teacher-dashboard","/chat"];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontHome />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
