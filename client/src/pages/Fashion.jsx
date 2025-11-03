import React from 'react'
import HeroFashion from '../components/HeroFashion'
import Title from '../components/templates/Title'
import RecommendFeaturedFashion from '../components/RecommendFeaturedFashion'
import { recommendAssets, recommendEditorAssets } from '../assets/fashion/assetsFashion'
import RecommendEditorFashion from '../components/RecommendEditorFashion'
import CardsFashion from '../components/CardsFashion'
import Newsletter from '../components/common/Newsletter'

const Fashion = () => {
  return (
    <div  className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mb-20">

      <HeroFashion/>

      <Title title={'Featured Collection'} description={'Discover our carefully curated selected of must-have pieces of this season'}/>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          recommendAssets.map((product , i)=> (
            <div key={i} >
                <RecommendFeaturedFashion image={product.image} title={product.title} price={product.price} id={product._id} />
            </div>
          ))
        }
      </div>

      <div className='bg-[#fafafc] py-10 my-24'>
        <Title  title={"Editor's Picks"} description={'Our most loved pieces, choosen by our styling experts for their versatility and timeless appeal'} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          recommendEditorAssets.map((product , i)=> (
            <div key={i} >
                <RecommendEditorFashion image={product.image} title={product.title} description={product.description} price={product.price } id={product._id} />
            </div>
          ))
        }
      </div>
      </div>

      <CardsFashion/>
      <Newsletter/>
    </div>
  )
}

export default Fashion