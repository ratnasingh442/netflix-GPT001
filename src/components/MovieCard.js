import React from 'react'
import { IMG_CDN } from './utils/constants'

const MovieCard = ({poster_path}) => {
  return (
  
    <div>
        <img alt="Movie Card" src={IMG_CDN+poster_path} />
    </div>
  
  )
}

export default MovieCard