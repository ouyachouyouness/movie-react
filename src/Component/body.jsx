import React, { useState, Fragment } from "react";
import ListOfMovies from "./ListOfMovies";
import SearchComponent from "./SearchComponent";
import AllShows from "./AllShows";
import SearchCategory from "./SearchCategory";



export default function Body({handleChange}) {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState(null);
  
    return (
      <Fragment>
         <select className="app-select" onChange={handleChange}>
            <option id="Default"></option>
            <option id="Comedy">Comedy</option>
            <option id="Animation">Animation</option>
            <option id="Thriller">Thriller</option>
            <option id="Drame">Drame</option>
          </select>
        <ListOfMovies/>
        <button className="movieslist-loadmore-button" type="button" >Load more</button>

       
        
      </Fragment>
    );
  }