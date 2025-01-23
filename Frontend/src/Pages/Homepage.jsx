import React from "react";
import MovieCard from "../Components/Products/MovieCard";
import datas from "../Components/test/movietest.json";

const Homepage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {datas?.map((data) => (
          <div key={data.id}>
            <MovieCard name={data.name} description={data.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
