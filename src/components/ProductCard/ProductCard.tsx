import React, { FC } from 'react';
import styles from './productCard.module.css';
import { FaRegHeart } from "react-icons/fa";
import { TProduct } from '../../services/utils/types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: TProduct;
  theme: string;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li className={styles.productCard}>
      <Link to={`/product/${product.id}`}>
        <img className={styles.productCardImage} src={product.imageUrl} alt={product.name} />
      </Link>
      <FaRegHeart className={styles.productCardHeart} size={25} color='#ff8c00' />
      <hr />
      <div className={styles.productCardContent}>
        <h3 className={styles.productCardTitle}>{product.name}</h3>
        <p className={styles.productCardPrice}>{product.price} ₽</p>
      </div>
      <button className={styles.productCardButton}>В корзину</button>
    </li>
  );
};

export default ProductCard;
