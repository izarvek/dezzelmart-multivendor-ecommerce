import React from 'react'
import { banners } from '../assets/electronics/assetsElectronics'

const HeroElectronic = () => {
  return (
    <div className='bg-[#f6f5f8] w-full lg:aspect-[16/7] xl:aspect-[16/6] flex flex-col md:flex-row justify-between items-center p-20 gap-14 overflow-hidden'>
        <div className='aspect-square'>
            <img className='w-full h-full object-cover' src={banners.banner01} alt="" />
        </div>
        <div className='w-full md:w-[60%]'>
           <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-gray-900'>AirPods Max</h1>
           <p className='mt-3 sm:mt-4 md:mt-6 lg:mt-7 xl:mt-8 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod molestias voluptatum doloremque? Officia suscipit animi ratione ipsa tempore. !</p>
           <div className='flex justify-start gap-6 md:gap-8 xl:gap-12 items-baseline mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'><p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-green-900 font-bold'>₹59900.00</p><p className='line-through text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-500 font-bold'>₹64900.00</p></div>
        </div>
    </div>
  )
}

export default HeroElectronic