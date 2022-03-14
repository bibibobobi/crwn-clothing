import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './custom-button.component';
import CartItem from './cart-item.component';

import '../Sass/cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStatetoProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStatetoProps)(CartDropdown);
