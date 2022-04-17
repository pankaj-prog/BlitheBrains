import React from "react";
import { useCategory } from "../../context";

import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  const { categoryList } = useCategory();
  return (
    <section className="categories-section text-center">
      <h3 className="section-heading gutter-bottom-24">Featured Categories</h3>
      <div className="categories-wrapper">
        {categoryList.length > 0 &&
          categoryList.map((category) => {
            return <CategoryCard key={category._id} category={category} />;
          })}
      </div>
    </section>
  );
};

export default CategoriesSection;
