import React from "react";

const Rating = ({ rating }) => {
  const stars = [];
  const rate = parseInt(rating);

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        src={i < rate ? "/staractive.png" : "/starinactive.png"}
        alt={i < rate ? "Active star" : "Inactive star"}
        className={i < rate ? "star-active" : "star-inactive"}
        key={i}
      />
    );
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
