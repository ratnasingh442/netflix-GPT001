import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from './constants';
import { addPopularMovies } from './movieSlice';

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movie.popularMovies);
    useEffect(()=>{
    !popularMovies&&getPopularMovies()
    },[])
    const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));

}
}
