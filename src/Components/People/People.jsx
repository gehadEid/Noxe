import axios from "axios";
import React, { useEffect, useState } from "react";

export default function People() {
  let imgBaseUrl = "https://image.tmdb.org/t/p/w500";


  const [trendingPeople, setTrendingPeople] = useState([]);



  async function getTrendingItems(mediaType , callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=8f214df63b48f36fb123ca7fbba144b6`
    );
    callback(data.results.slice(0, 10));
  }

  useEffect(() => {
 
    getTrendingItems('person',setTrendingPeople);


  }, []);

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
        {trendingPeople.map((person, index) => (
          <div className="col-md-3 py-2" key={index}>
            <img
              className="w-100 rounded-3 shadow"
              src={imgBaseUrl + person.profile_path}
              alt={person.title}
            />
            <h2 className="h6 py-1">{person.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
