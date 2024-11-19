import React, { FC } from 'react';
import styles from './descriptionTabContent.module.css';
import { TProduct } from '../../services/utils/types';

interface IProps {
  product: TProduct;
}

const DescriptionTabContent: FC<IProps> = ({ product }) => {
  return (
    <>
      <h2 className={styles.descriptionTabContent__title}>{product.name}</h2>
      <p className={styles.descriptionTabContent__description}>{product.description}</p>
      <div className={styles.descriptionTabContent__info}>
        <p className={styles.descriptionTabContent__text}>Category: </p>
        <p className={styles.descriptionTabContent__textCategory}>{product.category}</p>
      </div>
    </>
  );
};

export default DescriptionTabContent;
