import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "./movieSlice";
import { API_OPTIONS } from "./constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movie.nowPlayingMovies);
    useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies()
    },[])
    const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
  dispatch(addNowPlayingMovies(json.results));

}
}

export default useNowPlayingMovies
