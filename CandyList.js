// CandyList.js
import React, { useContext } from 'react';
import { CandyContext } from './CandyContext';

const CandyList = () => {
  const { candies, addToCart } = useContext(CandyContext);

  const handleBuy = (quantity, candy) => {
    addToCart(candy, quantity);
  };

  return (
    <div>
      <h2>Candy List</h2>
      {candies.map((candy) => (
        <div key={candy.id}>
          <p>{candy.name}</p>
          <p>{candy.description}</p>
          <p>${candy.price}</p>
          <button onClick={() => handleBuy(1, candy)}>Buy 1</button>
          <button onClick={() => handleBuy(2, candy)}>Buy 2</button>
          <button onClick={() => handleBuy(3, candy)}>Buy 3</button>
        </div>
      ))}
    </div>
  );
};

export default CandyList;
