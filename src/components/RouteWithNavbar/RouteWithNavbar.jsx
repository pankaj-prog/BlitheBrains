import React from "react";
import { Outlet, Link } from "react-router-dom";

const RouteWithNavbar = () => {
  return (
    <div className="app-with-navbar">
      <header className="app-header text-center">
        <h2>
          <Link className="link" to="/home">
            BlitheBrains
          </Link>
        </h2>
      </header>
      <Outlet />
    </div>
  );
};

export default RouteWithNavbar;
