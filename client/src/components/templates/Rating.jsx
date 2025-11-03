import React from 'react'
import { CiStar } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";

const Rating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.floor(Number(rating) || 0);

  return (
    <div className={`flex items-center gap-1`}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const starNumber = index + 1;
        return (
          <span key={index} className="flex items-center">
            {starNumber <= filledStars ? (
              <GiRoundStar className="text-red-700" />
            ) : (
              <CiStar  />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;