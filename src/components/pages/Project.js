import React from 'react'
import commerce from '../images/group-computer-neatly-placed-lab-260nw-605958425.webp'
import local from '../images/localStorage.PNG'
import dice from '../images/diceog.PNG'
import paper from '../images/paper-rock-scissor-game.PNG'


export const Project = () => {
  return (
    <div className='bg-black-950'>
      
      <div className='flex flex-col mt-64 space-y-8  pt-8'>
        <div className='flex md:flex-row items-center space-y-4 flex-col md:justify-around'>
          <div className='space-y-2'>
            <button className=' py-2 px-2 bg-blue-200 rounded-full hover:border-2 hover:border-cyan-600'><a href="https://nyiranez.github.io/potifolio-full/src/index.html" className='text-white'>E-COMMERCE</a></button>
            <img src={commerce} alt="" className=''></img>
          </div>
          <div className='space-y-2'>
            <button className=' py-2 px-2 bg-blue-200 rounded-full hover:border-2 hover:border-cyan-600'><a href="https://nyiranez.github.io/localStorage-work/honey.html" className='text-white'>LOCAL-STORAGE</a></button>
            <img src={local} alt="" className=' h-96'></img>
          </div>

        </div>
        <div className='flex md:flex-row items-center md:justify-around flex-col space-y-4'>
          <div className='space-y-2'>
            <button className=' py-2 px-2 bg-blue-200 rounded-full hover:border-2 hover:border-cyan-600'><a href="https://nyiranez.github.io/roll-Dice-Game/roll.html" className='text-white'>ROLL-DICE</a></button>
            <img src={dice} alt="" className=''></img>
          </div>
          <div className='space-y-2'>
            <button className=' py-2 px-2 bg-blue-200 rounded-full hover:border-2 hover:border-cyan-600'><a href="https://nyiranez.github.io/rockPaperScissorGame/" className='text-white'>ROCK-PAPER-SCISSOR</a></button>
            <img src={paper} alt="" className=''></img>
          </div>

        </div>

      </div>
    </div>
  )
}
