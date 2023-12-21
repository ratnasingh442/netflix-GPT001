import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from './constants';
import { addUpcomingMovies } from './movieSlice';

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
    getUpcomingMovies()
    },[])
    const getUpcomingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));

}
}
