import React from 'react'
import { Link } from 'react-router-dom'

export const MovieList = ({ movieList}) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        {
        movieList.map((movie) => <Link key={movie.id} to={`${movie.id}`}>{movie.title}</Link>)
        }
    </div>
    );
};
