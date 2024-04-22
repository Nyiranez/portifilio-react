
import React, { useState } from 'react'
import profile from '../images/IMG_8265.HEIC'
import { Text } from './text';



export const Home = () => {
  const [text, setText]= useState(false);
  return (
    <div className='bg-zinc-700  h-screen pt-32 flex flex-row justify-around pb-16 t-24 '>
      <div className='space-y-12 '>
        <h1 className='text-gray-400'>Hello I'm</h1>
        <h2 className="text-8xl font-bold text-red-800">Louise</h2>
        <h2 className="text-2xl">Creative <span className="text-4xl font-bold animate-pulse m-auto">Front-End Developer</span></h2>
        
          <button className=' bg-red-600 px-6 py-4 hover:bg-white rounded-full hover:border-2 hover: border-black' onClick={()=>{
            setText(!text);
          }}>Say Hello </button>
         
       {text && <Text/>}
      </div>

      <div className='border-l-4 border-white' >


        <img src={profile} alt="" className='w-80 h-96 rounded-full'></img>
      </div>

      


    </div>
  )
}
