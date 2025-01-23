import React from "react";
// import "./MovieCard.css"; // Assuming we will create a CSS file for styling

const MovieCard = ({ name, description }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <h2 className="movie-title">{name}</h2>
      <p className="movie-description">{description}</p>
    </div>
  );
};

export default MovieCard;
