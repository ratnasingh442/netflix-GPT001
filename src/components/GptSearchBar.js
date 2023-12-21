import React, { useRef } from 'react'
import { lang } from './utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { openai } from './utils/openai'
import { API_OPTIONS } from './utils/constants'
import { addSearchedMovies } from './utils/movieSlice'
export const GptSearchBar = () => {
  const selLang = useSelector(store=>store.config);
  const searchText = useRef();
  const dispatch = useDispatch();
  const  handleGptSearch = async() =>{

    // const searchPrompt = "Act as Movie Recommendation System and suggest some movies for query: " +searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example: 'Gadar, Sholay, Golmal, Koi Mil Gaya, Aitraaz"

    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: searchPrompt }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatCompletion)

    const searchQuery = searchText.current.value;
    const data =   await fetch("https://api.themoviedb.org/3/search/movie?query="+searchQuery, API_OPTIONS)
    const json = await data.json();
    console.log(json.results);

    dispatch(addSearchedMovies(json.results));


  }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder={lang[selLang.lang]["placeholder"]} 
            className='p-4 m-4 col-span-9' ref={searchText}/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearch}>{lang[selLang.lang]["search"]}</button>
        </form>
    </div>
  )
}
