import React from "react";
import {electronicProducts} from "../../assets/electronics/assetsElectronics";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CardsElectronics = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 ">
      {electronicProducts.slice(0 , 20).map((product, i) => {
        const {title , price ,discount ,category , image} = product ;
        return (
          <div key={i} className="border-[1px] border-gray-300 rounded-lg p-2 lg:p-4 xl:p-6 mb-2" onClick={() => {navigate(`/product/${product.urlSlug}`) , window.scrollTo({ top: 0, behavior: 'smooth' });}}>
            <div className="w-full aspect-[16/12] ">
              <img
                className="w-full h-full object-cover"
                src={image}
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
                <p className="text-2xl outfit-semibold">${(price*(1 - discount/100)).toFixed(2)}</p>
                <div className="flex gap-3">
                  <FaRegHeart className="w-5 h-5" />
                  <FaHeart className="w-5 h-5 text-red-600 hidden" /> <BsCart2 className="w-5 h-5" />
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
  );
};

export default CardsElectronics;
