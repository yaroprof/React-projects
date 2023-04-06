import React from 'react';
// import { useGlobalContext } from './context';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <div className="App">
      {/* <div className="loading">
        <h1>Loading...</h1>
      </div> */}

      <main>
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
