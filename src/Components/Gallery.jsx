import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Movie from "./Movie";

const url = "http://www.omdbapi.com/?apikey=7a852a40&s=";

class Gallery extends Component {
  state = {
    sagaArr: [],
    isLoading: true,
    isError: false,
  };
  getSaga = async () => {
    try {
      let response = await fetch(url + this.props.saga);
      if (response.ok) {
        let movieArr = await response.json();
        movieArr = movieArr.Search;
        this.setState({
          sagaArr: movieArr,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getSaga();
  }

  render() {
    return (
      <>
        <div className="spinner-container">
          <Spinner animation="border" variant="light" />
        </div>

        {this.state.isLoading && <Spinner animation="border" variant="light" />}
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error! 🌩️</Alert>
        )}

        {this.state.sagaArr.map((movie) => {
          return <Movie singleMovie={movie} key={movie.imdbID} />;
        })}
      </>
    );
  }
}

export default Gallery;
