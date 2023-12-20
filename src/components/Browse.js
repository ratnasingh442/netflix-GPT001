import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from './utils/useNowPlayingMovies';

export const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
    <Header />
    <div className=''>
      <MainContainer />
      <SecondaryContainer />
    </div>
    </>
  )
}
export default Browse;