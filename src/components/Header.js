import React, { useEffect } from 'react'
import {NETFLIX_LOGO, USER_AVATAR} from './utils/constants';
import { auth } from './utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { toggleGptSearch } from './utils/gptSlice';
import { SUPPORTED_LANGUAGES } from './utils/constants';
import { changeLanguage } from './utils/configSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch()

  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGpt);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate("/browse");
        

      } else {
        dispatch(removeUser());
        navigate("/")
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleGptSearch = () =>{
    dispatch(toggleGptSearch())
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='flex justify-between absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-30'>
      <img  src={NETFLIX_LOGO} alt="logo" className='w-44'/>

     

   {user&& <div className='m-4 flex text-white'>
   {showGptSearch && <select className='p-4 m-2 bg-gray-500' onChange={handleLanguageChange}>
         {SUPPORTED_LANGUAGES.map(lang=>
         <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
         )}
      </select>}
   <button onClick={handleGptSearch} className='bg-purple-500 text-black py-2 px-4 mx-4 my-2 rounded-lg'>{showGptSearch?"HomePage":"GPTSearch"}</button>

      <img  className="w-11 h-11"src={USER_AVATAR} alt="logo"/>


      <button onClick={handleSignOut}>Sign Out</button>
    </div>}
    </div>
    
  )
}

export default Header
