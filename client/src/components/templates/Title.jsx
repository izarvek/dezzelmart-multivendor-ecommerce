import React from 'react'

const Title = ({title , description}) => {
  return (
    <div className='my-10'>
        <div className='flex items-center flex-col w-full'>
            <h1 className='text-4xl font-bold text-gray-800'>{title}</h1>
            <p className=' mt-3 text-gray-400 px-4 md:px-0 text-sm sm:text-md md:text-lg poppins-regular'>{description}</p>
        </div>
    </div>
  )
}

export default Title