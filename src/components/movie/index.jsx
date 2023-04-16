import React from "react";
import movies from "../../movie-database";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie" key={movie.id}>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.storyline}</p>
    </div>
  );
};
