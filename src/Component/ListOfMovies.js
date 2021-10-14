import React, {useState, useEffect} from 'react'
import { movies } from '../db/movies'
import MovieItem from './MovieItem'





function ListOfMovies() {

    const [films, setFilms] = useState(movies)
    
    const OnLikeIncr = (id) => {

            

                const t = films.map((movie) => {

                    if(movie.id === id){
                        movie.likes+=1
                        console.log(movie.likes);
                        setFilms(movie)
                    }
                    
                    
                })     
                  
       
    }
    const decriment = (id) => {

            

        const t = films.map((movie) => {

            if(movie.id === id){
                movie.likes+=1
                console.log(movie.likes);
                setFilms(movie)
            }
            
            
        })     
          

}

    const OnDelete = (id) => {
      
   if(window.confirm ("are you sure")){
       const newMovies = films.filter((movie) => movie.id !== id )
        setFilms(newMovies)}
        
    
    }
    
    return (
        <div className="card-deck">
            
            {films && films.map((movie)=>(<MovieItem OnDelete={OnDelete} OnLikeIncr={OnLikeIncr} movie={movie}/>))}
        </div>
    )
}

export default ListOfMovies
