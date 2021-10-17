import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const itemsCountPerPage = 4;
function ListOfMovies() {
  const [films, setFilms] = useState([]);
  const [filmsPerCategory, setFilmsPerCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [bounds, setBounds] = useState([0, itemsCountPerPage]);

  const getFilms = async () => {
    try {
      let { movies } = await import("../db/movies");
      setFilms(movies);

      /*to eliminate duplicate categories */
      let allCategories = [];
      movies.map((movie) => allCategories.push(movie.category));
      console.log(`allCategories`, allCategories);
      setCategories([...new Set(allCategories)]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  const OnDelete = (id) => {
    if (window.confirm("are you sure")) {
      const newMovies = films.filter((movie) => movie.id !== id);
      setFilms(newMovies);
    }
  };

  const filter = (e) => {
    if (e.target.value === "allCategories") {
      setFilmsPerCategory([]);
    } else {
      const filmsPerCategory = films.filter(
        (movie) => movie.category === e.target.value
      );
      setFilmsPerCategory(filmsPerCategory);
    }
    //   .slice(0, 4)
    //   .map((id) => <MovieItem {...id} />);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "75vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    typography: {
      fontWeight: "bold",
      width: "100%",
      fontSize: "clamp(3.5vh, 2.6vw, 15vw);",
      color: "black",
      textAlign: "center",
    },
    inputContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    SearchInput: {
      width: "30rem",
      margin: "0.5rem 0.25rem",
    },
    button: {
      padding: "11px 15px",
      fontWeight: "bold",
      backgroundColor: "hsl(203, 89%, 53%)",
      margin: "0.5rem 0.25rem",
    },
    goBackButton: { marginRight: "auto" },
    scrollToTop: { marginLeft: "auto" },
  }));

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setBounds([
      (pageNumber - 1) * itemsCountPerPage,
      pageNumber * itemsCountPerPage,
    ]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        {" "}
        <select
          style={{
            width: "8cm",
            marginBottom: "0.5cm",
            textAlign: "center",
            marginLeft: "43%",
          }}
          className="form-control form-control-lg "
          onChange={(e) => filter(e)}
        >
          <option value="allCategories">All categories</option>
          {categories?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0.5cm",
        }}
      >
        {filmsPerCategory.length !== 0 ? (
          <div>
            {filmsPerCategory?.slice(bounds[0], bounds[1]).map((movie) => (
              <MovieItem key={movie.id} OnDelete={OnDelete} movie={movie} />
            ))}
          </div>
        ) : (
          films
            ?.slice(bounds[0], bounds[1])
            .map((movie) => (
              <MovieItem key={movie.id} OnDelete={OnDelete} movie={movie} />
            ))
        )}
      </div>
      <Typography>
        {filmsPerCategory?.length} results, {films?.length / itemsCountPerPage}{" "}
        per page
      </Typography>

      <div>
        {films.length !== 0 && (
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={films.length}
            pageRangeDisplayed={itemsCountPerPage / 2}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        )}
      </div>
    </>
  );
}

export default ListOfMovies;
