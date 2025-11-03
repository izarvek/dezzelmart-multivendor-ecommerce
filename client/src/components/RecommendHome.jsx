import React from 'react'
import { Link } from "react-router-dom";
import { recoHomeAssets } from '../assets/visitor/assetsVisitor'

const RecommendHome = () => {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
      {recoHomeAssets.map((cartitems, index) => (
        <div key={index} className="bg-white p-4 border-2 border-gray-200 ">
          <h1 className="text-xl mb-4 poppins-semibold">
            {cartitems.categoryTitle}
          </h1>

          <div className="grid grid-cols-2 gap-4">
            {cartitems.products.map((productsItem, Id) => (
              <div key={Id}>
                <div className="aspect-[5/4]">
                  <img
                    className="w-full h-full object-cover"
                    src={productsItem.image}
                    alt=""
                  />
                </div>
                <p className="text-sm poppins-light mt-2">
                  {productsItem.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link className="hover:underline hover:text-indigo-600" to={`/${cartitems.navigation }`}>{cartitems.linktext}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendHome