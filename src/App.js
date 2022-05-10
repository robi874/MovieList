import MovieApplication from "./MovieApplication";
import AddMovieForm from "./AddMovieForm";
import SaveMoviesButton from "./SaveMoviesButton";
import Movies from "./Movies";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([

  ]);

  function deleteItem(key) {
    setMovies(movies.filter((movie) => movie.key !== key))
  }
  function sortAlpha() {
    var newMovies = [...movies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title));
    for (let i = 0; i < newMovies.length; i++) {
      newMovies[i].key = i+1;
    }
    setMovies(newMovies);
  }
  function sortRating() {
    var newMovies = [...movies];
    newMovies.sort((a, b) => b.rating-a.rating);
    for (let i = 0; i < newMovies.length; i++) {
      newMovies[i].key = i+1;
    }
    setMovies(newMovies);
  }

  return (
    <MovieApplication>
      <AddMovieForm movies={movies} setMovies={setMovies}>
      </AddMovieForm>
      <SaveMoviesButton />
      <hr />
      <Movies movies={movies} setMovies={setMovies} deleteItem={deleteItem}>

      </Movies>
      <button className="btn btn-primary mt-3" value="Betygs ordning" type="submit" onClick={() => { sortAlpha() }}>Alfabetisk Ordning</button>
      <button className="btn btn-primary mt-3 mx-1" value="Betygs ordning" type="submit" onClick={() => { sortRating() }}>Betygs ordning</button>

    </MovieApplication>
  );
}

export default App;
