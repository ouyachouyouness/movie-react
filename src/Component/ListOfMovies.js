import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function ListOfMovies({ category }) {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    try {
      let { movies } = await import("../db/movies");
      setFilms(movies);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  const [state, setState] = useState({
    category: "",
  });

  const handleChange = (e) => {
    setState({ category: e.target.value });
    console.log(state.category);
    // films.filter(movies =>  movies.category.includes(state.category)).slice(0,4).map((id) => (<MovieItem {...id}  />))
    films.filter((movie) => movie.category !== state.category);
    setFilms(films);
  };

  const OnDelete = (id) => {
    if (window.confirm("are you sure")) {
      const newMovies = films.filter((movie) => movie.id !== id);
      setFilms(newMovies);
    }
  };

  const Filter = () => {
    films
      .filter((movies) => movies.category.includes(state.category))
      .slice(0, 4)
      .map((id) => <MovieItem {...id} />);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {films?.map((movie) => (
        <MovieItem
          key={movie.id}
          OnDelete={OnDelete}
          movie={movie}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default ListOfMovies;
