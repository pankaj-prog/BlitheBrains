import React from "react";
import "./Home.css";

import { Carousel } from "../../components";
import CategoriesSection from "./CategoriesSection";

const Home = () => {
  return (
    <div className="content home">
      <Carousel />
      <CategoriesSection />
    </div>
  );
};

export default Home;
