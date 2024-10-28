import React, { FC } from 'react';
import styles from './reviews.module.css';
import { IoStarSharp } from 'react-icons/io5';
import Modal from '../modal/modal';
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';
import { IProps } from '../../services/utils/types';
import ReviewsList from '../ReviewsList/ReviewsList';
import { useReviewsContext } from '../../Context/ReviewsContext';
import { useModal } from '../../Context/ModalContext';

const ratings = [1, 2, 3, 4, 5];

const Reviews: FC<IProps> = ({ product }) => {
  const { openModal, closeModal, isOpen } = useModal();
  const { allReviews } = useReviewsContext();

  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__score}>
        <div className={styles.reviews__score__container}>
          {ratings.map((rating) => (
            <div key={rating} className={styles.reviews__score__container__item}>
              <div className={styles.reviews__score__container__item__stars}>
                <span className={styles.reviews__score__container__item__stars__number}>
                  {rating}
                </span>
                <IoStarSharp size={20} />
              </div>
              <span className={styles.reviews__score__container__item__line}></span>
              <p className={styles.reviews__score__container__item__person}>0%</p>
            </div>
          ))}
        </div>
        <button className={styles.reviews__button} onClick={openModal}>
          leave a review
        </button>
      </div>
      <div className={styles.reviews__block}>
        <ReviewsList reviews={allReviews} />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ReviewsBlock product={product} />
      </Modal>
    </div>
  );
};

export default Reviews;
