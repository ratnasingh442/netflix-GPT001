import React from 'react';
import {NETFLIX_LOGO} from './utils/constants';

const Header = () => {
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-30'>
      <img  src={NETFLIX_LOGO} alt="logo" className='w-44'/>
    </div>
  )
}

export default Header
