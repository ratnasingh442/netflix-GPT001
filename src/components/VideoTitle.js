import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-13 absolute text-white aspect-video w-screen bg-gradient-to-b from-black px-10'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-gray-500  p-4  px-16 text-xl text-white rounded-lg '><span className='font-white'>▶</span> Play</button>
            <button className='bg-gray-500  p-4  px-13 text-xl text-white rounded-lg mx-4'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle