import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Delight!</h1>
      <p>Click below to see our menu.</p>
      <Link to="/home">
        <button>Go to Menu</button>
      </Link>
    </div>
  );
};

export default LandingPage;