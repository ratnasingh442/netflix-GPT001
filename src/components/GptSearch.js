import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestion } from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND_IMG } from './utils/constants'

export const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>
      <img src={NETFLIX_BACKGROUND_IMG} alt="background-image" />
    </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}
