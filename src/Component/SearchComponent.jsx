import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
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

export default function SearchComponent({ setMovies }) {
  const [typedInMovieTitle, setTypedInMovieTitle] = useState("");

  const classes = useStyles();

  function onChange(event) {
    setTypedInMovieTitle(event.target.value);
  }

  useEffect(() => {
    if (typedInMovieTitle) {
      //fetchData(typedInMovieTitle, setMovies);
    }
  }, [typedInMovieTitle]);

  return (
    <div className={classes.searchInputLight}>
      <TextField
        label="Search"
        variant="outlined"
        onChange={onChange}
        size="small"
        className={classes.inputLight}
      />
    </div>
  );
}