import React, { FC } from 'react';
import styles from './switchTheme.module.css';
import { IoMoonOutline } from 'react-icons/io5';
const SwitchTheme: FC = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    console.log(theme);
  };

  return (
    <div>
      <a href="#" onClick={toggleTheme} className={styles.switcher}>
        <IoMoonOutline className={styles.theme} />
      </a>
    </div>
  );
};

export default SwitchTheme;
