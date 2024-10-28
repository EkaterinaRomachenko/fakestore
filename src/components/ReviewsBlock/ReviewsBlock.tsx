import React, { FC } from 'react';
import styles from './reviewsBlock.module.css';
import { IProps } from '../../services/utils/types';
import ReviewsForm from '../ReviewsForm/ReviewsForm';

const ReviewsBlock: FC<IProps> = ({ product }) => {
  return (
    <div className={styles.reviewsBlock}>
      <nav>
        <ol className={styles.reviewsBlock__nav}>
          <li
            className={`${styles.reviewsBlock__nav__item} ${styles.reviewsBlock__nav__itemActive}`}
          >
            product evaluation
          </li>
          <li className={styles.reviewsBlock__nav__item}>comment</li>
        </ol>
      </nav>
      <div className={styles.reviewsBlock__content}>
        <img
          className={styles.reviewsBlock__content__image}
          src={product.image}
          alt={product.title}
        />
        <h2 className={styles.reviewsBlock__content__title}>{product.title}</h2>
      </div>
      <ReviewsForm />
    </div>
  );
};

export default ReviewsBlock;
