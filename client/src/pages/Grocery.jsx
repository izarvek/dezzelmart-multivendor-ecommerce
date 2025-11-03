import React from 'react'
import HeroGrocery from '../components/HeroGrocery'
import MenuGrocery from '../components/MenuGrocery'
import CardsGrocery from '../components/CardsGrocery'

const Grocery = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mb-20'>
        <HeroGrocery/>
        <MenuGrocery/>
        <CardsGrocery/>
    </div>
  )
}

export default Grocery