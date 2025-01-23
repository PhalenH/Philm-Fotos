import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <div className="content-box">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Home;