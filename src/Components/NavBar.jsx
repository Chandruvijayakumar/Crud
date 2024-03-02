import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// Functional component for the navigation bar
const NavBar = () => {
  return (
    // Top navigation bar with a sticky background
    <div className="bgNav sticky-top">
      <Navbar expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/user" className="nav-link">
                User
              </Link>
              <Link to="/add" className="nav-link">
                Add User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
