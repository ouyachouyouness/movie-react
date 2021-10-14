import React, { useState, Fragment } from "react";
import ListOfMovies from "./ListOfMovies";
import SearchComponent from "./SearchComponent";




export default function Body() {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState(null);
  
    return (
      <Fragment>
        <div>{!selectedMovie && <SearchComponent setMovies={setMovies} />}</div>
        <ListOfMovies/>
      </Fragment>
    );
  }