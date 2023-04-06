import React from 'react';
// import { useGlobalContext } from './context';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { AppProvider } from './context';

function App() {
  return (
    <div className="App">
      {/* <div className="loading">
        <h1>Loading...</h1>
      </div> */}

      <main>
        <AppProvider>
          <Navbar />
          <CartContainer />
        </AppProvider>
      </main>
    </div>
  );
}

export default App;
