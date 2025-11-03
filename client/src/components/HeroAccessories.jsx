import React from "react";
import { accessoryProduct } from "../assets/accessories/assetsAccessories";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroAccessories = () => {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full hover:brightness-105 transition-all duration-300 ease-in-out "
          src={accessoryProduct.sliderJewelry1}
          alt=""
        />
      </div>
      <div className="absolute w-2/4 h-full top-0 left-10 md:left-24 lg:left-28 xl:left-32 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white playfair-display-regular leading-snug">
          Fashionable Jewelry Selection
        </h2>
        <p className=" md:block hidden text-white opacity-80 lg:w-[30rem]  xl:w-[36rem] lg:text-base text-sm md:mt-4 lg:mt-5 xl:mt-6">
          Meet Your New Best Friend If You Like The Thought Of Having The Best
          Diamongs In The World At A Prive As Gargerous As The Beauty
        </p>
        <button className="bg-gray-100 mt-3 md:mt-4 lg:mt-5 xl:mt-6 text-[#c5655b] rounded-full w-[6rem] md:w-[7.5rem] text-[10px] md:text-base py-1 flex items-center justify-center poppins-semibold gap-1">
          Shop Now <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default HeroAccessories;
