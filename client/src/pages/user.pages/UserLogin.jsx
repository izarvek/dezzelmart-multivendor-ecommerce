import React from "react";
import { MdEmail } from "react-icons/md";
import {  FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const UserLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLoaderClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10">
      <div className="border-[1px] border-gray-200 rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center mb-10">
          <FaShopify className="w-20 h-20 mb-6" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl poppins-medium">Welcome back to</h2>
            <h2 className="text-2xl poppins-medium">DezzelMart</h2>
          </div>
        </div>
        <div className="">
          <div className="flex gap-2 items-center border-[1px] border-gray-200 rounded-lg py-2 px-4">
            <MdEmail className="w-5 h-5" />
            <input
              className="bg-transparent placeholder:poppins-light poppins-light outline-none"
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div className="flex gap-2 items-center border-[1px] border-gray-200 rounded-lg py-2 px-4 mt-2">
            <FaLock className="w-5 h-5" />
            <input
              className="bg-transparent placeholder:poppins-light poppins-light outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={handleLoaderClick}
            className={`poppins-regular text-base text-white ${loading ? "bg-gray-600" : "bg-lime-700 hover:bg-lime-600"} transition-all duration-300 ease-in-out py-2 w-full rounded-full`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-1">
                <FiLoader className="inline animate-spin mr-2 w-5 h-5" />
                <p>signing in . . .</p>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
        <div className="flex items-center mt-6">
          <div className="w-full h-[2px] bg-gray-500 rounded-full"></div>
          <p className="text-sm poppins-regular px-2">or</p>
          <div className="w-full h-[2px] bg-gray-500 rounded-full"></div>
        </div>
        <div className="mt-6 flex justify-center items-center gap-6">
          <FaFacebook className="w-6 h-6" />
          <IoLogoApple className="w-7 h-7" />
          <FaGoogle className="w-6 h-6" />
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <p className="poppins-medium text-sm">Create new account?</p>
          <p
            onClick={() => navigate("/register")}
            className="underline text-blue-600 poppins-medium text-sm cursor-pointer"
          >
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
