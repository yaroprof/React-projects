import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';


const App = () => {
  return (
    
    <div className="App">
      <Header />
      <main>
        <h1>Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, adipisci cumque nobis cum, ullam voluptate odit temporibus ab non explicabo quibusdam dignissimos accusantium aspernatur itaque sit at, aliquid soluta aperiam?</p>
      </main>
      <Footer />
 
    </div>
  );
}

export default App;
