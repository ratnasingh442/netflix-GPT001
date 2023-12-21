import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addTrailerVideo } from "./movieSlice";

export const useTrailerVideo = (movieId) => {

const dispatch = useDispatch();
const trailerVideo = useSelector(store=>store.movie.trailerVideo);

useEffect(()=>{
   !trailerVideo && getVideo();
}, []);
const getVideo = async() => {
  const data =   await fetch("https://api.themoviedb.org/3/movie/"+movieId+
  "/videos?language=en-US", API_OPTIONS)
  const json = await data.json();
  const filterData = json.results.filter((video)=>video.type === "Trailer");
  const trailer = filterData.length>0?filterData[0]:json.results[0];
  dispatch(addTrailerVideo(trailer));
}
}
