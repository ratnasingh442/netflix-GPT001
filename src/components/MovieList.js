import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='text-white'>
    <h1 className='text-3xl py-4'>{title}</h1>
    <div>
        <div >
        <Carousel responsive={responsive} autoPlay={true} transitionDuration={500} autoPlaySpeed={1000} draggable={true} swipeable={true}>
            {
                movies?.length>0 && movies.map(movie => 
                <MovieCard key={movie?.id} poster_path={movie?.poster_path} />)
            } 
            </Carousel>       
    </div>
    </div>
    </div>
  )
}

export default MovieList