import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from './utils/useNowPlayingMovies';
import { usePopularMovies } from './utils/usePopularMovies';
import { useTopRatedMovies } from './utils/useTopRatedMovies';
import { useUpcomingMovies } from './utils/useUpcomingMovies';
import { GptSearch } from './GptSearch';
import { useSelector } from 'react-redux';

export const Browse = () => {

  const showGptSearch  = useSelector((store)=>store.gpt.showGpt);
  console.log(showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
    <Header />
    {
      showGptSearch ?
      (
      <GptSearch />) :
      (<>
      <MainContainer />
      <SecondaryContainer />
      </>)
    }
    </>
  )
}
export default Browse;