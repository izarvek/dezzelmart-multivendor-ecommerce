import React from 'react'
import HeroAccessories from '../components/heros/HeroAccessories'
import CardsAccessory from '../components/cards/CardsAccessory'
import RecommendAccessory from '../components/recommends/RecommendAccessory'
import Newsletter from '../components/common/Newsletter'

const Assessories = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mb-20'>
        <HeroAccessories/>
        <CardsAccessory/>
        <RecommendAccessory/>
        <Newsletter/>
    </div>
  )
}

export default Assessories