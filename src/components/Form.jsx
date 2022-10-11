import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({ data, setData, data1 }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const newEle = {
      name,
      url,
      desc,
      rating
    }

    setData([newEle, ...data]);
  };
  console.log(data);

  return (
    <div className="form">
      <div className="form__container">
        <h1 className="form__heading">Food review Form</h1>
        <div className="form__inputs">
          <div className="form__input">
            <div>Name</div>
            <input
              className="inputField"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form__input">
            <div>Rating(0-10)</div>
            <input
              className="inputField"
              type="number"
              min="0"
              max="10"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="form__input">
            <div>ImageURL</div>
            <input
              className="inputField"
              type="text"
              placeholder="URL.."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="form__input">
            <div>Description</div>
            <textarea
              name="textarea"
              placeholder="Description..."
              id=""
              cols="10"
              rows="3"
              className="form__textInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button className="btn" onClick={handleClick}>
            Submit
          </button>

          <Link to="/reviews" className="btn">
            View Items
          </Link>
        </div>
      </div>

      <div className="form__space">
        <img
          className="form__img"
          src="https://images.template.net/76741/Free-food-buffet-vector-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Form;
