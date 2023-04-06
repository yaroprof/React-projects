import React from 'react';

const CartItem = ({img, title, price}) => {
  return (
    <article className='cart-item'>
      <img src={img} alt="title" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn">remove</button>
      </div>
    </article>
  );
};

export default CartItem;
