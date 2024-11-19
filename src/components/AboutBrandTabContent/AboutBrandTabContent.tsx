import React, { FC } from 'react';
import styles from './aboutBrandTabContent.module.css';
import { TProduct } from '../../services/utils/types';

interface IProps {
  product: TProduct;
}

const AboutBrandTabContent: FC <IProps> = ({ product }) => {
  return (
    <>
      <div className={styles.aboutBrandTabContent__info}>
        <p className={styles.aboutBrandTabContent__title}>Бренд:</p>
        <p className={styles.aboutBrandTabContent__brand}>{product.brand}</p>
      </div>
      <p className={styles.aboutBrandTabContent__text}>
        {product.aboutBrand}
      </p>
    </>
  );
};

export default AboutBrandTabContent;
