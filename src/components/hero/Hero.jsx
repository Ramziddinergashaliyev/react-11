import React from "react";
import "./hero.scss";
import img1 from "../../assets/images/home.svg";
import img2 from "../../assets/images/apple.svg";

function Hero() {
  return (
    <section className="hero container">
      <div className="hero__left">
        <div className="hero__left__mobile">
          <img src={img2} alt="" />
          <p className="hero__left__mobile__text">iPhone 14 Series</p>
        </div>
        <h2 className="hero__left__title">Up to 10% off Voucher</h2>
        <div className="hero__left__link">
          <a href="#">Shop Now</a>
        </div>
      </div>
      <div className="hero__right">
        <img src={img1} alt="" />
      </div>
    </section>
  );
}

export default Hero;
