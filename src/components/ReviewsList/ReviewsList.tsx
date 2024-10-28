import { FC } from 'react';
import { MdOutlineStarOutline, MdOutlineStar } from 'react-icons/md';
import styles from './reviewsList.module.css';
import NotReviews from '../NotReviews/NotReviews';
import moment from 'moment';

type IReviewsList = {
  advantages: string;
  disadvantages: string;
  description: string;
  images: File[];
  date: string;
  rating: number;
};

type ReviewListProps = {
  reviews: any[];
};

const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
  return (
    <>
      {reviews.length === 0 && <NotReviews />}
      {reviews.map((review: IReviewsList, index) => (
        <div key={index} className={styles.reviewList}>
          <div className={styles.reviewList__review}>
            <div style={{ display: 'flex', gap: '30px' }}>
              <h3 className={styles.reviewList__title}>Review {index + 1}</h3>
              <div className={styles.reviewList__stars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <MdOutlineStarOutline
                    color={i < review.rating ? '#FF9900' : '#E8E8E8'}
                    key={i}
                    size={20}
                  />
                ))}
              </div>
            </div>
            <p className={styles.reviewList__time}>{moment(review.date).format('DD.MM.YYYY')}</p>
          </div>
          <div className={styles.reviewList__item}>
            <p className={styles.reviewList__text__bold}>Advantages:</p>
            <p className={styles.reviewList__text}>{review.advantages}</p>
          </div>
          <div className={styles.reviewList__item}>
            <p className={styles.reviewList__text__bold}>Disadvantages:</p>
            <p className={styles.reviewList__text}>{review.disadvantages}</p>
          </div>
          <div className={styles.reviewList__item}>
            <p className={styles.reviewList__text__bold}>Description:</p>
            <p className={styles.reviewList__text}>{review.description}</p>
          </div>
          <div className={styles.reviewList__images}>
            {review.images.map((image, imgIndex) => {
              if (image instanceof File) {
                return (
                  <img
                    className={styles.reviewList__image}
                    key={imgIndex}
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                  />
                );
              } else {
                console.error('Image is not a File:', image);
                return null;
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewList;
