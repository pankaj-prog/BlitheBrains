import React from "react";
import { Sidebar } from "..";
import { Outlet } from "react-router-dom";

const RoutesWithSidebar = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RoutesWithSidebar;
