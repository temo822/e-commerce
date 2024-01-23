// components/Product.jsx
import React, { useState } from 'react';

const Product = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div>
      <h2>Product Title</h2>
      <p>Product Description</p>
      <p>Price: $19.99</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => addToCart({ name: 'Product', quantity })}>
        Add to Cart
      </button>
      <button onClick={increaseQuantity}>+</button>
      <button onClick={decreaseQuantity}>-</button>
    </div>
  );
};
