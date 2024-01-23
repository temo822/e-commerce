// components/Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => (
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.name} - {item.quantity} - 
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
