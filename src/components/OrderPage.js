import React, { useState } from 'react';

const OrderPage = ({ cartItems }) => {
  const [orderTotal, setOrderTotal] = useState(0);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // Use useState to track total amount
  React.useEffect(() => {
    setOrderTotal(totalAmount);
  }, [cartItems]);

  return (
    <div>
      <h1>Order Summary</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
          <h2>Total Amount: ${orderTotal}</h2>
        </>
      )}
    </div>
  );
};

export default OrderPage;
