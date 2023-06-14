import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <Categories />
      <BestDeals />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;
