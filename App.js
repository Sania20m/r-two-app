// App.js
import React from 'react';
import CandyForm from './components/CandyForm';
import CandyList from './components/CandyList';
import Cart from './components/Cart';
import { CandyProvider } from './components/CandyContext';


function App() {
  return (
    <CandyProvider>
      <div>
        <CandyForm />
        <CandyList />
        <Cart />
      </div>
    </CandyProvider>
  );
}

export default App;

