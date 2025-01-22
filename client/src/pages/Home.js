import React, { useState, useEffect } from 'react';
import './Home.css';
import '..'

const Home = () => {
  const [text, setText] = useState(''); // The text being typed out
  const fullText = 'Welcome'; // The complete string to type
  const typingSpeed = 200; // Typing speed in milliseconds

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

  return (
    <div className="home-container">
      <h1 className="typing-text">{text}</h1>
    </div>
  );
};

export default Home;