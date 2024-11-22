import React, { FC } from 'react';
import styles from './productsList.module.css';
import { useSelector } from '../../hooks/redux-hooks';
import { getProductsData } from '../../services/selectors/products';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList: FC = () => {
  const productsData = useSelector(getProductsData);

  return (
    <ul className={styles.productsList}>
      {productsData.map((product, index) => (
        <ProductCard key={index} product={product} theme=' ' />
      ))}
    </ul>
  );
};
export default ProductsList;
