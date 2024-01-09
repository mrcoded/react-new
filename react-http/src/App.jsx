
import React, { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMoviesHandler() {
    setIsLoading(true)

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
    setIsLoading(false)
    console.log(movieData);

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;