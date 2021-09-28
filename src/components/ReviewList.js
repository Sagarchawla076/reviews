import React, { useState } from "react";
import Data from "./Data";
import Review from "./Review";
const ReviewList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderReviews = Data.map((user, i, arr) => {
    if (activeIndex > arr.length - 1) {
      setActiveIndex(0);
    }
    if (activeIndex < 0) {
      setActiveIndex(arr.length - 1);
    }
    return (
      <Review
        key={user.id}
        user={user}
        i={i}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        arr={arr}
      />
    );
  });
  return <div className="review-list">{renderReviews}</div>;
};

export default ReviewList;
