import React from 'react';
import { GiElectricalCrescent } from "react-icons/gi";
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#fafafc] mt-20 py-10">
      <div className="flex items-center gap-2 text-sm text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
        <GiElectricalCrescent />
        <span>Simple Process</span>
      </div>
      <h1 className=" text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-900 mt-4">Subscribe & Get <span className='text-red-700'>10% </span>Discount</h1>
      <p className="max-w-lg text-center text-slate-500 mt-4 md:mt-6">
        Join thousands of users who are already creating amazing things, completely free to start.
      </p>
      <form className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="focus:outline-none pl-10 py-5 bg-transparent w-full"
          required
        />
        <button className="shrink-0 mr-2 px-6 py-3 text-sm bg-gradient-to-r from-red-500 active:from-red-600 to-red-700 active:to-red-400 rounded-md active:scale-95 transition duration-300 text-white">
          Subscribe now
        </button>
      </form>
    </div>
  );
};

export default Newsletter;