import React from 'react'
import HeroBlogs from '../components/heros/HeroBlogs'
import CardsBlogs from '../components/cards/CardsBlogs'

const Blogs = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10'>
      <HeroBlogs/>
      <CardsBlogs/>
    </div>
  )
}

export default Blogs