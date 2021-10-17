import React, { Fragment, useState, useEffect } from "react";
import style from "../assets/style.module.css";

function MovieItem({ movie, OnDelete }) {
  const [toggleLikeDislike, setToggleLikeDislike] = useState(false);
  const [likes, setLikes] = useState(movie.likes);
  const [dislikes, setDislikes] = useState(movie.dislikes);
  const [counter, setCounter] = useState(0);

  const toggleLikeDislikeHandler = () => {
    setToggleLikeDislike(!toggleLikeDislike);
  };

  useEffect(() => {
    if (toggleLikeDislike) {
      setLikes((prev) => prev + 1);
      setDislikes((prev) => prev - 1);
    } else {
      setDislikes((prev) => prev + 1);
      setLikes((prev) => prev - 1);
    }
  }, [toggleLikeDislike]);

  return (
    <Fragment>
      <div className="App" style={{ margin: "0.5cm" }}>
        <div className="card" style={{ backgroundColor: "#778899" }}>
          <div className="card-body">
            <h3 className="card-title">{movie.title}</h3>
            <p className="card-text">{movie.category}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <p className="card-text">
              Like : {likes} Dislike : {dislikes}
            </p>
          </div>

          <div style={{ marginLeft: "5cm" }}>
            <button
              class="btn btn-outline-success"
              style={{ width: "40%", margin: "0.5cm" }}
              onClick={toggleLikeDislikeHandler}
              disabled={toggleLikeDislike}
            >
              Like
            </button>
            <button
              class="btn btn-outline-primary"
              style={{ width: "40%" }}
              onClick={toggleLikeDislikeHandler}
              disabled={!toggleLikeDislike}
            >
              Dislike
            </button>

            <button
              class="btn btn-outline-danger"
              style={{ width: "40%", margin: "0.5cm" }}
              onClick={() => OnDelete(movie.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MovieItem;
