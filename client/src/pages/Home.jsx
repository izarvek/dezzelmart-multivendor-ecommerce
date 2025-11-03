import React from 'react'
import HeroHome from '../components/HeroHome'
import RecommendHome from '../components/RecommendHome'


const Home = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10'>

      <HeroHome/>
      <RecommendHome/>
    </div>
  )
}

export default Home