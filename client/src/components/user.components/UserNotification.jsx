import React from 'react'
import avatar from '../../assets/fashion/banner-01-1.jpg'
const UserNotification = () => {
  return (
    <div className='sm:px-8 md:px-10 lg:px-20 xl:px-40 flex justify-end mt-1 '>
        <div className='px-8 rounded-sm border-[1px] border-gray-200 shadow-sm bg-white '>

            <div className='py-2 flex justify-center items-center poppins-medium text-sm border-b-[1px] '>
               Your Notifications
            </div>

            <div className='max-h-[500px] overflow-y-auto overflow-x-hidden '>

             <div className='flex gap-2 mt-4 w-80 border-b-[1px] pb-4'>
                <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer '>
                    <img className='w-full h-full object-cover' src={avatar} alt="" />
                </div>
                <div className='w-[80%] mb-2'>
                    <h2 className='poppins-medium text-sm'>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p className='poppins-light text-gray-600 text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta porro unde ipsa consectetur beatae nisi rem possimus aliquid voluptatibus hic!</p>
                </div>
             </div>

             <div className='flex gap-2 mt-4 w-80 border-b-[1px] pb-4'>
                <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer '>
                    <img className='w-full h-full object-cover' src={avatar} alt="" />
                </div>
                <div className='w-[80%] mb-2'>
                    <h2 className='poppins-medium text-sm'>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p className='poppins-light text-gray-600 text-[12px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta porro unde ipsa consectetur beatae nisi rem possimus aliquid voluptatibus hic!</p>
                </div>
             </div>

            </div>



        </div>
    </div>
  )
}

export default UserNotification