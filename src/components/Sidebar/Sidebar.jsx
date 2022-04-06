import React, { useState } from "react";
import "./Sidebar.css";
import { FaSearch } from "react-icons/fa";

import { images } from "../../assets/";
import NavigationMenu from "./components/NavigationMenu";

const Sidebar = () => {
  const [showUserWrapper, setShowUserWrapper] = useState(false);

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h2 className="logo">
          Blithe <span>Brains</span>
        </h2>
        <button
          onClick={() => setShowUserWrapper(!showUserWrapper)}
          className="avatar avatar-sm avatar-round"
        >
          <img
            className="responsive-img"
            src={images.defaultAvatar}
            alt="default avatar"
          />
        </button>
      </header>
      <section
        className={
          showUserWrapper ? "user-wrapper user-wrapper-active" : "user-wrapper"
        }
      >
        <h4>Do more with Blithe Brains</h4>
        <p className="text-center gutter-bottom-8">
          Sign in now to save videos, create playlists and much more.
        </p>
        <button className="btn btn-solid-primary btn-rc">Sign in</button>
      </section>
      <section className="search-wrapper">
        <label htmlFor="search-input">
          <FaSearch />
        </label>
        <input type="text" id="search-input" />
      </section>
      <NavigationMenu />
    </aside>
  );
};

export default Sidebar;
