
import React, { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([])

  async function fetchMoviesHandler() {
    const response = await fetch(`https://swapi.dev/api/films/`)
    const data = await response.json()
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    const movieData = data.results.map(data => {
      return {
        id: data.episode_id,
        title: data.title,
        openingText: data.opening_crawl,
        releaseDate: data.release_date
      }
    })
    setMovies(movieData)
    console.log(movieData);

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;