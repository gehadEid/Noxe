import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Tvshows.module.css";

export default function Tvshows() {
  let imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  const [trendingTvshows, setTrendingTvshows] = useState([]);

  async function getTrendingItems(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=8f214df63b48f36fb123ca7fbba144b6`
    );
    callback(data.results.slice(0, 10));
  }

  useEffect(() => {
    getTrendingItems("tv", setTrendingTvshows);
  }, []);




  // function randomIntFromInterval(min, max) { // min and max included
  //   return (Math.random() * (max - min + 1) + min).toFixed(1);
  // }
  
  // let rndInt = randomIntFromInterval(5,9);
  // console.log(rndInt);



  return (
    <>
      <div className="row py-5 justify-content-center">
        <div className="col-md-3">
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

        {trendingTvshows.map((tv, index) => (
          <div className="col-md-3  py-2" key={index}>
            <div className="position-relative">
              <img
                className={`${style.parent} w-100 rounded-3 shadow`}
                src={imgBaseUrl + tv.poster_path}
                alt={tv.title}
              />

              <div>
                <button
                  className={`${style.icon} position-absolute  btn-light opacity-75 d-flex flex-column align-items-center justify-content-center rounded-bottom border-0 `}
                >
                  <i className="fas fa-heart  align-items-center justify-content-center py-2"></i>
                  <i className="fas fa-question  align-items-center justify-content-center py-2"></i>

                </button>

                {/* <button
                  className={`${style.question} position-absolute btn btn-light opacity-75`}
                >
                  <i class="fas fa-question"></i>
                </button> */}
              </div>
            </div>

            <h2 className="h6 py-1">{tv.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
