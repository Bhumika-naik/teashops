import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cart, setCart] = useState([
    { name: 'Black Tea', price: '5$', quantity: 2, image: 'black-tea.jpg' },
    { name: 'Veg Sandwich', price: '10$', quantity: 1, image: 'veg-sandwich.jpg' },
  ]);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
      <h2>My Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Food Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image} alt={item.name} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td><button onClick={() => handleRemoveItem(index)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total Price: ${total}</h3>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
