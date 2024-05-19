import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaShopify } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"><FaShopify/>Shoppee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nabar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><FaShoppingCart/>Cart</Nav.Link>
              <Nav.Link href="/login"><FaUser/>Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
