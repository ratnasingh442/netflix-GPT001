import React from 'react'
import { lang } from './utils/languageConstants'
import { useSelector } from 'react-redux'

export const GptSearchBar = () => {
  const selLang = useSelector(store=>store.config);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" placeholder={lang[selLang.lang]["placeholder"]} 
            className='p-4 m-4 col-span-9'/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[selLang.lang]["search"]}</button>
        </form>
    </div>
  )
}
