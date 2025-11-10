import React from 'react'
import { useNavigate } from 'react-router-dom';
import Rating from '../templates/Rating';
import {scrollToTop} from '../templates/scrollToTop.js'

const RecommendProductDetail = ({ suggestionProduct }) => {
  const navigate = useNavigate();
  return (
         <div className="mt-14 bg-gray-50 p-4 rounded-md">
      <div className="">
        <h1 className="poppins-regular text-2xl">Customers who viewed this item also viewed</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 gap-4">
        {
         suggestionProduct.slice(0 , 5).map((items , i)=> (
          <div key={i}  onClick={() => {navigate(`/product/${items.urlSlug}`) ,scrollToTop(300)}}>
            <div className="aspect-[5/6] overflow-hidden">
              <img 
              className="w-full h-full object-cover object-top hover:scale-105 hover:brightness-105 transition-all duration-500 ease-in-out" 
              src={items.image[0]} 
              alt="" 
              />
            </div>
            <div>
              <h2 className="mt-2 outfit-regular text-2xl">{items.title}</h2>
              <p className="mt-1 outfit-semibold text-xl">${(items.price*(1 - items.discount/100)).toFixed(2)} <span className="line-through text-base text-gray-500 ml-2">${items.price}</span></p>
              <div className="mt-1 flex gap-2">
                 <Rating rating={items.rating}/>
                 <p className="poppins-semibold text-sm">( {items.rating} )</p>
              </div>
            </div>
          </div>
         ))
        }
      </div>
     </div>
  )
}

export default RecommendProductDetail;