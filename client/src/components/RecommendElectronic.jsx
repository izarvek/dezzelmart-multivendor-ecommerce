import React from 'react'
import Title from '../components/templates/Title'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { recomendedProducts } from '../assets/electronics/assetsElectronics';

const RecommendElectronic = () => {
  return (
    <div className='mt-10 '>
        <Title title={'Most Purchased Products'} description={'Highly recommended for the curtomer to claim this special products'}/>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 ">
              {recomendedProducts.map((product, i) => {
                const {title , price ,discountPrice ,category , rating , image} = product ;
                return (
                  <div key={i} className="border-[1px] border-gray-300 rounded-lg p-2 lg:p-4 xl:p-6 mb-2">
                    <div className="w-full aspect-[16/12] ">
                      <img
                        className="w-full h-full object-cover"
                        src={product.image}
                        alt=""
                      />
                    </div>
        
                    <div>
                      <p className="text-gray-500 mt-2 md:text-base text-sm">{category}</p>
                      <h2 className="font-semibold md:text-base text-sm">{title}</h2>
                      <p className="line-through text-base md:text-lg mt-1 md:mt-3 outfit-regular text-gray-400 ">
                         ${price}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-2xl outfit-semibold">${discountPrice}</p>
                        <div className="flex gap-3">
                          <FaRegHeart className="w-5 h-5" />
                          <FaHeart className="hidden" /> <BsCart2 className="w-5 h-5" />
                        </div>
                      </div>
                      <button className="w-full py-2 bg-[#496e51] hover:bg-green-800 rounded-md text-white mt-4">
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
    </div>
  )
}

export default RecommendElectronic