import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";
import avatar from '../../assets/fashion/banner-01-1.jpg'
import UserProfileMenu from "../user.components/UserProfileMenu";
import { useSelector , useDispatch } from "react-redux";
import { toggleProfileMenu , toggleProfileNotifications} from "../../features/UserSlice";
import UserNotification from "../user.components/UserNotification";

const Navbar = () => {
  const [underline, setUnderline] = useState("Explore");
  const navitate = useNavigate();
  const dispatch = useDispatch();
  const userToggleProfile = useSelector((state) => state.user.profileMenuOpen);
  const userToggleNotification = useSelector((state) => state.user.profileNotificationsOpen);

  return (
    <>
      {/* Navbar Banner Section  */}
      <div className="text-center text-sm md:text-base md:font-medium py-1 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
        <p className="text-white">
          <span className="mr-4">Exclusive Price Drop! Hurry, {"Fashion"}</span>
          <span className="underline underline-offset-2">Offer Ends Soon!</span>
        </p>
      </div>

      {/* Navbar Main Section */}
      <div className="flex justify-between items-center shadow py-3 px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40">
        <div className="flex gap-6">
          <h1 onClick={()=> navitate('/')} className="hidden md:block text-xl font-bold cursor-pointer poppins-bold text-gray-800">
            Dezzelmart
          </h1>
          <h1 onClick={()=> navitate('/')}  className="block md:hidden text-xl font-bold cursor-pointer poppins-bold text-gray-800">
            DezzelM
          </h1>
          <ul className="hidden md:flex gap-6 items-center font-bold text-gray-700">
            {["Explore", "Blogs", "Offers", "Career"].map((item, index) => (
              <li
                key={index}
                onClick={() => {setUnderline(item) , navitate(`/${item.toLowerCase()}`)}}
                className="relative cursor-pointer poppins-semibold"
              >
                {item}
                <motion.div
                  className="absolute -bottom-[17px] left-0 w-full h-0.5 bg-gray-800"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: underline === item ? 1 : 0,
                    scaleX: underline === item ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className=" gap-2 font-bold text-gray-700 hidden">
            <button onClick={()=> navitate('/login')}  className="py-1 poppins-regular px-4 text-sm md:text-base text-gray-100 bg-gray-800 hover:bg-gray-700 rounded-full">
              Sign In
            </button>
            <button onClick={()=> navitate('/register')}  className="py-1 poppins-regular px-4 text-sm md:text-base bg-gray-100 rounded-full border hover:bg-gray-200 hover:border-gray-300">
              Sign Up
            </button>
          </div>
           <div>
            <ul className="flex items-center gap-4">
              <li className="w-6 h-6 relative">
                <PiShoppingCartThin  className="w-full h-full"/>
                <div className="absolute w-4 aspect-square bg-gray-700 -top-1 -right-2 rounded-full text-white text-[10px]">
                  <p className="flex justify-center items-center w-full h-full object-cover">4</p>
                </div>
              </li>
              <li onClick={()=> dispatch(toggleProfileNotifications())} className="w-6 h-6 relative">
                <IoIosNotificationsOutline className="w-full h-full "/>
                <div className="absolute w-2 aspect-square bg-red-700 top-0 right-0 rounded-full"></div>
              </li>
              <li 
              onClick={() => {dispatch(toggleProfileMenu()) , userToggleNotification && dispatch(toggleProfileNotifications()) }} className="w-6 aspect-squar rounded-full overflow-hidden z-50">
                <img className="w-full h-full object-cover object-top"  src={avatar} alt="" />
              </li>
            </ul>
           </div>
        </div>

      </div>

      <div className={`absolute right-4 md:right-0 z-50 transition-all duration-300 ${userToggleProfile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <UserProfileMenu />
      </div>

      <div className={`absolute right-14 md:right-10 z-50 transition-all duration-300 ${userToggleNotification ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <UserNotification/>
      </div>

    </>
  );
};

export default Navbar;