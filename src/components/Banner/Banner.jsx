import React from "react";
import "./Banner.css";

const Banner = ({ title }) => {
  return (
    <article className="banner text-center gutter-bottom-24">
      <h2>{title}</h2>
    </article>
  );
};

export default Banner;
