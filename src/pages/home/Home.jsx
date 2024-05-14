import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Service from "../../components/service/Service";

function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Service />
    </div>
  );
}

export default Home;
