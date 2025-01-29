import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Components/Products/moviecard";

const Homepage = () => {
  const [movie, setMovie] = useState([{
    "id": 1,
    "title": "Movie 1",
    "description": "This is movie 1",

  },
    {
      "id": 2,
      "title": "Movie 2",
      "description": "This is movie 2",
      
  }
  ]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get("http://localhost:8080/mov/movie");
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movie.length > 0 ? (
          movie.map((data) => (
            <MovieCard
              key={data.id}
              name={data.name}
              description={data.description}
            />
          ))
        ) : (
          <p className="text-white">No movie available.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
