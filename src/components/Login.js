import React, { useRef, useState } from 'react'
import { NETFLIX_BACKGROUND_IMG } from './utils/constants'
import { checkValidation } from './utils/validate';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBtnClick = () =>{

    const message = checkValidation(email.current.value, password.current.value);

    console.log(message);
    setErrorMsg(message);

    if(message)return;

    if(!isSignIn){
    // Sign UP Logic

    console.log("auth = ", auth);
    console.log("email", email.current.value);
    console.log("pass = ", password.current.value);

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    console.log(userCredential);
    const user = userCredential.user;
    console.log("User", user);
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid, email, displayName} = auth.currentUser;
      dispatch(addUser({uid:uid, email:email, displayName:displayName}));

      navigate("/browse");
     
    }).catch((error) => {
     setErrorMsg(error);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+ errorMessage)
  });
  }
    else{
    //Sign In Logic

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+ errorMessage)

  });

    }


  }

  const handleToggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <>
    <Header />
    <div className='absolute'>
      <img src={NETFLIX_BACKGROUND_IMG} alt="background-image" />
    </div>
    <div className='bg-black absolute z-20 mx-auto right-0 left-0 my-36 h-6/12 w-3/12 rounded-lg bg-opacity-80'>
<form className='text-white p-10' onSubmit={(e)=>e.preventDefault()} >


  <h1 className='font-bold text-3xl mx-auto left-0 right-0 w-15 block '>{isSignIn? 'Sign In': 'Sign Up'}</h1>
  {
    !isSignIn && (
      <input type="text" placeholder='Full Name' className='p-4 mx-auto left-0 right-0 my-8 w-full block bg-gray-700 rounded-lg' ref={name} />
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

export default Login
