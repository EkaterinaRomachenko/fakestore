import React, { FC } from 'react';
import styles from './productCard.module.css';
import { IoMdHeart } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { TProduct } from '../../services/utils/types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: TProduct;
  theme: string;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <li className={styles.productCard}>
      <Link to={`/product/${product.id}`}>
        <img className={styles.productCardImage} src={product.imageUrl} alt={product.name} />
      </Link>
      {isFavorite ? (
        <IoMdHeart
          className={styles.productCardHeart}
          size={25}
          color="#9400D3"
          onClick={handleFavorite}
        />
      ) : (
        <FaRegHeart
          className={styles.productCardHeart}
          size={25}
          color="#9400D3"
          onClick={handleFavorite}
        />
      )}
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
