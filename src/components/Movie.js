import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <p>{props.id}</p>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button type='button' onClick={()=>props.onDeleteMovie(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
