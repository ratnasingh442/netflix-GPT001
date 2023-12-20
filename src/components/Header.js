import React, { useEffect } from 'react'
import {NETFLIX_LOGO, USER_AVATAR} from './utils/constants';
import { auth } from './utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch()

  const user = useSelector(store=>store.user);
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
  return (
    <>
    <div className='flex justify-between absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-30'>
      <img  src={NETFLIX_LOGO} alt="logo" className='w-44'/>

   {user&& <div className='m-4 flex text-white'>
      <img src={USER_AVATAR} alt="logo"/>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>}
    </div>
    </>
  )
}

export default Header
