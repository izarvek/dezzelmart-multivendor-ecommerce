import React from "react";
import { PiHandbagSimple } from "react-icons/pi";
import { GiRoundStar } from "react-icons/gi";
import { groceryProductAssets } from "../assets/groceries/assetsGrocery";
import { useNavigate } from "react-router-dom";
const CardsGrocery = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-4">
      {
        groceryProductAssets.map((product , i) => (
      <div key={i} className="mb-4" onClick={() => navigate(`/product/${product._id}`)}>
        <div className="aspect-[5/4] border-[1px] border-gray-200  rounded-lg py-1 px-3">
          <img className="hover:brightness-105 hover:saturate-150 transition-all duration-300 ease-in-out" src={product.image} alt="" />
        </div>
        <div className="mt-2 border-[1px] border-gray-200 rounded-lg py-1 px-3 hover:bg-green-50 hover:border-green-500">
          <div className="flex justify-between items-center">
            <p className="text-base md:text-lg text-gray-500 outfit-regular">
             {product.title}
            </p>
            <div className="flex items-center gap-1">
              <GiRoundStar className="text-red-600" />
              <p className="outfit-medium">{product.rating}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="outfit-medium text-base md:text-lg">${product.price}</p>
            <PiHandbagSimple className="text-xl" />
          </div>
        </div>
      </div>
        ))}     

    </div>
  );
};

export default CardsGrocery;
