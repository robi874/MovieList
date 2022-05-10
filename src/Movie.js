import React from 'react';
import star from './images/star.png';
import imgdelete from './images/delete.png';
import './Movie.css';

export default function Movie(props) {

    function calcRating() {
        var rating = [];
        rating.push(props.title);
        rating.push(<img src={imgdelete} className="delete-movie-icon" onClick={() => props.deleteItem(props.movie.key)} alt="Delete"></img>)
        for (let i = 0; i < props.rating; i++) {
            rating.push(<img src={star} alt="Star"></img>);
        }
        return rating;
    }

    return (
       <li className="list-group-item">
           {calcRating()}
       </li> 
    )
}
