import React from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../context";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const { setSelectedCategory } = useCategory();

  const cardClickHandler = () => {
    setSelectedCategory(category);
    navigate("/explore");
  };

  return (
    <article onClick={cardClickHandler} className="category-card">
      <img src={category.img} alt={category.categoryName} />
      <h2 className="title h2">{category.categoryName}</h2>
    </article>
  );
};

export default CategoryCard;
