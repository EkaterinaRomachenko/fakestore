import React, { FC } from 'react';
import styles from './reviews.module.css';
import { IoStarSharp } from 'react-icons/io5';

const Reviews: FC = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__score}>
        <div className={styles.reviews__score__container}>
          <div className={styles.reviews__score__container__item}>
            <div className={styles.reviews__score__container__item__stars}>
              <span className={styles.reviews__score__container__item__stars__number}>5</span>
              <IoStarSharp size={20} />
            </div>
            <span className={styles.reviews__score__container__item__line}></span>
            <p className={styles.reviews__score__container__item__person}>0%</p>
          </div>
          <div className={styles.reviews__score__container__item}>
            <div className={styles.reviews__score__container__item__stars}>
              <span className={styles.reviews__score__container__item__stars__number}>4</span>
              <IoStarSharp size={20} />
            </div>
            <span className={styles.reviews__score__container__item__line}></span>
            <p className={styles.reviews__score__container__item__person}>0%</p>
          </div>
          <div className={styles.reviews__score__container__item}>
            <div className={styles.reviews__score__container__item__stars}>
              <span className={styles.reviews__score__container__item__stars__number}>3</span>
              <IoStarSharp size={20} />
            </div>
            <span className={styles.reviews__score__container__item__line}></span>
            <p className={styles.reviews__score__container__item__person}>0%</p>
          </div>
          <div className={styles.reviews__score__container__item}>
            <div className={styles.reviews__score__container__item__stars}>
              <span className={styles.reviews__score__container__item__stars__number}>2</span>
              <IoStarSharp size={20} />
            </div>
            <span className={styles.reviews__score__container__item__line}></span>
            <p className={styles.reviews__score__container__item__person}>0%</p>
          </div>
          <div className={styles.reviews__score__container__item}>
            <div className={styles.reviews__score__container__item__stars}>
              <span className={styles.reviews__score__container__item__stars__number}>1</span>
              <IoStarSharp size={20} />
            </div>
            <span className={styles.reviews__score__container__item__line}></span>
            <p className={styles.reviews__score__container__item__person}>0%</p>
          </div>
        </div>
      </div>
      <div className={styles.reviews__container}>
        <ul className={styles.reviews__container__list}>
          <li className={styles.reviews__container__list__item}></li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
