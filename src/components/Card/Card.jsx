import React from 'react';
import styles from "./Card.module.css";


export const Card = ({ 
  title = "No Title", 
  genre, 
  big_image, 
  year, 
  rating }) => {
  // const isOldMovie = year > 2000 ? "New Movie" : "Old Movie";
  return (
    <div className={`${styles.card} ${year > 2000 && styles.green}`}>
        <h3>{title}</h3>
        <p>{genre}</p>
        <div className={styles.poster}>
          <img className={styles.img} 
          src={big_image} 
          alt={`${title} Poster`}/>
        </div>
        <p>Year: {year}</p>
        {/* <p>{isOldMovie}</p> */}
        {year > 2000 && <p>New Movie</p>}
        <p>Rating: {rating}</p>
    </div>
  )
}
