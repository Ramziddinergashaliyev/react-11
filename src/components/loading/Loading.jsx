import React from "react";
import "./loading.scss";

function Loading() {
  const loadingCards = (
    <div class="loading">
      <div class="loading__item">
        <div class="loading__img bg__animation"></div>
        <div class="loading__title bg__animation"></div>
        <div class="loading__title bg__animation"></div>
      </div>
    </div>
  );
  return (
    <div className="loading__wrapper">
      {loadingCards}
      {loadingCards}
      {loadingCards}
      {loadingCards}
      {loadingCards}
      {loadingCards}
      {loadingCards}
      {loadingCards}
    </div>
  );
}

export default Loading;
