import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './modules/Home';
import Products from './modules/Products';
import Product from './modules/Product';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/productCard" element={<ProductCard />}   />
        <Route path="/cart" element={<Cart />}   />
        <Route path="*" element={<div>404</div>}   />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
