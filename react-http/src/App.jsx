
import React, { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import { useEffect } from 'react';
import { useCallback } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://swapi.dev/api/films/`)
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

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
    } catch (error) {
      setError(error.message)
      // console.log(error);
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    //adding a pointer to the fn as a dependency
    fetchMoviesHandler()
  }, [])

  let content = <p>Found No Movies..</p>

  if (movies.length > 0) content = <MoviesList movies={movies} />

  if (error) content = <p>{error}</p>

  if (isLoading) content = <p>Loading...</p>


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;