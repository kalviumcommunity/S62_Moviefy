import React from "react";

const MovieCard = ({ name, description }) => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-4 md:p-6">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{name}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
