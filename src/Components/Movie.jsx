import { Card, Col } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Col className="col-3">
      <Card>
        <Card.Img variant="top" src={props.singleMovie.Poster} />
        <Card.Body>
          <Card.Title>{props.singleMovie.Title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movie;
