import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {

  const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useGSAP(() => {
    gsap.to('#hero', { opacity : 1, delay : 2, })
    gsap.to('#cta', { delay : 2, opacity : 1, y : -50 })
  },[])

  function heroSrcHandler(){
    if(window.innerWidth < 760) setVideoSrc(smallHeroVideo)
    
    else setVideoSrc(heroVideo)
  }

  useEffect(() => {
    window.addEventListener('resize',heroSrcHandler);

    return () => {
      window.removeEventListener('resize', heroSrcHandler);
    }
  },[])

  return (
    <section className='bg-black w-full nav-height relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='text-white hero-title'>
          iPhone 15 Pro
        </p>
        <div className='md:w-10/12 sm:w-5/12 w-7/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className='btn bg-gray-100'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero;