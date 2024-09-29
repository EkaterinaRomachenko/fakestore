import React, { FC } from 'react';
import styles from './productCard.module.css';
import { TProduct } from '../../services/utils/types';

interface ProductCardProps {
  product: TProduct;
  theme: string;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li className={styles.productCard}>
      <img className={styles.productCardImage} src={product.image} alt={product.title} />
      <hr />
      <div className={styles.productCardContent}>
        <h3 className={styles.productCardTitle}>{product.title}</h3>
        <p className={styles.productCardPrice}>${product.price}</p>
      </div>
      <button className={styles.productCardButton}>Add to cart</button>
    </li>
  );
};

export default ProductCard;
