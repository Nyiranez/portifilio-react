import React from 'react'

export const Text = () => {
  return (
    <div className='flex flex-col bg-neutral-700 px-4 py-2 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'>
        <textarea className='h-44'></textarea>
        <div className='mt-4 space-x-4'>
        <button className='bg-green-400 text-white w-fit px-2 py-1 font-bold'>Send</button>
        <button className='bg-red-400 text-white w-fit px-2 py-1 font-bold'>Cancel</button>
        </div>
       
    </div>
  )
}
