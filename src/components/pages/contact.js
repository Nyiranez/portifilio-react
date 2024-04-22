

import React from 'react'
import { Contacth } from '../contacth'

export const Contact = () => {
  return (
    <div className='pb-4 bg-zinc-700 h-screen'>
      <Contacth/>
      <div className=' flex flex-col items-center justify-center pt-16 '>
        <h1 className="text-2xl font-bold text-white">Contact Information</h1>
        <p className=" text-gray-400">Address: Rwanda, Kigali, Kimironko
          Phone:<span className="text-red-600 font-bold ml-2 mr-2">+250786170670</span>
          Email:<span className="text-red-600 font-bold ml-2">nyiranezalouise93@gmail.com</span></p>
      </div>
      <div className="flex md:flex-row md:mt-16 flex-col space-y-8 items-center mt-8  md:justify-around">
        <div className="w-96 h-96 animate-pulse bg-slate-200 flex flex-col items-center justify-center px-4 shadow-[5px_5px_0px_0px_rgba(109,40,217)]" >
          <p
            class="bg-slate-600 rounded-full w-10 h-10 flex flex-col items-center justify-center text-white text-xl animate-ping">
            !</p>
          <h1 className='text-black text-2xl font-bold mt-4'>Ooops! Samething Went wrong</h1>
          <p className='mt-4'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
        </div>
        <div className="w-96 h-96  ml-4 ">
          <input type="text" placeholder="Enter your full Name" required className='w-full h-14 border-2'></input><br></br>
          <input type="text" placeholder="Enter your Email" required className='mt-8 w-full h-14 border-2'></input><br></br>
          <textarea placeholder='Message' required className='mt-8 w-full h-32 border-2'></textarea>
          <button className='px-4 py-2 bg-blue-400 rounded-full mt-6'>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}