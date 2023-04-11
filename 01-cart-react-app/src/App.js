import React from 'react';
// import { useGlobalContext } from './context';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { AppProvider } from './context';

function App() {

  return (
    <div className="App">

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
