import React from "react";

import CategoryCard from "./CategoryCard";
import { images } from "../../assets";

const categories = [
  { title: "Book Summary", img: images.bookSummary },
  { title: "Podcast", img: images.podcast },
  { title: "Case Study", img: images.caseStudy },
];

const CategoriesSection = () => {
  return (
    <section className="categories-section text-center">
      <h3 className="section-heading gutter-bottom-24">Featured Categories</h3>
      <div className="categories-wrapper">
        {categories.map((category) => {
          return <CategoryCard key={category.title} category={category} />;
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;
