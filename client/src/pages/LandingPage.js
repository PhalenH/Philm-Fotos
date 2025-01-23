import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [text, setText] = useState(''); 
  const fullText = 'Welcome'; 
  const typingSpeed = 200; 
  const navigate = useNavigate();

  useEffect(() => {
    let currentIndex = 0; // Tracks the position in the string

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1)); // Update the text to include all characters up to currentIndex
        currentIndex++; // Move to the next character
      } else {
        clearInterval(interval); // Stop the interval when done
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="home-container" onClick={handleClick}>
      <h1 className="typing-text">{text}</h1>
    </div>
  );
};

export default LandingPage;