import React from 'react';
import {NETFLIX_LOGO} from './utils/constants';
import { auth } from './utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
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

   {user&& <div className='m-4 flex'>
      <img src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt="logo"/>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>}
    </div>
    </>
  )
}

export default Header
