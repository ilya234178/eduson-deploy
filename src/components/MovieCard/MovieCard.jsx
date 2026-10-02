import React from 'react'
import { useParams } from 'react-router-dom';

export const MovieCard = ({ movieList }) => {
  let { id } = useParams();
  const movie = movieList.find((movie) => movie.id === Number(id));
  return (
  <div>
    <h1>{movie.title}</h1>
    <p>Year {movie.year}</p>
    <p>Rating {movie.rating}</p>
  </div>
  );
}
