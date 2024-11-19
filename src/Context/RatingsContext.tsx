import React from 'react';

type TRatingsContext = {
  rating: { [key: number]: number };
  setRating: (value: number) => void;
};

const initialState: TRatingsContext = {
  rating: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
  setRating: () => {},
};

export const RatingsContext = React.createContext<TRatingsContext | undefined>(undefined);

export const RatingProvider = ({ children }: { children: React.ReactNode }) => {
  const [rating, setRatingState] = React.useState(initialState.rating);

  const setRating = (value: number) => {
    setRatingState((prevRating) => ({ ...prevRating, [value]: prevRating[value] + 1 }));
  };

  return (
    <RatingsContext.Provider value={{ rating, setRating }}>{children}</RatingsContext.Provider>
  );
};

export default RatingsContext;
