import React, {useState} from 'react'
import ListOfMovies from './ListOfMovies'

function SearchCategory() {

    const [state, setState] = useState({
        category:''
    })

    const handleChange = (e) => {
        setState({category: e.target.value})
        console.log(state.category)
      }

    return (


        <div className="App">
          <select className="app-select" onChange={handleChange}>
            <option id="Default"></option>
            <option id="Comedy">Comedy</option>
            <option id="Animation">Animation</option>
            <option id="Thriller">Thriller</option>
            <option id="Drame">Drame</option>
          </select>


        <ListOfMovies category={state.category}/>
    </div>
    )
}

export default SearchCategory
