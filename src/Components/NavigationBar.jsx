import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import netflixLogo from "../pictures/Netflix_Logo.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BiBell } from "react-icons/bi";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="top-logo" src={netflixLogo} alt="Netflix Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link className="active" href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#">New & Popular</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
              <Nav.Link href="#">Browse by Languages</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="right-navbar">
            <Nav.Link href="#">
              <HiOutlineMagnifyingGlass />
            </Nav.Link>
            <Nav.Link href="#">Kids</Nav.Link>
            <Nav.Link href="#">
              <BiBell />
            </Nav.Link>
            <Nav.Link href="#">Penguin Dropdown</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
