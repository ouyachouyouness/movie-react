import React, { Fragment, useState, useEffect } from "react";

function MovieItem({ movie, OnDelete, OnLikeIncr, OnLikeDecr }) {
  const [toggleLikeDislike, setToggleLikeDislike] = useState(false);
  const [likes, setLikes] = useState(movie.likes);
  const [dislikes, setDislikes] = useState(movie.dislikes);

  const toggleLikeDislikeHandler = () => {
    setToggleLikeDislike(!toggleLikeDislike);
  };

  useEffect(() => {
    console.log(toggleLikeDislike);
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
      <div className="App"></div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
          <button
            className="btn-success mx-6"
            onClick={() => OnLikeIncr(movie.id)}
          >
            Like({likes})
          </button>
          ||
          <button
            className="btn-primary mx-6"
            onClick={() => OnLikeDecr(movie.id)}
          >
            Dislike({dislikes})
          </button>
        </div>
        <button onClick={toggleLikeDislikeHandler} disabled={toggleLikeDislike}>
          like
        </button>
        <button
          onClick={toggleLikeDislikeHandler}
          disabled={!toggleLikeDislike}
        >
          dislike
        </button>
        <button className="btn-danger mx-6" onClick={() => OnDelete(movie.id)}>
          Delete
        </button>
      </div>
    </Fragment>
  );
}

export default MovieItem;
