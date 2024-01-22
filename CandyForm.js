// CandyForm.js
import React, { useState, useContext } from 'react';
import { CandyContext } from './CandyContext';

const CandyForm = () => {
  const { addCandy } = useContext(CandyContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddCandy = () => {
    addCandy(name, description, price);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Candy Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddCandy}>Add Candy</button>
    </div>
  );
};

export default CandyForm;
