import React from "react";
import { Rating } from "@mui/material";
import ProfileImg from "./pImages/ProfileImg.png";

const ReviewCard = ({ review }) => {
  const options = {
    
    value: parseInt(review.rating,10),
    readOnly: true,
    precision: 0.5,
  };
  // console.log(review)
  return (
    
    <div className="reviewCard">
      <img src={ProfileImg} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
