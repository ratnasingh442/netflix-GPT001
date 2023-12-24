import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie);
  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-20 pl-4 italic font-bold'>
      
     <MovieList title={"NOW PLAYING"} movies={movies.nowPlayingMovies}/>
     
     <MovieList title={"TOP RATED"} movies={movies.topRatedMovies}/>
     <MovieList title={"POPULAR"} movies={movies.popularMovies}/>
     <MovieList title={"UPCOMING"} movies={movies.upcomingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer