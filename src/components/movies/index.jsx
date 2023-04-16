import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import { MovieList } from "../movieList";
import { movies } from "../../movie-database";

export const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies</h1>

      <div className="movies-container">
        <MovieList movies={movies} />
        <Outlet  />
      </div>
    </div>
  );
};
