import React from "react";

import "./NavItemExplore.css";
import { NavLink } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";

const NavItemExplore = () => {
  return (
    <NavLink className="link " to="explore">
      {({ isActive }) => (
        <>
          <span
            className={`nav-item text-xl  ${
              isActive ? "nav-item-active" : undefined
            }`}
          >
            <MdOutlineExplore />
            <span>Explore</span>
          </span>

          <ul
            className={`categories-section  ${
              isActive ? "categories-section-active" : undefined
            }`}
          >
            <li>Podcast</li>
            <li>Book Summary</li>
            <li>Case study</li>
          </ul>
        </>
      )}
    </NavLink>
  );
};

export default NavItemExplore;
