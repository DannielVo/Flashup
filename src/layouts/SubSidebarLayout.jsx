import React from "react";
import { Outlet } from "react-router-dom";

const SubSidebarLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SubSidebarLayout;
