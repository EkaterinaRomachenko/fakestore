import React, { FC, useEffect } from 'react';
import styles from './switchTheme.module.css';
import { IoMoonOutline } from 'react-icons/io5';
import { IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../../Context/ThemeContext';

const SwitchTheme: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    document.body.classList.toggle(styles.lightTheme, theme === 'light');
    document.body.classList.toggle(styles.darkTheme, theme === 'dark');
  }, [theme]);

  return (
    <button className={styles.button} onClick={handleToggle}>
      {theme === 'light' ? (
        <IoSunnyOutline size={34} className={`${styles.theme} ${styles.lightThemeIcon}`} />
      ) : (
        <IoMoonOutline size={34} className={`${styles.theme} ${styles.darkThemeIcon}`} />
      )}
    </button>
  );
};

export default SwitchTheme;
