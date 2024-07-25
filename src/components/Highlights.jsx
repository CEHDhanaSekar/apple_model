import React from 'react'
import { rightImg, watchImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/src';
import VideoCarousel from './VideoCarousel';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {

  useGSAP(() => {
    gsap.to('.link', { opacity : 1, y : 0, stagger : 0.2 })
    
    gsap.to('.section-heading', {
      y : 0,
      opacity : 1, 
      ease : 'power1.inOut', 
      duration : .5,
      scrollTrigger : {
        trigger : '.section-heading',
        toggleActions : 'restart reverse none none'
      }
    })
    
  },[])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 md:flex items-center justify-between w-full gap-2'>
          <h1 id='title' className='section-heading'>
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link'>
              Watch the film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt="right" className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights;