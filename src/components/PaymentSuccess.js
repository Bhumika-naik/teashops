// src/pages/PaymentSuccess.js
import React from 'react';
import './PaymentSuccess.css';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Payment Successful!</h2>
      <p>Thank you for your order. Your payment was successful, and your order is confirmed.</p>
      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default PaymentSuccess;
