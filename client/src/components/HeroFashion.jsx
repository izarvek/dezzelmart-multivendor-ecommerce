import React from "react";
import { fashionWB } from "../assets/fashion/assetsFashion";
import { FaAngleRight } from "react-icons/fa6";

const HeroFashion = () => {
  return (
    <div className="mb-20"> 

      <div className="flex gap-4 items-center bg-black py-4 justify-center text-white ">
        <p className="text-sm sm:text-base lg:text-md xl:text-xl text-gray-100 font-semibold uppercase">
          Clearance sale : Our Best Price Ever
        </p>
        <div className="flex items-center gap-2">
          <p className="font-semibold">Shop Now</p>
          <FaAngleRight />
        </div>
      </div>

      <div className="relative">
        <img className="w-full hover:brightness-105 transition-all duration-300 ease-in-out" src={fashionWB.womenBanner01} alt="" />
      </div>
    </div>
  );
};

export default HeroFashion;
