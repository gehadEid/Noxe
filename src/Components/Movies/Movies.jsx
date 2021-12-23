import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movies() {
  let imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  const [trendingMovies, setTrendingMovies] = useState([]);



  async function getTrendingItems(mediaType , callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=8f214df63b48f36fb123ca7fbba144b6`
    );
    callback(data.results.slice(0, 10));
  }

  useEffect(() => {
    getTrendingItems('movie', setTrendingMovies);


  }, []);

  return (
    <>

      <div className="row py-5 justify-content-center">
        <div className="col-md-4">
          <div>
            <div className="brder w-25"></div>
            <h2>
              Trending
              <br /> Movies
              <br /> to watch Now
            </h2>
            <p className="text-muted">Most watch movies by days</p>
            <div className="brder w-75"></div>
          </div>
        </div>
        {trendingMovies.map((movie, index) => (
          <div className="col-md-3 py-2"  key={index}>
            <img
              className="w-100 rounded-3 shadow"
              src={imgBaseUrl + movie.poster_path}
              alt={movie.title}
            />
            <h2 className="h6 py-1">{movie.title}</h2>
          </div>
        ))}
      </div>

    </>
  );
}
