import React from 'react'

function MovieItem({movie,OnDelete, OnLikeIncr, OnLikeDesc}) {


    return (
        
                
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{movie.title}</h3>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <button className="btn-success mx-6" onClick={()=>OnLikeIncr(movie.id)} >Like({movie.likes})</button>||
      <button className="btn-primary mx-6" onClick={()=>OnLikeDesc(movie.id)} >Dislike({movie.dislikes})</button>
    </div>
    <button className="btn-danger mx-6" onClick={()=>OnDelete(movie.id)}>Delete</button>
  </div>
  
        
    )
}

export default MovieItem
