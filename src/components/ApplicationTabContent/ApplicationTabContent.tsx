import React, { FC } from 'react';
import styles from './applicationTabContent.module.css';
import { TProduct } from '../../services/utils/types';

interface IProps {
  product: TProduct;
}

const ApplicationTabContent: FC<IProps> = ({ product }) => {
  return <p className={styles.compositionTabContent__text}>
    {product.application}
  </p>;
};

export default ApplicationTabContent;
