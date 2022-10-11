import React from "react";
import './Card.css'

const Card = ({name, rating, desc, url}) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__top">
          <img src={url} alt="" className="card__img" />
        </div>

        <div className="card__bottom">
          <div className="card__topText">
            <div className="card__name">{name}</div>
            <div className="card__rating">Rating: {rating}</div>
          </div>

          <div className="card__Desc">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
