import React, { FC } from 'react';
import styles from './cart.module.css';
import { BsCart4 } from 'react-icons/bs';
import { useTheme } from '../../Context/ThemeContext';

const Cart: FC = () => {
  const { theme } = useTheme();
  return (
    <button className={styles.cart__button}>
      <BsCart4
        size={34}
        className={`${styles.cart__icon} ${
          theme === 'light' ? styles.lightThemeIcon : styles.darkThemeIcon
        }`}
      />
    </button>
  );
};

export default Cart;
