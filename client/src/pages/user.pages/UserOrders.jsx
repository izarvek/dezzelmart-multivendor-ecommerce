import React from 'react'
import avatar from '../../assets/fashion/banner-01-1.jpg'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { toggleViewOrder } from '../../features/UserSlice';
import { useSelector , useDispatch } from 'react-redux';
const Orders = () => {
  const dispatch = useDispatch();
  const userToggleViewOrder = useSelector((state) => state.user.viewOrderOpen);
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10'>

      <div className='leading-3'>
        <h1 className='text-3xl font-semibold my-4'>Order History</h1>
        <p>Check the status of recent and old orders.</p>
      </div>

      <div>
        <div className='mt-10 p-6 bg-gray-50 rounded-lg'>

        <div className='flex justify-between border-b-[1px] pb-2 border-gray-300'>
          <div className='flex gap-4'>
            <div className='hidden gap-2 items-center lg:flex '>
              <p className='poppins-light text-sm'>Order ID : </p>
              <p className='poppins-medium text-base'>DGD3L5K63H</p>
            </div>
            <div className='flex gap-2 items-center'>
              <p className='poppins-light text-[12px] md:text-sm'>Order Date : </p>
              <p className='poppins-medium text-sm md:text-base'>09/10/23</p>
            </div>
            <div className='flex gap-2 items-center'>
              <p className='poppins-light text-[12px] md:text-sm'>Order Status : </p>
              <p className='poppins-medium text-sm md:text-base'>Order received</p>
            </div>
          </div>
          <div className='border-[2px] py-1 px-2 border-blue-500 rounded-lg md:block hidden'>
            <button className='poppins-semibold text-sm text-blue-700 '>View Invoice</button>
          </div>
        </div>

        <div className='mt-4 flex flex-col lg:flex-row justify-between'>

          <div className='flex gap-4'>
            <div className='w-20 h-20 overflow-hidden rounded-lg'>
               <img className='w-full h-full object-cover object-top hover:brightness-105 transition-all duration-300 ease-in-out' src={avatar} alt="" />
            </div>
            <div>
               <h2 className='poppins-medium text-md'>Men Riding Jocket</h2>
               <p className='poppins-light text-sm'>Color may vary</p>
               <p className='poppins-semibold mt-2'>$43</p>
            </div>
          </div>

          <div className='flex gap-20 lg:mt-0 mt-4'>
            <div>
              <h2 className='poppins-light text-sm'>Delivery Date</h2>
              <p className='poppins-semibold text-sm mt-1'>09/10/24</p>
            </div>
            <div>
              <h2 className='poppins-light text-sm'>Return Date</h2>
              <p className='poppins-semibold text-sm mt-1'>09/10/24</p>
            </div>
          </div>

          <div onClick={()=> dispatch(toggleViewOrder())} className='lg:mt-0 mt-4 bg-blue-700 hover:bg-blue-500 px-10 h-8 flex justify-center items-center rounded-lg text-white'>
            <button className='poppins-regular text-sm'>View Order</button>
          </div>

        </div>

        </div>

        <div className={` mt-4 border-[1px] w-full border-gray-200 p-6 rounded-lg relative ${userToggleViewOrder ? "block" : "hidden"}`}>
         <h2 className='poppins-medium text-2xl pb-4'>Track Your Order</h2>
         <div>

          <div className='flex items-center gap-4 mt-4'>
            <div className='w-4 h-4 rounded-full'>
              <IoIosCheckmarkCircle className='w-full h-full object-cover text-lime-500 bg-white-400 rounded-full' />
            </div>
            <div className='flex gap-2'>
              <p className='poppins-medium'>Confirmed</p>
              <p>26 February 2024</p>
            </div>
          </div>

          <div className='flex items-center gap-4 mt-4'>
            <div className='w-4 h-4 rounded-full'>
              <IoIosCheckmarkCircle className='w-full h-full object-cover text-lime-500  rounded-full' />
            </div>
            <div className='flex gap-2'>
              <p className='poppins-medium'>Packed</p>
              <p>27 February 2024</p>
            </div>
          </div>

          <div className='flex items-center gap-4 mt-4'>
            <div className='w-4 h-4  rounded-full'>
              <IoIosCheckmarkCircle className='w-full h-full object-cover text-lime-500  rounded-full' />
            </div>
            <div className='flex gap-2'>
              <p className='poppins-medium'>Shipped</p>
              <p>27 February 2024</p>
            </div>
          </div>

          <div className='flex items-center gap-4 mt-4'>
            <div className='w-4 h-4  rounded-full'>
              <IoIosCheckmarkCircle className='w-full h-full object-cover text-lime-500 rounded-full' />
            </div>
            <div className='flex gap-2'>
              <p className='poppins-medium'>Out for Delivery</p>
              <p>28 February 2024 <span className=''>( Early 12PM )</span></p>
            </div>
          </div>

          <div className='flex items-center gap-4 mt-4'>
            <div className='w-4 h-4  rounded-full'>
              <IoIosCheckmarkCircle className='w-full h-full object-cover text-lime-500 rounded-full' />
           </div>
            <div className='flex gap-2'>
              <p className='poppins-medium'>Delivered</p>
              <p>28 February 2024 (Product Received)</p>
            </div>
          </div>

         </div>
         <div className='absolute top-[6.5rem] left-[1.75rem] -z-20 bg-lime-500 w-2 h-40 rounded-lg'>
         </div>

         <div className='mt-6 flex gap-2 md:gap-6 md:flex-row flex-col'>
          <button className=' border-[1px] md:border-[2px] py-2 px-6 rounded-lg md:text-base text-sm poppins-regular md:poppins-semibold border-red-600 text-red-600'>Request Order Cancellation</button>
          <button className=' border-[1px] md:border-[2px] py-2 px-6 rounded-lg md:text-base text-sm poppins-regular md:poppins-semibold border-blue-600 text-blue-600'>Request Order Modification</button>
         </div>
        </div>
      </div>


    </div>
  )
}

export default Orders