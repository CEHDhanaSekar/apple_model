import React from 'react'
import { footerLinks } from '../constants/index'

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10 mb-5">
      <div className="screen-max-width">
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-gray text-xs'>
            more ways to shop : {' '}
            <span className='text-blue underline cursor-pointer'>
             Find an Apple Store {' '}
            </span>
            or {' '}
            <span className='text-blue underline cursor-pointer'>
             other retailer
            </span>{' '}
            near you.
          </p>
          <p>
            Or call 001800-333-1617
          </p>
        </div>

        <div className='bg-neutral-700 my-7 h-[1px] w-full' />

        <div className="flex md:flex-row flex-col md:items-center justify-between gap-2">
          <p className='font-semibold text-gray text-xs '>Copyright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {
              footerLinks.map((link,i) => (
                <p className="font-semibold text-gray cursor-pointer text-xs hover:text-white" key={link}>
                  {link}{' '}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"></span>
                  )}
                </p>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;