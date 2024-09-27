import React, { FC } from 'react';
import styles from './cart.module.css';
import { BsCart4 } from 'react-icons/bs';

const Cart: FC = () => {
  return (
    <>
      <a href="#">
        <BsCart4 className={styles.cart} />
      </a>
    </>
  );
};

export default Cart;
