import { Component } from "react";
import Movie from "./Movie";

const url = "http://www.omdbapi.com/?apikey=7a852a40&s=";

class Gallery extends Component {
  state = {
    sagaArr: [],
  };
  getSaga = async () => {
    try {
      let response = await fetch(url + this.props.saga);
      let movieArr = await response.json();
      movieArr = movieArr.Search;
      this.setState({ sagaArr: movieArr });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSaga();
  }

  render() {
    return (
      <>
        {this.state.sagaArr.map((movie) => {
          return <Movie singleMovie={movie} key={movie.imdbID} />;
        })}
      </>
    );
  }
}

export default Gallery;
