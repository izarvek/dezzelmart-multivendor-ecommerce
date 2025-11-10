import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import  { allAssets } from '../../components/templates/allAssets.js'
// We need => paginatedAssets throgh props 
const CardsProductListing = ({paginatedAssets}) => {
 const navigate = useNavigate();
  return (
    <div>
          {paginatedAssets.length === 0 ? (
            <div className="flex flex-col  justify-center items-center h-full"> 
              <h1 className="text-3xl md:text-5xl font-bold text-gray-700">
              404 Not Found
             </h1>
            <div className="h-px w-64 md:w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
             <p className="md:text-xl text-gray-400 max-w-lg text-center">
             The page you are looking for does not exist or has been moved.
            </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedAssets.map((item, i) => {
              return (
                <div
                  key={i}
                  className="border-[1px] border-gray-200 p-2 rounded-lg bg-white"
                >
                  <div 
                  onClick={() => {navigate(`/product/${item.urlSlug}`) , window.scrollTo({ top: 0, behavior: 'smooth' });}}
                  className="rounded-lg overflow-hidden ">
                    <img
                      className="w-full h-full object-cover object-top hover:brightness-105 transition-all duration-500 ease-in-out"
                      src={item?.image[0]}
                      alt=""
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="outfit-semibold text-sm">{item?.brand}</h2>
                    <p className="text-lg md:text-xl outfit-regular mt-1">
                      {item?.title}
                    </p>
                    <div>
                      {item?.sale && (
                        <p className="text-[12px] md:text-sm mt-1 outfit-medium bg-red-600 text-white w-[45%] md:w-[48%] flex justify-center rounded-sm">
                          Limited time deal
                        </p>
                      )}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1 border-b pb-2 border-gray-300">
                      <span className="text-2xl outfit-semibold">
                        ${(item?.price * (1 - item.discount / 100)).toFixed(1)}
                      </span>
                      <span className="line-through text-gray-500 outfit-medium">
                        ${item?.price}
                      </span>
                      <span className="outfit-regular outfit-medium">
                        ( {item?.discount}% Off )
                      </span>
                    </div>
                    <div className="mt-1 flex gap-1 items-center cursor-pointer text-blue-600 outfit-medium">
                      <p className=" text-sm  ">Add to Cart</p>
                      <RiShoppingCartLine />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
    </div>
  )
}

export default CardsProductListing