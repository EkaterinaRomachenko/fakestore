import React, { FC } from 'react';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p>© 2024 Fake Store. All rights reserved.</p>
    </div>
  );
};

export default Footer;
