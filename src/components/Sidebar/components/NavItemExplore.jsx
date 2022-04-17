import React from "react";

import "./NavItemExplore.css";
import { NavLink } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";

import { useCategory } from "../../../context";

const NavItemExplore = () => {
  const { selectedCategory, setSelectedCategory, categoryList } = useCategory();

  return (
    <NavLink className="link " to="explore">
      {({ isActive }) => (
        <>
          <span onClick={() => setSelectedCategory(null)}>
            <span
              className={`nav-item text-xl  ${
                isActive ? "nav-item-active" : undefined
              }`}
            >
              <MdOutlineExplore />
              <span>Explore</span>
            </span>
          </span>

          <ul
            className={`categories-section  ${
              isActive ? "categories-section-active" : undefined
            }`}
          >
            {categoryList.length > 0 && (
              <>
                <li
                  onClick={() => setSelectedCategory(null)}
                  className={`${!selectedCategory && "category-active"}`}
                >
                  All
                </li>
                {categoryList.map((category) => (
                  <li
                    key={category._id}
                    className={`${
                      selectedCategory &&
                      selectedCategory.categoryName.toLowerCase() ==
                        category.categoryName.toLowerCase() &&
                      "category-active"
                    } `}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.categoryName}
                  </li>
                ))}
              </>
            )}
          </ul>
        </>
      )}
    </NavLink>
  );
};

export default NavItemExplore;
