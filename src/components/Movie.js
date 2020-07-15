/** @format */

import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ title, year, summary, poster, rating, genres }) {
  return (
    <div className='movie'>
      <Link
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, poster, genres, rating },
        }}
      >
        <img src={poster} alt={title} title={title}></img>
        <h3 className='movie__title'>{title}</h3>
        <ul className='movie__genres'>
          {genres.map((genre, index) => {
            return (
              <li key={index} className='movie__genre'>
                {genre}
              </li>
            );
          })}
        </ul>
        <h5 className='movie__year-rating'>
          {year} rating: {rating}
        </h5>
        <p className='movie__summary'>{summary.slice(0, 180)}...</p>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
