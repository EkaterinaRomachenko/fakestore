import React, { FC, createContext, useState, ReactNode, useContext } from 'react';
import { Reviews } from '../services/utils/types';

interface ReviewsContextProps {
  allReviews: Reviews[];
  addReview: (newReview: Reviews) => void;
}

export const saveReviewsToLocalStorage = (reviews: Reviews[]) => {
  localStorage.setItem('reviews', JSON.stringify(reviews));
};

export const ReviewsContext = createContext<ReviewsContextProps | undefined>(undefined);

export const ReviewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const [allReviews, setAllReviews] = useState<Reviews[]>([]);
  const [allReviews, setAllReviews] = useState<Reviews[]>(() => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [];
  });

  const addReview =  (newReview: Reviews) => {
    setAllReviews((prevReviews) => {
      const updatedReviews = [...prevReviews, newReview];
      saveReviewsToLocalStorage(updatedReviews);
      return updatedReviews;
    });
  };

  // const addReview = (newReview: Reviews) => {
  //   setAllReviews((prevReviews) => [...prevReviews, newReview]);
  // };
  return (
    <ReviewsContext.Provider value={{ allReviews, addReview }}>{children}</ReviewsContext.Provider>
  );
};

export const useReviewsContext = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error('ReviewsContext is not provided');
  }
  return context;
};
