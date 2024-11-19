import React, { FC, useState } from 'react';
import styles from './reviewsBlock.module.css';
import { IProps } from '../../services/utils/types';
import ReviewsForm from '../ReviewsForm/ReviewsForm';
import FormComment from '../FormComment/FormComment';

const ReviewsBlock: FC<IProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'rating' | 'comment'>('rating');

  const handleTabChange = (tab: 'rating' | 'comment') => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.reviewsBlock}>
      <nav>
        <ol className={styles.reviewsBlock__nav}>
          <li
            className={`${styles.reviewsBlock__nav__item} ${
              activeTab === 'rating' ? styles.reviewsBlock__nav__itemActive : ''
            }`}
            onClick={() => handleTabChange('rating')}
          >
            оценка продукта
          </li>
          <li
            className={`${styles.reviewsBlock__nav__item} ${
              activeTab === 'comment' ? styles.reviewsBlock__nav__itemActive : ''
            }`}
            onClick={() => handleTabChange('comment')}
          >
            комментарий
          </li>
        </ol>
      </nav>
      <div className={styles.reviewsBlock__content}>
        <img
          className={styles.reviewsBlock__content__image}
          src={product.imageUrl}
          alt={product.name}
        />
        <h2 className={styles.reviewsBlock__content__title}>{product.name}</h2>
      </div>
      {activeTab === 'rating' ? (
        <ReviewsForm onNext={() => handleTabChange('comment')} />
      ) : (
        <FormComment /> // Компонент для ввода комментариев
      )}
    </div>
  );
};

export default ReviewsBlock;
