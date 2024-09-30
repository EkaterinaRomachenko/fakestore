import React, { FC } from 'react';
import styles from './aboutBrandTabContent.module.css';

const AboutBrandTabContent: FC = () => {
  return (
    <>
      <div className={styles.aboutBrandTabContent__info}>
        <p className={styles.aboutBrandTabContent__title}>Brand:</p>
        <p className={styles.aboutBrandTabContent__brand}>Fake Brand</p>
      </div>
      <p className={styles.aboutBrandTabContent__text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat error enim nobis,
        temporibus aliquam est expedita labore, voluptatum facilis quis alias natus consequuntur
        quas iure rem ab tempora dignissimos! Quasi.
      </p>
    </>
  );
};

export default AboutBrandTabContent;
