import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  return (
    <nav className="movie-list">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          {movie.title}
        </Link>
      ))}
    </nav>
  );
};