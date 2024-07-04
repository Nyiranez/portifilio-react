import profiles from '../images/IMG_8092.HEIC'
import { GoArrowDown } from "react-icons/go";
import React from 'react'

export const About = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col items-center md:justify-around md:items-center md:mt-16 h-screen'>
        <div className='bg-black'>
          <img src={profiles} s alt="" className='w-80 h-96'></img>
        </div>
        <div className='  py-8 px-8'>
        <h1 className='text-red-400'>About me</h1>
        <h1 className='font-bold text-4xl'>I'm <span className='text-red-400 text-6xl'>Louise</span></h1>
        <h1 className='text-red-400 text-6xl'>Front-end</h1>
        <h1 className='font-bold text-6xl'>Developer</h1>
        <h1>Based in Kigali, Rwanda</h1>
          <p>I live in Rwanda and I have been a software developer since 2019 until now.</p>
          <p>I build websites that are good and well-designed you can trust me for sure</p>
          <p>I'm a good worker , hard working and I'm very passionate and dedicated to my work.. thank you </p>
        </div>
      </div>
<div className='flex flex-col items-center justify-center mb-16'>
  <a href="https://docs.google.com/document/d/152VBc-XQPmnGwxaanem3JWBuUoVG1Mmh/edit?usp=sharing&ouid=110965948465654888248&rtpof=true&sd=true" className='bg-red-600 px-4 py-2 rounded'>Download  <span className='text-white'>CV <span><GoArrowDown /></span></span></a>
</div>
    </div>
  )
}
