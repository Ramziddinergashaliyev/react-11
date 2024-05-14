import React, { Fragment, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [showlist, setShowlist] = useState(false);

  return (
    <Fragment>
      <div className="header__top">
        <div className="header__top__info container">
          <div className="header__top__left ">
            <p className="header__top__text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a className="header__top__link" href="#">
              ShopNow
            </a>
          </div>
          <select className="header__top__select" name="" id="">
            <option value="English">English</option>
            <option value="Rus">Rus</option>
            <option value="Uzbek">Uzbek</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <nav className="header__nav">
          <div className="header__nav__logo">
            <a href="#">Exclusive</a>
          </div>
          <ul
            className={`header__nav__item ${
              showlist ? "header__show-list" : ""
            }`}
          >
            <li className="header__nav__list">
              <NavLink className="header__nav__link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="header__nav__list">
              <NavLink className="header__nav__link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
            <li className="header__nav__list">
              <NavLink className="header__nav__link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="header__nav__list">
              <NavLink className="header__nav__link" to={"sign"}>
                Sign in
              </NavLink>
            </li>
            <li
              onClick={() => setShowlist(false)}
              className="header__nav__close"
            >
              X
            </li>
          </ul>
          <div className="header__nav__icons">
            <div className="header__nav__form">
              <input type="text" />
              <IoSearch />
            </div>
            <FaRegHeart />
            <LuShoppingCart />
            <IoMenu
              onClick={() => setShowlist(true)}
              className="header__nav__menu"
            />
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
