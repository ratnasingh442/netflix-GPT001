import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

export const GptMovieSuggestion = ({searchResult}) => {
  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-20 pl-4'>
     <MovieList title={"Search Results"} movies={searchResult}/>
   
    </div>
    </div>
  )
}
