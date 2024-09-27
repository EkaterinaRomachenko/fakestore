import React, { FC } from 'react';
import styles from './header.module.css';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Fake Store</h1>
      <nav>
        <ul className={styles.menu}>
          <Link to="/" className={styles.menu__item}>Home</Link>
          <li className={styles.menu__item}>Contact</li>
          <Link to="/delivery" className={styles.menu__item}>Delivery</Link>
        </ul>
      </nav>
      <div className={styles.menu}>
        <SwitchTheme />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
