// src/pages/CustomerDetails.js
import React, { useState } from 'react';
import './CustomerDetails.css';  
import { useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = () => {
    if (name && mobile && tableNumber && paymentMethod) {
      // In real application, handle the payment here and then confirm the order
      alert('Order Submitted Successfully!');
      navigate('/payment-success');
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <div className="customer-details-container">
      <div className="customer-details-box">
        <h2>Customer Details</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <br />
          <label>Table Number:</label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            required
          />
          <br />
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
            <option value="">Select</option>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="phonepay">Phone Pay</option>
          </select>
          <br />
          <button type="button" onClick={handleSubmit}>Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerDetails;
