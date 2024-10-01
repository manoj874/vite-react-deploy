import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import './App.css';
import profileImage from './portfolioimage.jpeg';
import pythonIcon from './assets/Python.jpeg'; // Ensure these paths are correct
import javaIcon from './assets/java.jpeg';
import htmlIcon from './assets/JavaScript.jpeg';
import jsIcon from './assets/html.jpg';

// Skills Component
function Skills() {
  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.2 }}
    >
      <h3>My Skills</h3>
      <div className="skills-container">
        {/* Skill Python */}
        <div className="skill">
          <img src={pythonIcon} alt="Python" />
          <h4>Python</h4>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }} 
              animate={{ width: '85%' }} 
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>

        {/* Skill Java */}
        <div className="skill">
          <img src={javaIcon} alt="Java" />
          <h4>Java</h4>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }} 
              animate={{ width: '80%' }} 
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>

        {/* Skill HTML */}
        <div className="skill">
          <img src={htmlIcon} alt="HTML" />
          <h4>HTML</h4>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }} 
              animate={{ width: '90%' }} 
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>

        {/* Skill JavaScript */}
        <div className="skill">
          <img src={jsIcon} alt="JavaScript" />
          <h4>JavaScript</h4>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }} 
              animate={{ width: '80%' }} 
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <motion.div 
        className="hero" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.img 
            src={profileImage}
            className="profile-pic"
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: 'spring', stiffness: 120 }}
          />
          <motion.div className="hero-text">
            <h1>Manoj</h1>
            <p>Final Year, Computer Science and Engineering</p>
            <p>Karnataka Polytechnic, Mangalore</p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        className="about"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h3>About Me</h3>
        <p>
          I'm a passionate final-year student focused on full-stack development, digital transformation, and design thinking. I enjoy building innovative solutions that merge technology with creativity.
        </p>
      </motion.section>

      {/* Skills Section */}
      <Skills />

      {/* Social and Contact Section */}
      <motion.section
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3>Connect with Me</h3>
        <div className="icons">
          <a href="https://www.instagram.com/_acharya_manoj" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
          <a href="mailto:acharyamanoj2006@gmail.com">
            <FaEnvelope size={40} />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>© 2024 Manoj. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
