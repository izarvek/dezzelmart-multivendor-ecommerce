import React from 'react'
import avatar from '../../assets/fashion/banner-01-1.jpg'
import { PiUserSwitchLight } from "react-icons/pi";
import { RxExternalLink } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleProfileMenu } from '../../features/UserSlice'
const UserProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='sm:px-8 md:px-10 lg:px-20 xl:px-40 flex justify-end mt-1 '>
      <div className='px-8 rounded-sm border-[1px] border-gray-200 shadow-sm bg-white pt-4'>

       <div className='flex flex-col items-center  border-b-[1px]  border-gray-200 pb-4 '>
         
        <div 
          onClick={()=> {navigate('/user-account') , dispatch(toggleProfileMenu())}} 
          className='w-16 h-16 rounded-full overflow-hidden cursor-pointer'>
          <img  className='w-full h-full object-cover' src={avatar} alt="" />
        </div>

        <div className='text-center  mt-4'>
          <h2 className='poppins-regular'>Aadhi Sharma</h2>
          <p className='poppins-light text-gray-500 text-sm'>aadhisharma167@gmail.com</p>
        </div>

        <div className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900  hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 mt-4 py-2 px-10 rounded-full text-white poppins-semibold text-sm cursor-pointer'>
          <button className='flex gap-2'>
            <span className=''>Upgrade to</span>
            <span className='bg-white text-blue-800 px-2 rounded-md'>PRO</span>
          </button>
        </div>

       </div>

        <div className='mt-4 border-b-[1px] border-gray-200 pb-4 '>
           <p className='text-gray-500 text-sm'>Viewing as : Vendor</p>
           <div 
           onClick={()=> {navigate('/user-to-vendor') , dispatch(toggleProfileMenu())}}
           className='flex gap-1 mt-2 cursor-pointer items-center'>
             <PiUserSwitchLight className='w-5 h-5' />
             <p className=' poppins-medium text-sm '>Switch to Vendor</p>
           </div>
        </div>

        <div className='mt-4 border-b-[1px] border-gray-200 pb-4 '>
          <ul>
            <li onClick={()=> {navigate('/user-account') , dispatch(toggleProfileMenu())}} className='mt-2 poppins-medium text-sm cursor-pointer'>My Account</li>
            <li onClick={()=> {navigate('/user-wishlist') , dispatch(toggleProfileMenu())}} className='mt-2 poppins-medium text-sm cursor-pointer'>Wishlist</li>
            <li onClick={()=> {navigate('/user-orders') , dispatch(toggleProfileMenu())}} className='mt-2 poppins-medium text-sm cursor-pointer'>Orders</li>
            <li onClick={()=> {navigate('/user-activity') , dispatch(toggleProfileMenu())}} className='mt-2 poppins-medium text-sm cursor-pointer'>Activity</li>
            <li onClick={()=> {navigate('/user-settings') , dispatch(toggleProfileMenu())}} className='mt-2 poppins-medium text-sm cursor-pointer'>Settings</li>
          </ul>
        </div>

        <div className='mt-4 border-b-[1px] border-gray-200 pb-4 '>
           <div className='flex items-center justify-between '>
            <p onClick={()=> {navigate('/user-help') , dispatch(toggleProfileMenu())}} className='cursor-pointer  poppins-medium text-sm'>Help</p>
            <RxExternalLink  className='cursor-pointer w-5 h-5'/>
           </div>
        </div>

        <div className='mt-4  pb-4 '>
           <p onClick={()=> {navigate('/user-sign-out') , dispatch(toggleProfileMenu())}} className='cursor-pointer poppins-medium text-sm'>Sign Out</p>
        </div>


      </div>
    </div>
  )
}

export default UserProfileMenu