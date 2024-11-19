import React, { FC, useEffect } from 'react';
import styles from './app.module.css';
import '../../vendor/normalize.css';
import { YMaps } from '@pbe/react-yandex-maps';
import { Routes, Route } from 'react-router-dom';
import { fetchProducts } from '../../services/slice/productsSlice';
import { useDispatch } from '../../hooks/redux-hooks';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Delivery from '../Delivery/Delivery';
import CardDetails from '../CardDetails/CardDetails';


const App: FC = () => {
  const dispatch = useDispatch();
  // получаем список продуктов
  useEffect(() => {
    // запрашиваем список продуктов именно здесь (1 раз при запуске приложения), а не в компоненте продуктов, чтобы не посылать запрос каждый раз при ре-рендере секции
    dispatch(fetchProducts());
  }, []);

  return (
    <YMaps>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/product/:productId" element={<CardDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </YMaps>
  );
};

export default App;
