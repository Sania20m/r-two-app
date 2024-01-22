// Cart.js
import React, { useContext, useState } from 'react';
import { CandyContext } from './CandyContext';
import './Cart.css'

const Cart = () => {
  const { cart, totalQuantity } = useContext(CandyContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-container">
      <div className="cart-header" onClick={toggleCart}>
        {isCartOpen ? 'Hide Cart' : `Cart (${totalQuantity})`}
      </div>
      {isCartOpen && (
        <div className="cart-content">
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.totalPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
