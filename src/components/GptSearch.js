import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestion } from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND_IMG } from './utils/constants'
import { useSelector } from 'react-redux'

export const GptSearch = () => {
  const searchResult = useSelector(store=>store.movie.searchedMovies);
  return (
    <div>
       <div className='absolute -z-10'>
      <img src={NETFLIX_BACKGROUND_IMG} alt="background-image" />
    </div>
        <GptSearchBar />


        {searchResult&&
        <div className='bg-black'> 
        <div className='mt-52  relative z-20'>
        <GptMovieSuggestion searchResult={searchResult} />
        </div>
        </div>}
    </div>
  )
}
