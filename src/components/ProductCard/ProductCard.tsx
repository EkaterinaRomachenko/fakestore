import React, { FC } from 'react';
import styles from './productCard.module.css';
import { TProduct } from '../../services/utils/types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li className={styles.productCard}>
      <Link to={`/product-details/${product.id}`}>
        <img className={styles.productCardImage} src={product.image} alt={product.title} />
      </Link>
      <hr />
      <div className={styles.productCardContent}>
        <div className={styles.productCardInfo}>
          <h3 className={styles.productCardTitle}>{product.title}</h3>
          <p className={styles.productCardPrice}>${product.price}</p>
        </div>
        <button className={styles.productCardButton}>Add to cart</button>
      </div>
    </li>
  );
};

export default ProductCard;
