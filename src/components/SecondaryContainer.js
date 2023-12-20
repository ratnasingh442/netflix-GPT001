import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie);
  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-20 pl-4'>
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Latest"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer