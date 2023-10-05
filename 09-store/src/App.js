import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './modules/Home';
import Product from './modules/Product';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/productCard" element={<ProductCard />}   />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
