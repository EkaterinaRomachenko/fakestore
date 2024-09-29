import React, { FC } from 'react';
import styles from './cardDetails.module.css';
import { useSelector } from '../../hooks/redux-hooks';
import { getProductsData } from '../../services/selectors/products';
import { useParams } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import CounterBtn from '../CounterBtn/CounterBtn';
import { CiShare2 } from 'react-icons/ci';

const CardDetails: FC = () => {
  // получаем данные из store
  const productData = useSelector(getProductsData);
  // получаем id продукта из url
  const { productId } = useParams();

  // находим продукт по id
  const product = productData.find((item) => item.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className={styles.cardDetails}>
      <div className={styles.cardDetails__container}>
        <img src={product.image} alt={product.title} className={styles.cardDetails__image} />
        <div className={styles.cardDetails__info}>
          <article className={styles.cardDetails__infoTop}>
            <h2 className={styles.cardDetails__title}>{product.title}</h2>
            <button className={styles.cardDetails__buttonMore} type="button">
              <p>More details</p>
              <FaAngleDown />
            </button>
          </article>
          <p className={styles.cardDetails__price}>${product.price}</p>
          <article className={styles.cardDetails__containerInfo}>
            <h3 className={styles.cardDetails__subtitle}>Size</h3>
            <ul className={styles.cardDetails__sizes}>
              <li className={styles.cardDetails__sizes__item}>S</li>
              <li className={styles.cardDetails__sizes__item}>M</li>
              <li className={styles.cardDetails__sizes__item}>L</li>
              <li className={styles.cardDetails__sizes__item}>XL</li>
            </ul>
          </article>
          <article className={styles.cardDetails__containerInfo}>
            <CounterBtn />
            <button className={styles.cardDetails__button}>Add to cart</button>
          </article>
          <button className={styles.cardDetails__buttonShare}>
            <span>Share</span>
            <CiShare2 className={styles.cardDetails__icon} />
          </button>
        </div>
      </div>
      <div className={styles.cardDetails__content}>
        <h2 className={styles.cardDetails__title}>{product.title}</h2>
        <p className={styles.cardDetails__description}>{product.description}</p>
      </div>
    </section>
  );
};

export default CardDetails;
