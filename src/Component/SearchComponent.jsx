import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import { movies } from "../db/movies";
//import { fetchData } from "../Actions/ApiCall";
const useStyles = makeStyles({
  searchInputLight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputLight: {
    backgroundColor: "lightGray",
  },
});

// export default function SearchComponent({ setMovies }) {
//   const [typedInMovieTitle, setTypedInMovieTitle] = useState("");

//   const classes = useStyles();

//   function onChange(event) {
//     setTypedInMovieTitle(event.target.value);
//   }

//   useEffect(() => {
//     if (typedInMovieTitle) {
//       //fetchData(typedInMovieTitle, setMovies);
//     }
//   }, [typedInMovieTitle]);




// function searchMovie({movie}){

//   const [state, setState] = useState()
  
//   const handleChange = (e) => {
//     setState({category: e.target.value})
//   }

//   return (
//     <div>
//       <select className="app-select" onChange={handleChange}>
//             <option id="Default"></option>
//             <option id="Comedy">Comedy</option>
//             <option id="Animation">Animation</option>
//             <option id="Thriller">Thriller</option>
//             <option id="Drame">Drame</option>
//           </select>
//     </div>
//   );
//   }