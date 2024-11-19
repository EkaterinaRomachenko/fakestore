import React, { FC } from 'react';
import styles from './cardDetails.module.css';
import { useSelector } from '../../hooks/redux-hooks';
import { getProductsData } from '../../services/selectors/products';
import { useParams } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import CounterBtn from '../CounterBtn/CounterBtn';
import { CiShare2 } from 'react-icons/ci';
import TabsProduct from '../TabsProduct/TabsProduct';
import Reviews from '../Reviews/Reviews';



const CardDetails: FC = () => {
  // получаем данные из store
  const productData = useSelector(getProductsData);
  // получаем id продукта из url
  const { productId } = useParams();

  // находим продукт по id
  const product = productData.find((item) => item.id === Number(productId) );

  if (!product) {
    return <div>Продукт не найден 🙁 </div>;
  }

  return (
    <section className={styles.cardDetails}>
      <div className={styles.cardDetails__containerTop}>
        <img src={product.imageUrl} alt={product.name} className={styles.cardDetails__image} />
        <div className={styles.cardDetails__info}>
          <article className={styles.cardDetails__infoTop}>
            <h2 className={styles.cardDetails__title}>{product.name}</h2>
            <button className={styles.cardDetails__buttonMore} type="button">
              <p>Подробнее</p>
              <FaAngleDown />
            </button>
          </article>
          <p className={styles.cardDetails__price}>{product.price} ₽</p>
          <article className={styles.cardDetails__containerInfo}>
            <h3 className={styles.cardDetails__subtitle}>Объём / мл</h3>
            <ul className={styles.cardDetails__sizes}>
              <li className={styles.cardDetails__sizes__item}>50</li>
              <li className={styles.cardDetails__sizes__item}>100</li>
            </ul>
          </article>
          <article className={styles.cardDetails__containerInfo}>
            <CounterBtn />
            <button className={styles.cardDetails__button}>В корзину</button>
          </article>
          <button className={styles.cardDetails__buttonShare}>
            <span>Поделиться</span>
            <CiShare2 className={styles.cardDetails__icon} />
          </button>
        </div>
      </div>
      <div className={styles.cardDetails__containerBottom}>
        <TabsProduct product={product} />
        <Reviews product={product}   />
      </div>
    </section>
  );
};

export default CardDetails;
