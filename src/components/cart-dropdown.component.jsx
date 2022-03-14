import React from 'react';

import CustomButton from './custom-button.component';

import '../Sass/cart-dropdown.style.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Checkout</CustomButton>
  </div>
);

export default CartDropdown;
