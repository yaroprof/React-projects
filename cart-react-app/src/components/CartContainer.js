import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from '../context';

const CartContainer = () => {
  const { cart } = useGlobalContext();
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CartContainer;
