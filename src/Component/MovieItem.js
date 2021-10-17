import React, { Fragment, useState, useEffect } from "react";
import style from "../assets/style.module.css";

function MovieItem({ movie, OnDelete }) {
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleDidLike, setToggleDidLike] = useState(false);
  const [likes, setLikes] = useState(movie.likes);
  const [dislikes, setDislikes] = useState(movie.dislikes);
  const [counter, setCounter] = useState(0);


  const toggleLikeHandler = () => {
    if (counter === 1) {
      setLikes((prev) => prev + 1);
      setDislikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setCounter(1);
    setToggleLike(!toggleLike);
    setToggleDidLike(false);
  
  };
  const toggleDislikeHandler = () => {
    if (counter === 1) {
      setDislikes((prev) => prev + 1);
      setLikes((prev) => prev - 1);
    } else {
      setDislikes((prev) => prev + 1);
    }
    setCounter(1);
    setToggleDidLike(!toggleDidLike);
    setToggleLike(false);
  };

  useEffect(() => {
  
  }, [toggleLike, toggleDidLike, counter]);

  return (
    <Fragment>
      <div className="App" style={{ margin: "0.5cm" }}>
        <div className="card" style={{ backgroundColor: "#778899" }}>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-text">
              <h3>{movie.category}</h3>
            </p>

            <p className="card-text">
              Like : {likes} Dislike : {dislikes}
            </p>
          </div>

          <div style={{ marginLeft: "5cm" }}>
            <button
              class="btn btn-outline-success"
              style={{ width: "40%", margin: "0.5cm" }}
              onClick={toggleLikeHandler}
              disabled={toggleLike}
            >
              Like
            </button>
            <button
              class="btn btn-outline-primary"
              style={{ width: "40%" }}
              onClick={toggleDislikeHandler}
              disabled={toggleDidLike}
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
