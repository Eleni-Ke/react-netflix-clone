import Movie from "./Movie";

const Gallery = (props) => {
  return (
    <>
      {props.sagaArr.map((movie) => {
        return <Movie singleMovie={movie} key={movie.imdbID} />;
      })}
    </>
  );
};

export default Gallery;
