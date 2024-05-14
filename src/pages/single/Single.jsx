import React, { useEffect, useState } from "react";
import axios from "../../api";
import { useParams } from "react-router-dom";
import "./single.scss";
import star from "../../assets/images/star.svg";

function Single() {
  const { id } = useParams();
  const [single, setSingle] = useState(null);

  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setSingle(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(single);

  return (
    <div className="single container">
      <div className="single__card">
        <div className="single__card__img">
          <img src={single?.image} alt="" />
        </div>
        <div className="single__card__info">
          <h2 className="single__card__title">{single?.title}</h2>
          <p className="single__card__rating">
            <span>rating: </span> {single?.rating.rate}
            <img src={star} alt="" />
            {single?.rating.count}
          </p>
          <p className="single__card__price">
            <span>price: </span>$ {single?.price}
          </p>
          <p className="single__card__text">
            <span>description: </span> {single?.description}
          </p>
          <p className="single__card__desc">
            <span>category: </span> {single?.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Single;
