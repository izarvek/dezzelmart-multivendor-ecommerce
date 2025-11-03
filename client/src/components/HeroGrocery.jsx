import React from 'react'
import { groceryBanner } from '../assets/groceries/assetsGrocery'

const HeroGrocery = () => {
  return (
        <div className='relative'>
            <div>
                <img className='w-full hover:brightness-105 transition-all duration-300 ease-in-out ' src={groceryBanner.groceryBanner01} alt="" />
            </div>
            <div className='absolute w-2/4 h-full top-0 left-10 md:left-14 lg:left-16 xl:left-20 flex flex-col justify-center'>
                 <p className='uppercase text-[10px] sm:text-sm bg-green-800 py-1 flex items-center justify-center gap-1 w-[9rem] sm:w-[12rem] md:w-[18rem] rounded text-white'><span>
                    100% Trusted Platform</span><span className='hidden md:block'>For Grocery</span></p>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-bold mt-2 lg:mt-6'>Healthy Living <br /> Begins with Fresh <br /> Choices</h2>
                <p className=' md:block hidden text-gray-700 opacity-80 lg:w-[30rem] font-bold  xl:w-[36rem] lg:text-base text-sm md:mt-4 lg:mt-5 xl:mt-8'>Enjoy fresh produce , pantry staples , and daily needs -delivered to <br />your doorstep with care</p>
            </div>
        </div>
  )
}

export default HeroGrocery