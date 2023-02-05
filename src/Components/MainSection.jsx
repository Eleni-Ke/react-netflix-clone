// 7a852a40

import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Gallery from "./Gallery";

class MainSection extends Component {
  render() {
    return (
      <Container className="d-flex main-container">
        <>
          <h2>Lord of The Rings Saga:</h2>
          <Row>
            <Gallery saga="Lord of the Rings" />
          </Row>
          <h2>Harry Potter Saga:</h2>
          <Row>
            <Gallery saga="Harry Potter" />
          </Row>
          <h2>Star Wars Saga:</h2>
          <Row>
            <Gallery saga="Star Wars" />
          </Row>
        </>
      </Container>
    );
  }
}

export default MainSection;
