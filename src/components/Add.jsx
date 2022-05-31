import axios from "axios";
import React, { useState } from "react";

import ResultCart from "./ResultCart";

function Add() {
  // https://api.themoviedb.org/3/search/movie?api_key=83b818b6ef4c8d7ff367fdb681a4da64&language=en-US&page=1&include_adult=false

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  function onChange(e) {
    setQuery(e.target.value);

    axios
      .get(
        `https:api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_TMDB_KEY
        }&language=en-US&page=1&include_adult=false&query=${
          e.target.value || "4227788"
        }`
      )
      .then((res) => {
        if (!res.errors) {
          setResults(res.data.results);
        }
      })
      .catch((err) => {
        setResults([]);
      });
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg"
            alt="ll"
            className="w-100"
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>

            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="film, dizi, kişi ara..."
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
