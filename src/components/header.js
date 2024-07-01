"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menu from "@/helpers/data/main-menu.json";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();
  // console.log(pathname)
  return (
    <Navbar
      expand="lg"
      className="bg-dark"
      data-bs-theme="dark"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/" as={Link}>
          Cosmo Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.url}
                as={Link}
                prefetch={item.prefecth}
                className={pathname === item.url ? "active" : ""}
              >
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
          <Link href="/dashboard">Dashboard</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
