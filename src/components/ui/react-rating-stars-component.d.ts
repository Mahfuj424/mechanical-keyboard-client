// src/types/react-rating-stars-component.d.ts
declare module 'react-rating-stars-component' {
    import * as React from 'react';
  
    interface RatingProps {
      count: number;
      value: number;
      size?: number;
      activeColor?: string;
      inactiveColor?: string;
      onChange?: (newRating: number) => void;
      edit?: boolean;
    }
  
    const Rating: React.FC<RatingProps>;
    export default Rating;
  }
  