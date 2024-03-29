import React, { useState } from "react";
import "./Sidebar.css";
import { FaSearch } from "react-icons/fa";

import { images } from "../../assets/";
import NavigationMenu from "./components/NavigationMenu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

const Sidebar = () => {
  const [showUserWrapper, setShowUserWrapper] = useState(false);
  const { isLoggedIn, setEncodedToken } = useAuth();

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("encodedToken");
    setEncodedToken(null);
  };

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
        {isLoggedIn ? (
          <>
            <h4 className="text-center gutter-bottom-8">User's Name</h4>{" "}
            <button
              onClick={logoutHandler}
              className="btn btn-solid-primary btn-rc"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <h4>Do more with Blithe Brains</h4>
            <p className="text-center gutter-bottom-8">
              Log in in now to save videos, create playlists and much more.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-solid-primary btn-rc"
            >
              Log in
            </button>
          </>
        )}
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
