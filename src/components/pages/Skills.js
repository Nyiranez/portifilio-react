import React from 'react'
import Open from '../images/Captureopentag1.PNG'
import Close from '../images/Captureclose1.PNG'
export const Skills = () => {
  return (
    <div className='h-screen bg-zinc-700 pt-8 '>
      <div >
        <div className='flex flex-col items-center'><img src={Open} alt="" className='animate-bounce'></img></div>
        <div className='flex flex-row justify-around'>
          <div>
            <p className='text-white text-2xl'>My Skills</p>
            <p className='text-white text-6xl'>You Can Imagine</p>
            <p className='text-white text-6xl'>I Can Do</p>
            <p className='text-white'>I am working on a professional, visually sophisticated and</p>
            <p className='text-white'>technologically proficient, responsive and multi-functional creative</p>
            <p className='text-white'>personal resume portfolio template</p>
          </div>
          <div className='bg-red-950 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] px-16 py-8 space-y-4 border-2 border-black transform transition-all hover:translate-x-8'>
            <div>
              <p className='text-white'>HTML (Hyper Text Markup Language)</p>
              <div class="bg-white w-full rounded-full">
                <div className="w-11/12 bg-red-400 text-center">95%</div>
              </div>
            </div>
            <div>
              <p className='text-white'>CSS (Cascading Style Sheet)</p>
              <div class="bg-white w-full rounded-full">
                <div className="w-10/12 bg-red-400 text-center">93%</div>
              </div>
            </div>
            <div>
              <p className='text-white'> JAVASCRIPT</p>
              <div class="bg-white w-full rounded-full">
                <div className="w-9/12 bg-red-400 text-center">80%</div>
              </div>
            </div>
            <div>
              <p className='text-white'>REACT</p>
              <div class="bg-white w-full rounded-full">
                <div className="w-10/12 bg-red-400 text-center">93%</div>
              </div>
            </div>
            <div>
              <p className='text-white'>GITHUB</p>
              <div class="bg-white w-full rounded-full">
                <div className="w-8/12 bg-red-400 text-center">75%</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mt-24'><img src={Close} alt="" className='animate-bounce'></img> </div>
      </div>
    </div>
  )
}
