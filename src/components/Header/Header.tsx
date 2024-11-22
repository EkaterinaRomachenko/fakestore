import React, { FC } from 'react';
import styles from './header.module.css';
import logo from '../../images/logo.jpg';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import { CiHeart } from 'react-icons/ci';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';

const Header: FC = () => {
  const { theme } = useTheme();
  return (
    <header className={styles.header}>
      {/* <h1 className={styles.title}>Fake Store</h1> */}
      <nav>
        <ul className={styles.menu}>
          <Link to="/" className={styles.menu__item}>
            Home
          </Link>
          <li className={styles.menu__item}>Contact</li>
          <Link to="/delivery" className={styles.menu__item}>
            Delivery
          </Link>
        </ul>
      </nav>
      <div style={{ width: '200px', height: '200px' }}>
        <img style={{ width: '100%' }} src={logo} alt="Логотип сайта" />
      </div>

      <div className={styles.menu}>
        <SwitchTheme />
        <Link to="/cart" className={styles.button}>
          <GiShoppingCart
            size={30}
            className={`${styles.icon} ${
              theme === 'light' ? styles.lightThemeIcon : styles.darkThemeIcon
            }`}
          />
          <p className={styles.button__text}>Корзина</p>
        </Link>
        <Link to="/favorite" className={styles.button}>
          <CiHeart
            size={30}
            className={`${styles.icon} ${
              theme === 'light' ? styles.lightThemeIcon : styles.darkThemeIcon
            }`}
          />
          <p className={styles.button__text}>Избранное</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
