import React from "react";
import Card from "./Card";
import "./Reviews.css";

const Reviews = ({ data, data1 }) => {
  return (
    <div className="review">
      <div className="review__container">
        <div className="review__header">Best Food Reviews</div>

        <div className="review__content">
          {data && data.map((item) => <Card name={item.name} url={item.url} rating={item.rating} desc={item.desc}/>)}
        </div>

        <div className="review__footer">
            Yes this is footer
        </div>
      </div>
    </div>
  );
};

export default Reviews;
