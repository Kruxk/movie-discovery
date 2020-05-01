import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie/Movie";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState({ status: "idle" });

  const search = async () => {
    const apikey = "d7ad5f9b";

    set_searchState({ status: "searching..." });

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);
    // Option B: use the `axios` library like we did on Tuesday
    const data = await axios.get(
      `https://omdbapi.com/?apikey=${apikey}&s=${queryParam}`
    );

    set_searchState({ status: "done", data: data.data.Search });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {searchState.status === "done" ? (
          searchState.data.map((movie) => (
            <Movie title={movie.Title} id={movie.imdbID} img={movie.Poster} />
          ))
        ) : (
          <p>{searchState.status}</p>
        )}
      </div>
    </div>
  );
}
