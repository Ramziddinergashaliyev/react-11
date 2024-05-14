import React from "react";
import { SERVICE } from "../../static";
import "./service.scss";

function Service() {
  let serviceData = SERVICE?.map((el) => (
    <div key={el.id} className="service__card">
      <img src={el.img} alt="" />
      <h4 className="service__card__title">{el.title}</h4>
      <p className="service__card__desc">{el.desc}</p>
    </div>
  ));
  return (
    <div className="service container">
      <div className="service__cards">{serviceData}</div>
    </div>
  );
}

export default Service;
