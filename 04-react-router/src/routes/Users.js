import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Users = () => {
  return (
    <div className='container'>
      <Header />
      <main>
        <h1>Users route</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa dolorum, odit aliquid eveniet ducimus! Pariatur quis repellat modi aperiam, ipsa quo corporis ab odit molestiae. Asperiores voluptates ipsa ex!</p>
 
      </main>
      <Footer />
      <Outlet />
    </div>
    
  );
};

export default Users;
