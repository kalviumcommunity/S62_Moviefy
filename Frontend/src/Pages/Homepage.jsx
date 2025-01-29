import axios from "axios";
import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [movie, setMovie] = useState([]);

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
    <div
      className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(36, 36, 36, 0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {movie.length > 0 ? (
          movie.map((data) => (
            <MovieCard name={data.name} description={data.description} />
          ))
        ) : (
          <p className="text-white">No movie available.</p>
        )} */}
        {/* this is for test */}
        {/* {dat.map((data) => {
          return <MovieCard name={data.name} description={data.description} />;
        })} */}
      </div>
    </div>
  );
};

export default Homepage;
