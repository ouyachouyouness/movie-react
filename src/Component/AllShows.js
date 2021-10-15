// import React, { useEffect, useState, Fragment } from "react";
// import MovieItem from "./MovieItem";
// import Button from "@material-ui/core/Button";
// import style from "../assets/style.module.css";
// import ListOfMovies from "./ListOfMovies";
// import Pagination from "react-js-pagination";
// import Spinner from "../assets/Spinner";
// // liste des films
// const AllShows = ({ setSelectedMovie }) => {
//   //states pour stocker les films et gérer la pagination
//   const [allShows, setAllShows] = useState([]);
//   const [bounds, setBounds] = useState([0, 24]);
//   const [activePage, setActivePage] = useState(1);

//   //fonction permet de traiter le changement de page
//   const handlePageChange = (pageNumber) => {
//     setActivePage(pageNumber);
//     setBounds([(pageNumber - 1) * 24, pageNumber * 24 - 1]);
//     window.scrollTo(0, 0);
//   };

//   // appel API au chargement de la page
//   useEffect(() => {
//     ListOfMovies(setAllShows);
//   }, []);

//   return (
//     <Fragment>
//       {!AllShows ? (
//         <Spinner></Spinner>
//       ) : (
//         <Fragment>
//           <div className={style.MoviesContainer}>
//             {allShows.slice(bounds[0], bounds[1]).map((movie, index) => (
//               <div key={index} className={style.movieCard}>
//                 <MovieItem movie={movie} />
//                 <Button
//                   style={{ marginTop: "5px", marginLeft: "8%" }}
//                   color="primary"
//                   onClick={() => {
//                     setSelectedMovie(movie);
//                   }}
//                   variant="contained"
//                 >
//                   <i>
//                     <b>Afficher les details</b>
//                   </i>
//                 </Button>
//               </div>
//             ))}
//           </div>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <Pagination
//               activePage={activePage}
//               itemsCountPerPage={bounds[1] - bounds[0] + 1}
//               totalItemsCount={allShows.length}
//               pageRangeDisplayed={7}
//               onChange={handlePageChange}
//               itemClass="page-item"
//               linkClass="page-link"
//             />
//           </div>
//         </Fragment>
//       )}
//       ;
//     </Fragment>
//   );
// };

// export default AllShows;