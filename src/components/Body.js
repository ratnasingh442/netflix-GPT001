import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import Header from './Header';

const Body = () => {
  // const dispatch  = useDispatch()

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const {uid, email, displayName} = user;
  //       dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        

  //     } else {
  //       dispatch(removeUser());
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, [])
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);



  return (
    <div>
     <RouterProvider router = {appRouter}>
     </RouterProvider>
    </div>
  )
}

export default Body
