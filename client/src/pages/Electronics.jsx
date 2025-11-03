import React from 'react'
import HeroElectronic from '../components/HeroElectronic'
import CardsElectronics from '../components/CardsElectronics'
import RecommendElectronic from '../components/RecommendElectronic'
import BannerElectronic from '../components/BannerElectronic'
import Title from '../components/templates/Title'

const Electronics = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mb-20'>
        <HeroElectronic/>
        <RecommendElectronic/>
        <BannerElectronic/>
        <Title title={'All Electronics Products'} description={'Find your desigred product listed below'}/>
        <CardsElectronics/>
    </div>
  )
}

export default Electronics