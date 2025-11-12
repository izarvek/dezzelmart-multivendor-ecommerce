import React, { useState } from "react";
import { motion } from "framer-motion";
import { fashionTrendyAssets } from "../../assets/fashion/assetsFashion";
import Rating from "../templates/Rating";
import { useNavigate } from "react-router-dom";

const CardsFashion = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("Best Sellers");
  
 const filterProducts = () => {
  if (category === "Best Sellers") {
    return fashionTrendyAssets;
  } else if (category === "New Arrivals") {
    return fashionTrendyAssets.filter(product => product.new === true);
  } else if (category === "Sale Items") {
    return fashionTrendyAssets.filter(product => product.sale === true);
  } else {
    return [];
  }
 };

  return (
    <div>
      <div className="flex items-center flex-col w-full">
        <h1 className="text-4xl md:text-5xl outfit-medium  text-gray-800">
          Trendy Products
        </h1>
        <ul className="flex gap-20 text-gray-500 mt-6 ">
          {["Best Sellers", "New Arrivals", "Sale Items"].map((item, index) => (
            <li
              key={index}
              onClick={() => setCategory(item)}
              className={`relative ${
                category === item ? "text-red-500" : "text-gray-400 "
              } text-lg cursor-pointer outfit-regular `}
            >
              {item}
              <motion.div
                className="absolute -bottom-[5px] left-0 w-full h-0.5 bg-red-500"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: category === item ? 1 : 0,
                  scaleX: category === item ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-6">
        {filterProducts().slice(0 , 10).map((product, i) => (
          <div onClick={() => {navigate(`/product/${product.urlSlug}`) ,  window.scrollTo({ top: 0, behavior: 'smooth' });}}  key={i}>
            <div  className="relative">
              <div className="w-full aspect-[5/6] overflow-hidden">
                <img
                  className="w-full h-full hover:scale-105 hover:brightness-105 transition-all duration-500 ease-in-out "
                  src={product.image[0]}
                  alt=""
                  
                  />
              </div>
              <div className="absolute top-10">
                <div className={`bg-white w-6 md:w-7 lg:w-8 aspect-[2/5] rounded flex items-center justify-center ${product.sale === true ? '' : "hidden"}`}>
                  <p className={`-rotate-90 outfit-bold md:text-base text-sm`}>
                    SALE
                  </p>
                </div>
                <div className={`bg-white w-6 md:w-7 lg:w-8 aspect-[2/5] mt-4 rounded flex items-center justify-center ${product.new === true ? '' : "hidden"}`}>
                  <p className="-rotate-90 outfit-bold md:text-base text-sm">
                    NEW
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4">
              <h2 className="text-gray-400 text-lg outfit-medium">{product.category}</h2>
              <p className=" text-xl md:text-xl outfit-semibold text-center mb-1">
               {product.title}
              </p>
              <Rating rating={product.rating}  />
              <div>
                <p className="mt-1 text-lg text-gray-600 outfit-bold">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsFashion;
