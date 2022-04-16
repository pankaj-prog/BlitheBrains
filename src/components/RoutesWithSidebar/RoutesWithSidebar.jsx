import React from "react";
import { Sidebar } from "..";
import { Outlet } from "react-router-dom";

const RoutesWithSidebar = () => {
  return (
    <div className="app-with-sidebar">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RoutesWithSidebar;
