import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
};

export default HomePage;
