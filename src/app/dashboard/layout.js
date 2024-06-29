import DashboardMenu from "@/components/dashboard-menu";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="d-flex gap-3">
      <DashboardMenu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
