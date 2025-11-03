import React from "react";
import { RxCross1 } from "react-icons/rx";
const Banner = () => {
  return (
    <div class="w-full flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 py-1  font-medium text-sm text-white text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
      <p>Get 20% OFF on Your First Order!</p>
      <div class="flex items-center space-x-6">
        <button
          type="button"
          class="font-normal text-gray-800 bg-white px-4 py-1 rounded-full"
        >
          Claim Offer
        </button>
        <button type="button ">
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default Banner;
