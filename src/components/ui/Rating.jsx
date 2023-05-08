import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className='book__ratings'>
      {
        <div className='book__ratings'>
          {new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <FaStar icon='star' key={index} />
          ))}
          {!Number.isInteger(rating) && <FaStarHalfAlt />}
        </div>
      }
    </div>
  );
};

export default Rating;
