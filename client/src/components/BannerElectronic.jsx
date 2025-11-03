import React from 'react'
import { banners } from '../assets/electronics/assetsElectronics'

const BannerElectronic = () => {
  return (
        <div className='bg-[#f6f5f8] mt-20 w-full lg:aspect-[16/7] xl:aspect-[16/6] flex flex-col md:flex-row justify-between  p-20 gap-14 overflow-hidden'>
            <div className=' h-full'>
                <img className='w-full h-full object-cover' src={banners.banner02} alt="" />
            </div>
            <div className='w-full md:w-[50%] md:pt-10'>
               <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-gray-900'>Apple Charger</h1>
               <p className='mt-3 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod molestias voluptatum doloremque? Officia suscipit animi ratione ipsa tempore. !</p>
            </div>
        </div>
  )
}

export default BannerElectronic