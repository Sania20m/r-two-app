// CandyContext.js
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CandyContext = createContext();

export const CandyProvider = ({ children }) => {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState(new Map());
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addCandy = (name, description, price) => {
    const newCandy = { id: uuidv4(), name, description, price };
    setCandies((prevCandies) => [...prevCandies, newCandy]);
  };

  const addToCart = (candy, quantity) => {
    // Check if the candy is already in the cart
    const existingCandy = cart.get(candy.id);

    if (existingCandy) {
      // If the candy is in the cart, update the quantity and total price
      cart.set(candy.id, {
        ...existingCandy,
        quantity: existingCandy.quantity + quantity,
        totalPrice: existingCandy.totalPrice + candy.price * quantity,
      });
    } else {
      // If the candy is not in the cart, add it with the specified quantity
      cart.set(candy.id, {
        ...candy,
        quantity: quantity,
        totalPrice: candy.price * quantity,
      });
    }

    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
    setCart(new Map(cart)); // Force update to trigger re-render
  };

  return (
    <CandyContext.Provider value={{ candies, cart: Array.from(cart.values()), totalQuantity, addCandy, addToCart }}>
      {children}
    </CandyContext.Provider>
  );
};
