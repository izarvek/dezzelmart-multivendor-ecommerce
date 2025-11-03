import React from 'react'
import { RiNotification2Line } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaUser  } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import avatar from '../../assets/fashion/banner-01-1.jpg'
const UserAccount = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 flex gap-2 md:gap-4'>

      <div className='border-[1px] rounded-md p-1 md:p-4 shadow-sm w-[10%] md:w-[20%]'>

        <div className='flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md'>
          <FaUser />
          <p className='hidden md:block'>My Profile</p>
        </div>

        <div className='flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md'>
          <BsChatDots />
          <p className='hidden md:block'>Chat</p>
        </div>

        <div className='flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md'>
          <RiNotification2Line />
          <p className='hidden md:block'>Notifications</p>
        </div>

        <div className='flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md'>
          <IoLockClosedOutline />
          <div className='hidden md:block'>Security<span className='ml-1 hidden xl:inline-block'>Options</span></div>
        </div>

        <div className='flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md'>
         <IoSettingsOutline />
          <p className='hidden md:block'>Preferences</p>
        </div>

      </div>

      <div className='border-[1px] rounded-md p-4 shadow-sm w-[80%]'>

        <div className='flex justify-between items-center mt-2 pb-6 border-b-[1px] border-gray-200'>

           <div className='flex items-center gap-4'>

           <div className='w-16 h-16 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src={avatar} alt="" />
           </div>

            <div className='leading-5'>
              <h2 className='poppins-medium'>Aadhi Sharma</h2>
              <p className='poppins-regular text-sm text-gray-500'>@aadhimark</p>
            </div>

           </div>

            <div>
              <button className='flex gap-2 items-center bg-blue-500 text-white rounded-full py-2 px-4 '>
                <CiEdit className='w-5 h-5'/>
                <p className='text-sm poppins-regular'>Edit</p>
              </button>
            </div>

        </div>

        <div className='mt-6 pb-6 border-b-[1px]'>
          <h2 className='poppins-medium text-lg'>Personal Detail</h2>
          <div className='grid grid-cols-2 mt-2 gap-2'>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="fname">First Name</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='fname' placeholder='Enter First Name' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="lname">Last Name</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='lname' placeholder='Enter Last Name' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="email">Email Address</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="email" id='email' placeholder='Enter Email Address' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="phone">Phone Number</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="number" id='phone' placeholder='Enter Phone Number' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="gender">Gender</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='gender' placeholder='Enter Your Gender' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="dob">DOB</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='dob' placeholder='Enter Your DOB' />
            </div>

          </div>
        </div>

        <div className='mt-6'>
          <h2 className='poppins-medium text-lg'>Address</h2>
          <div className='grid grid-cols-2 mt-2 gap-2'>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="country">Country</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='country' placeholder='Enter Country Name' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="area">City/State</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='area' placeholder='Enter City or State' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="postal">Postal/Pin Code</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="number" id='postal' placeholder='Enter Postal or Pin Code' />
            </div>

            <div className='flex flex-col'>
              <label className='poppins-regular text-sm' htmlFor="address">Current Address</label>
              <input 
              className='border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light'
              type="text" id='address' placeholder='Enter Current Address' />
            </div>

          </div>
        </div>
    

      </div>

    </div>
  )
}

export default UserAccount