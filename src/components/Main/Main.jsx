import React from "react";
import styles from "./Main.module.css";
import { Card } from "../Card/Card";
import { topMovies } from "../../constants/top100movies";


export const Main = () => {
  return (
    <main className={styles.main}>
      {topMovies.map((movie) => 
        <Card 
          key={movie.id}
          title={movie.title} 
          genre={movie.genre} 
          big_image={movie.poster} 
          year={movie.year} 
          rating={movie.rating} 
        />
      )}
      {/* <Card
        title={film.title}
        description={film.description}
        big_image={film.big_image}
        year={film.year}
        rating={film.rating}
      /> */}
    </main>
  );
};
