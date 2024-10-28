import React, { FC, useState } from 'react';
import styles from './reviewsForm.module.css';
import { MdOutlineStarOutline, MdOutlineStar } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import FormComment from '../FormComment/FormComment';

interface RatingFormValues {
  rating: number;
}

const ReviewsForm: FC = () => {
  const { handleSubmit } = useForm<RatingFormValues>();
  const [showNextSection, setShowNextSection] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleRatingChange = (value: number) => {
    setSelectedRating(value);
    setShowNextSection(value !== 0);
  };

  const onSubmit = async (data: RatingFormValues) => {
    console.log(data);
  };

  const handleNextClick = () => {
    setShowSecondForm(true);
  };

  return (
    <div className={styles.reviewsBlock}>
      {showSecondForm ? (
        <FormComment />
      ) : (
        <>
          <div className={styles.reviewsBlock__container}>
            <h3 className={styles.reviewsBlock__title}>Rate the product</h3>
            <p className={styles.reviewsBlock__text}>Rate it from 1 to 5 stars</p>
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
            Further
          </button>
        </>
      )}
    </div>
  );
};

export default ReviewsForm;
