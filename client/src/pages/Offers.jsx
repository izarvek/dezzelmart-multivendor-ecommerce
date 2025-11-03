import React from 'react'
import { banners, products } from '../assets/offers/assetsOffers'

const Offers = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10'>
     
    <div>
      <img className='w-full' src={banners.banner03} alt="" />
    </div>
    <div className='grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
         {
           products.map((item, index) => (
            <div key={index} className='border p-4 rounded-lg'>
               <img src={item} alt="" />
            </div>
          ))
         }
    </div>
    </div>
  )
}

export default Offers