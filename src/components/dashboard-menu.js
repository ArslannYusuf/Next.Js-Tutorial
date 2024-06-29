"use client";
import React from "react";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";
import Link from "next/link";

const DashboardMenu = () => {
  return (
    <Nav className="flex-column">
      {menuItems.map((item) => (
        <Nav.Link
          key={item.id}
          href={item.url}
          prefetch={item.prefetch}
          as={Link}
        >
          {item.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default DashboardMenu;
