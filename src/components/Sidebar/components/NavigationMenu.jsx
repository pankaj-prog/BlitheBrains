import React from "react";
import "./NavigationMenu.css";

import { AiOutlineHome, AiOutlineLike, AiOutlineHistory } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";

import { NavLink } from "react-router-dom";
import NavItemExplore from "./NavItemExplore";

const navItems = [
  { name: "Home", path: "/home", icon: <AiOutlineHome /> },
  { name: "Explore" },
  { name: "Liked Videos", path: "/likedvideos", icon: <AiOutlineLike /> },
  { name: "Playlist", path: "/playlist", icon: <MdPlaylistPlay /> },
  { name: "Watch Later", path: "/watchlater", icon: <MdOutlineWatchLater /> },
  { name: "History", path: "/history", icon: <AiOutlineHistory /> },
];

const NavigationMenu = () => {
  return (
    <nav>
      <ul className="navigation-list">
        {navItems.map((nav) => {
          return nav.name == "Explore" ? (
            <li>
              <NavItemExplore />
            </li>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link nav-item text-xl ${
                    isActive ? "nav-item-active" : undefined
                  }`
                }
                to={nav.path}
              >
                {nav.icon}
                <span>{nav.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
