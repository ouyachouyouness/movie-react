import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieItem from "./MovieItem";
import Pagination from "react-js-pagination";
import { GET_MOVIES } from "../Actions/Action";

const itemsCountPerPage = 4;
function ListOfMovies() {
  //case using redux store for managing the data
  //const films = useSelector((state)=>state.moviesReducer)
  const dispatch = useDispatch();
  const [films, setFilms] = useState([]);

  const [filmsPerCategory, setFilmsPerCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [bounds, setBounds] = useState([0, itemsCountPerPage]);

  const getFilms = async () => {
    try {
      let { movies } = await import("../db/movies");
      setFilms(movies);
      //just for testing that redux go
      dispatch({
        type: GET_MOVIES,
        payload: movies,
      });

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

  //Delete Movies
  const OnDelete = (id) => {
    if (window.confirm("are you sure")) {
      const newMovies = films.filter((movie) => movie.id !== id);
      setFilms(newMovies);
    }
  };

  //Filter movies by categories
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

  //Pagination
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setBounds([
      (pageNumber - 1) * itemsCountPerPage,
      pageNumber * itemsCountPerPage,
    ]);
    // window.scrollTo({ top: 0, behavior: "smooth" });
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
          //get movies with categories
          <div>
            {filmsPerCategory?.slice(bounds[0], bounds[1]).map((movie) => (
              <MovieItem key={movie.id} OnDelete={OnDelete} movie={movie} />
            ))}
          </div>
        ) : (
          //get all movies with pagination four
          films
            ?.slice(bounds[0], bounds[1])
            .map((movie) => (
              <MovieItem key={movie.id} OnDelete={OnDelete} movie={movie} />
            ))
        )}
      </div>

      <div style={{ marginLeft: "45%" }}>
        {films.length !== 0 && (
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={films.length}
            pageRangeDisplayed={
              filmsPerCategory.length > 4 ? itemsCountPerPage : 1
            }
            nextClassName="disabled"
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
            disableInitialCallback={true}
          />
        )}
      </div>
    </>
  );
}

export default ListOfMovies;
