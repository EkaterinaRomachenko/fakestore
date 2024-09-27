import React, { FC, useEffect } from 'react';
import styles from './home.module.css';
import ProductsList from '../ProductsList/ProductsList';


const Home: FC = () => {
  return (
    <>
      <ProductsList />
    </>
  );
};

export default Home;
