import React, { FC, useState } from 'react';
import styles from './reviewsForm.module.css';
import { MdOutlineStarOutline, MdOutlineStar } from 'react-icons/md';
import { FieldValues, useForm } from 'react-hook-form';
import { useReviewsContext } from '../../Context/ReviewsContext';

type Props = {
  onNext: () => void;
};

const ReviewsForm: FC<Props> = ({ onNext }) => {
  const { selectedRating, setSelectedRating } = useReviewsContext();
  const { handleSubmit } = useForm();
  const [showNextSection, setShowNextSection] = useState(false);

  const handleRatingChange = (value: number) => {
    setSelectedRating(value);
    setShowNextSection(value !== 0);
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const handleNextClick = () => {
    if (showNextSection) {
      onNext(); 
    }
  };

  return (
    <div className={styles.reviewsBlock}>
      <div className={styles.reviewsBlock__container}>
        <h3 className={styles.reviewsBlock__title}>Оцените продукт</h3>
        <p className={styles.reviewsBlock__text}>Оцените его от 1 до 5 звезд</p>
      </div>
      <form className={styles.reviewsBlock__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.reviewsBlock__stars}>
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
                checked={selectedRating === value}
                onChange={() => handleRatingChange(value)}
              />
              {selectedRating >= value ? (
                <MdOutlineStar size={50} className={styles.reviewsBlock__star} />
              ) : (
                <MdOutlineStarOutline size={50} className={styles.reviewsBlock__star} />
              )}
            </label>
          ))}
        </div>
        <p className={styles.reviewsBlock__count}>{selectedRating}</p>
      </form>
      <button
        type="button"
        onClick={handleNextClick}
        disabled={!showNextSection}
        className={`${styles.reviewsBlock__button} ${
          showNextSection ? styles.active : styles.disabled
        }`}
      >
        Далее
      </button>
    </div>
  );
};

export default ReviewsForm;
