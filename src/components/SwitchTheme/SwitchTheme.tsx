import React, { FC, useEffect } from 'react';
import styles from './switchTheme.module.css';
import { PiSunThin } from "react-icons/pi";
import { PiMoonStarsThin } from 'react-icons/pi';
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
        <PiSunThin size={30} className={`${styles.theme} ${styles.lightThemeIcon}`} />
      ) : (
        <PiMoonStarsThin size={30} className={`${styles.theme} ${styles.darkThemeIcon}`} />
      )}
    </button>
  );
};

export default SwitchTheme;
