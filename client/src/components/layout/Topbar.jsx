import React from 'react'
import { ShoppingBag, Instagram, Twitter } from 'lucide-react';

const Topbar = () => {
  return (
    <>
      <div className='bg-orange-700 text-white'>
        <div className='container mx-auto flex justify-between items-center py-3 px-4'>
          
          {/* Left - Social Icons */}
          <div className='hidden md:flex items-center space-x-4'>
            <a href="#" className='hover:text-gray-300'>
              <ShoppingBag size={16} strokeWidth={1} className='h-4 w-4' />
            </a>
            <a href="#" className='hover:text-gray-300'>
              <Instagram size={16} strokeWidth={1} className='h-4 w-4' />
            </a>
            <a href="#" className='hover:text-gray-300'>
              <Twitter size={16} strokeWidth={1} className='h-4 w-4' />
            </a>
          </div>

          {/* Center - Shipping Message */}
          <div className='flex-grow flex justify-center'>
            <span className='text-sm'>
              We ship worldwide - Fast and reliable shipping
            </span>
          </div>

          {/* Right - Contact Number */}
          <div className='text-sm hidden md:block'>
            <a href="tel:+1234567890" className='hover:text-gray-300'>
              +1234567890
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Topbar;
