import React, { useRef, useState } from 'react'
import { NETFLIX_BACKGROUND_IMG } from './utils/constants'
import { checkValidation } from './utils/validate';

const Browse = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef();
  const password = useRef();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleBtnClick = () =>{

    const message = checkValidation(email.current.value, password.current.value);

    console.log(message);
    setErrorMsg(message);


  }

  const handleToggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <>
    <div className='absolute'>
      < img src={NETFLIX_BACKGROUND_IMG} alt="background-image"/>
    </div>
    <div className='bg-black absolute z-20 mx-auto right-0 left-0 my-36 h-6/12 w-3/12 rounded-lg bg-opacity-80'>
<form className='text-white p-10' onSubmit={(e)=>e.preventDefault()} >


  <h1 className='font-bold text-3xl mx-auto left-0 right-0 w-15 block '>{isSignIn? 'Sign In': 'Sign Up'}</h1>
  {
    !isSignIn && (
      <input type="text" placeholder='Full Name' className='p-4 mx-auto left-0 right-0 my-8 w-full block bg-gray-700 rounded-lg' />
    )
  }
  <input type="email" placeholder='Email Address' className='p-4 mx-auto left-0 right-0 my-8 w-full block bg-gray-700 rounded-lg' ref={email} />
  <input type="password" placeholder='Password' className='p-4 mx-auto left-0 right-0 w-full block bg-gray-700 rounded-lg' ref={password}/>
  {
    !isSignIn && (
      <input type="password" placeholder='Confirm Password' className='p-4 mx-auto left-0 right-0 my-8 w-full block bg-gray-700 rounded-lg' />
    )
  }
  <p className='text-red-500'>{errorMsg}</p>
  <button className='bg-red-500 px-20 py-4 mx-auto left-0 right-0 my-8 w-full block rounded-lg' onClick={handleBtnClick}>{isSignIn? 'Sign In': 'Sign Up'}</button>
  <h4 className='cursor-pointer' onClick={handleToggleSignIn}>{isSignIn?'New to Netflix? Sign Up!': 'Already have account? Sign In'}</h4>
</form>
    </div>

    </>
  )
}

export default Browse
