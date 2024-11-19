import React, { FC, createContext, useState, ReactNode, useContext } from 'react';
import { Reviews } from '../services/utils/types';

interface ReviewsContextProps {
  allReviews: Reviews[];
  addReview: (newReview: Reviews) => void;
  selectedRating: number;
  setSelectedRating: (value: number) => void;

}

export const ReviewsContext = createContext<ReviewsContextProps | undefined>(undefined);

export const ReviewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [allReviews, setAllReviews] = useState<Reviews[]>([]);
  const [selectedRating, setSelectedRating] = useState(0);

  const addReview = (newReview: Reviews) => {
    setAllReviews((prevReviews) => [...prevReviews, { ...newReview, rating: selectedRating}]);
  };


  return (
    <ReviewsContext.Provider value={{ allReviews, addReview, selectedRating, setSelectedRating }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviewsContext = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error('ReviewsContext is not provided');
  }
  return context;
};
