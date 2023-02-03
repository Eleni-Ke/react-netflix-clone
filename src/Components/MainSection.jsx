// 7a852a40

import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Gallery from "./Gallery";
// const array = [
//   {
//     Title: "Harry Potter and the Deathly Hallows: Part 2",
//     Year: "2011",
//     imdbID: "tt1201607",
//     Type: "movie",
//     Poster: "https://bit.ly/3sufYok",
//   },
//   {
//     Title: "Harry Potter and the Sorcerer's Stone",
//     Year: "2001",
//     imdbID: "tt0241527",
//     Type: "movie",
//     Poster: "https://bit.ly/3tTtx0H",
//   },
//   {
//     Title: "Harry Potter and the Chamber of Secrets",
//     Year: "2002",
//     imdbID: "tt0295297",
//     Type: "movie",
//     Poster: "https://bit.ly/31gVxzb",
//   },
//   {
//     Title: "Harry Potter and the Prisoner of Azkaban",
//     Year: "2004",
//     imdbID: "tt0304141",
//     Type: "movie",
//     Poster: "https://bit.ly/2QzHt1n",
//   },
// ];
// const url = "http://www.omdbapi.com/?apikey=7a852a40&s=";

class MainSection extends Component {
  state = {
    firstSaga: [],
    // secondSaga: [],
    // thirdSaga: [],
  };
  getSaga = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=7a852a40&s=harry potter"
      );
      let movieArr = await response.json();
      movieArr = movieArr.Search;
      this.setState({ firstSaga: movieArr });
      console.log(movieArr);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getSaga();
  }
  render() {
    return (
      <Container className="d-flex">
        <>
          <h2>The test Saga:</h2>
          <Row>
            <Gallery sagaArr={this.state.firstSaga} />
          </Row>
        </>

        {/* <Row>
          <h2>The Star Wars Sage:</h2>
        </Row>
        <Row>
          <h2>The Hunger Games Saga:</h2>
        </Row> */}
      </Container>
    );
  }
}

export default MainSection;
