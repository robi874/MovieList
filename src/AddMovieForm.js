import React, { useState, useRef } from 'react';

export default function AddMovieForm(props) {
    
    const inputRef = useRef();

    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputRef.current.value == "" && rating  == 0) {
            alert("Du måste ange både titel och betyg på filmen.");
            return;
        }
        else if (inputRef.current.value  == "") {
            alert("Du måste ange titel på filmen.");
            return;
        }
        else if (rating  == 0) {
            alert("Du måste ange betyg på filmen.");
            return;
        }
        setRating(0);
        addItem(inputRef.current.value, rating)
        event.target.reset();
    }

    function addItem(title, rating){
        const newKey = props.movies.length > 0 ? props.movies[props.movies.length - 1].key + 1 : 1;
        console.log(newKey);
        props.setMovies([...props.movies, 
            {
                key: newKey,
                title: title,
                rating: rating
            }])
    }

    return (
        <form id="add-movie-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>

                <label>Titel:</label>
                <input type="text" id="title-field" className="form-control" ref={inputRef} />

                <label>Betyg:</label>
                <select type="text" id="rating-field" className="form-control" onChange={(e) => {setRating(e.target.value)}}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </fieldset>
            {props.children}
        </form>
    )
}

