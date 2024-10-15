import React from 'react'
import {Image} from 'cloudinary-react';

const Header = () => {
    return (
        <>
        <div className='relative w-full h-[697px] flex items-center justify-center flex-col mb-10'>
          <Image className='absolute w-full h-[697px]' loading='lazy' cloudName="dml48ptj8" 
          publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1728494270/agro_idqlyo.jpg">
          </Image>
           {/* overlay */}
           <div className='absolute flex items-center justify-center flex-col'>
             <div className=''>
              <h1 className='font-normal text-white font-georgia text-[32px] lg:text-[80px] text-center'>Empowering Sustainable</h1>
              <h1 className='font-normal text-white font-georgia text-[32px] lg:text-[80px] text-center'>Farming Practices</h1>
              <p className='font-normal  text-white font-georgia  text-[18px] lg:text-2xl text-center py-4'>Innovative solutions for modern Agriculture</p>
             </div>
             <div className='lg:py-8'>
              <button className='h-10 w-50 border rounded-[18px] px-2 py-1 bg-[#163518] hover:bg-customGreen font-normal font-georgia text-lg text-white'>Explore Our Solutions</button>
             </div>
           </div>
        </div>
        </>
      )
}

export default Header