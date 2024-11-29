// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import LandingPage
import HomePage from './components/HomePage'; // Import HomePage (Menu Page)
import CartPage from './components/CartPage';
import CustomerDetails from './components/CustomerDetails';
import PaymentSuccess from './components/PaymentSuccess';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default Route: Show the Landing Page first */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Other Routes */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
