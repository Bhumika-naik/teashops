import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';  // Import the CSS file

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Fetch the cart items from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    updateTotalAmount(savedCart);
  }, []);

  // Function to update the total amount
  const updateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalAmount(total);
  };

  // Handle quantity changes: increase or decrease
  const handleQuantityChange = (index, action) => {
    const updatedCart = [...cartItems];
    if (action === 'increase') {
      updatedCart[index].quantity += 1; // No limit on increase
    } else if (action === 'decrease' && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCartItems(updatedCart);
    updateTotalAmount(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    updateTotalAmount(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Proceed to the checkout page
  const handleSubmitOrder = () => {
    navigate('/customer-details');
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <div className="quantity-container">
                  <button
                    className="diamond-btn"
                    onClick={() => handleQuantityChange(index, 'increase')}
                  >
                    <span className="diamond-top">&#x25B2;</span> {/* Custom up arrow (▲) */}
                    <span className="quantity">{item.quantity}</span>
                    <span className="diamond-bottom">&#x25BC;</span> {/* Custom down arrow (▼) */}
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button className="checkout-btn" onClick={handleSubmitOrder}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
