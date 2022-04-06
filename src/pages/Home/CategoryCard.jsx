import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <article className="category-card">
      <img src={category.img} alt={category.title} />
      <h2 className="title">{category.title}</h2>
    </article>
  );
};

export default CategoryCard;
