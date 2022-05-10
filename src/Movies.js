import React from 'react'
import Movie from './Movie'

export default function Movies(props) {
  
  return (
    <div>
      <h2>Filmer</h2>
      <ul id="movies" className='list-group'>
        {props.movies.map((movie) => <Movie key={movie.key} title={movie.title} rating={movie.rating} deleteItem={props.deleteItem} movie={movie} />)}
      </ul>
    </div>
  )
}
