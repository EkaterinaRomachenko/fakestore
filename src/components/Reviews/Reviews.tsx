import React, { FC } from 'react';
import styles from './reviews.module.css';
import { IoStarSharp } from 'react-icons/io5';
import Modal from '../modal/modal';
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';
import { TProduct } from '../../services/utils/types';
import ReviewsList from '../ReviewsList/ReviewsList';
import { useReviewsContext } from '../../Context/ReviewsContext';
import { useModal } from '../../Context/ModalContext';

interface IReviews {
  product: TProduct;
}

const ratings = [1, 2, 3, 4, 5];

const Reviews: FC<IReviews> = ({ product }) => {
  const { openModal, closeModal, isOpen } = useModal();
  const { allReviews } = useReviewsContext();

  return (
    <div className={styles.reviews}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        <h2 className={styles.reviews__title}>Рейтинг и отзывы</h2>
        <div className={styles.reviews__info}>
          <p className={styles.reviews__text}>
            Отзывов: <span className={styles.reviews__text__number}>{allReviews.length}</span>
          </p>
          <p>
            Оценка товара: <span className={styles.reviews__text__number}>{product.rating}</span>
          </p>
        </div>
      </div>
      <div className={styles.reviews__container}>
        <div className={styles.reviews__score}>
          <div className={styles.reviews__score__container}>
            {ratings.map((rating) => (
              <div key={rating} className={styles.reviews__score__container__item}>
                <div className={styles.reviews__score__container__item__stars}>
                  <span className={styles.reviews__score__container__item__stars__number}>
                    {rating}
                  </span>
                  <IoStarSharp size={20} color="#FF9900" />
                </div>
                <span className={styles.reviews__score__container__item__line}></span>
                <p className={styles.reviews__score__container__item__person}>0%</p>
              </div>
            ))}
          </div>
          <button className={styles.reviews__button} onClick={openModal}>
            оставить отзыв
          </button>
        </div>
        <div className={styles.reviews__block}>
          <ReviewsList reviews={allReviews} />
        </div>

        <Modal isOpen={isOpen} onClose={closeModal}>
          <ReviewsBlock product={product} />
        </Modal>
      </div>
    </div>
  );
};

export default Reviews;
