
import React, { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import { useEffect } from 'react';
import { useCallback } from 'react';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // const response = await fetch(`https://swapi.dev/api/films/`)
      const response = await fetch(`https://react-http-e4524-default-rtdb.firebaseio.com/movies.json`)
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

      const data = await response.json()
      // .then(res => {
      //   return res.json()
      // })
      // .then(data => {

      const loadedMovies = []

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      // const movieData = data.results.map(data => {
      // const movieData = data.map(data => {
      //   return {
      //     id: data.episode_id,
      //     title: data.title,
      //     openingText: data.opening_crawl,
      //     releaseDate: data.release_date
      //   }
      // })
      //setstate is not used as cb function because react 
      //guarantees that it ill not change
      // setMovies(movieData)
      setMovies(loadedMovies)
      console.log(loadedMovies);
    } catch (error) {
      setError(error.message)
      // console.log(error);
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    //adding a pointer to the fn as a dependency
    fetchMoviesHandler()
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const res = await fetch(`https://react-http-e4524-default-rtdb.firebaseio.com/movies.json`, {
      method: 'POST',
      //body want a json object resource
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }

  let content = <p>Found No Movies..</p>

  if (movies.length > 0) content = <MoviesList movies={movies} />

  if (error) content = <p>{error}</p>

  if (isLoading) content = <p>Loading...</p>


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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