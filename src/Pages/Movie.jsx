import { useLoaderData } from "react-router-dom";
import { Card } from "../Component/Layout/UI/Card";
import "./Movie.css";

export const Movie = () => {
  const moviesData = useLoaderData();

  return (
    <ul className="movie-grid">
      {moviesData?.Search?.map((curMovie) => (
        <Card
          key={curMovie.imdbID}
          curMovie={curMovie}
        />
      ))}
    </ul>
  );
};