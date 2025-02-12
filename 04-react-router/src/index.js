import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './routes/Users';
import Posts from './routes/Posts';
import Name from './routes/Name';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path='users' element={<Users />} >
          <Route path="name" element={<Name />} />
        </Route>
        <Route path='posts' element={<Posts />} />
        <Route path="*" element={<h1>Route does not exist</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

