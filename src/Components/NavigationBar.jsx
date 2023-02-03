import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import netflixLogo from "../pictures/Netflix_Logo.png";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="top-logo" src={netflixLogo} alt="Netflix Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            Browse
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">New & Popular</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
              <Nav.Link href="#">Browse by Languages</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#">Kids</Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <Nav.Link href="#">Penguin Dropdown</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      // <header className="nav-bar">
      //   <Container>
      //     {/* <NavBar.Brand href="#home" className="top-logo">
      //       <img src="../../public/Netflix_Logo.png" alt="Netflix logo" />
      //     </NavBar.Brand> */}
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      // <Navbar.Collapse id="responsive-navbar-nav">
      //   <Nav className="me-auto">
      //     <Nav.Link href="#">Home</Nav.Link>
      //     <Nav.Link href="#">TV Shows</Nav.Link>
      //     <Nav.Link href="#">New & Popular</Nav.Link>
      //     <Nav.Link href="#">My List</Nav.Link>
      //     <Nav.Link href="#">Browse by Languages</Nav.Link>
      //   </Nav>
      //   <Nav>
      //     <Nav.Link href="#">
      //       <i className="bi bi-search"></i>
      //     </Nav.Link>
      //     <Nav.Link href="#">Kids</Nav.Link>
      //     <Nav.Link href="#">
      //       <i className="bi bi-bell"></i>
      //     </Nav.Link>
      //     <Nav.Link href="#">Penguin Dropdown</Nav.Link>
      //   </Nav>
      // </Navbar.Collapse>
      //   </Container>
      // </header>
    );
  }
}

export default NavigationBar;
