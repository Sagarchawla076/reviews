import React from "react";

const Review = ({ user, i, activeIndex, setActiveIndex, arr }) => {
  const active = i === activeIndex ? "active" : "hidden";

  const { name, job, image, text } = user;

  const leftClick = () => {
    setActiveIndex(activeIndex - 1);
  };
  const rightClick = () => {
    setActiveIndex(activeIndex + 1);
  };
  const surpriseMe = () => {
    const randomN = Math.trunc(Math.random() * arr.length);
    setActiveIndex(randomN);
  };
  return (
    <div className={`review ${active}`}>
      <div className="review__display">
        <img src={image} alt={name} className="review__display--img" />
      </div>
      <div className="review__user">
        <span className="review__user--name">{name}</span>
        <div className="review__user--position">{job}</div>
      </div>
      <div className="review__text">{text}</div>
      <div className="review__button">
        <span
          className="review__button--left"
          onClick={() => {
            leftClick();
          }}
        >
          &#60;
        </span>
        <span
          className="review__button--right"
          onClick={() => {
            rightClick();
          }}
        >
          &#62;
        </span>
      </div>
      <button className="review__surprise" onClick={() => surpriseMe()}>
        Surprise Me
      </button>
    </div>
  );
};
export default Review;
