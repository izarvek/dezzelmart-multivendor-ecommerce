import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Rating from '../components/templates/Rating.jsx'
import Page404 from './Page404'
import { useParams } from "react-router-dom";
import RecommendProductDetail from "../components/recommends/RecommendProductDetail.jsx";
import { allAssets } from "../components/templates/allAssets.js";

const ProductDetail = () => {

  const { urlSlug } = useParams();
  const product = allAssets.find((product) => product.urlSlug === urlSlug);
  const suggestionProduct = allAssets.filter((items)=> (items.subCategory === product.subCategory || items.category === product.category) && items.urlSlug !== product.urlSlug)

  if (!product) {
    return <Page404 />;
  }

  const banner = product.image[0];
  const [mainImage, setMainImage] = useState(banner);
    useEffect(() => {
    if (banner) {
      setMainImage(banner);
    }
   }, [product]);
   
  return (

    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">
        <div className="flex gap-3 w-full flex-col-reverse md:flex-row md:w-2/5">
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {product.image.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 border w-20 border-gray-500/30 rounded overflow-hidden cursor-pointer aspect-16/9"
              >
                <img
                  onClick={() => setMainImage(item)}
                  src={item}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="border border-gray-500/30 flex-grow aspect-[5/6] max-h-[25rem] md:max-h-full rounded overflow-hidden">
            <img
              src={mainImage}
              alt="Selected product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="border-b-[1px] border-gray-200 pb-2 xl:pb-6">
            <h2 className="text-2xl md:text-xl xl:text-2xl outfit-regular">{product?.title}</h2>
            <div className="flex gap-2 py-2 md:py-1 bg-white">
              <Rating rating={product?.rating} />
              <p className="outfit-regular">( {product?.rating} )</p>
              {product.reviewCount && <p className="outfit-regular">Reviews : {product.reviewCount}</p>}
            </div>
            <div className="flex items-center text-green-800 gap-2">
              <FaCheckCircle />
              <p>Available in Stock</p>
            </div>
            <div className="outfit-regular mt-2">
              {product.sku && <span>ID : {product.sku} </span>}
            </div>
          </div>

          <div className="border-b-[1px] border-gray-200 mt-4 pb-4 xl:pb-6">
            <div className="flex gap-2 items-baseline">
              <p className="text-red-600 outfit-semibold text-3xl">${(product.price * (1 - product.discount/100)).toFixed(2)}</p>
              <p className="line-through text-xl outfit-semibold text-gray-400">
                ${product.price}
              </p>
            </div>
            <div className="mt-3 outfit-light text-gray-500">
              <div className="flex gap-1">This product have <p className="bg-red-600 text-white px-2 rounded-lg poppins-semibold">{product.discount}%</p> Discount .</div>
              <p>{product?.description}</p>
              {product.brand && <div className="flex gap-1">Brand : <p className=" px-2 outfit-medium text-red-600">{product.brand}</p></div>}
            </div>
          </div>

          <div className="flex gap-4 mt-2  xl:mt-4 items-center">
            {product.sizes && <p className="outfit-medium text-lg">Size :</p>}
            <ul className="flex gap-2">
              { product.sizes && product?.sizes?.map((size, i) => (
               <li key={i} className="text-sm md:text-base border border-gray-500 px-3 py-1 flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors rounded-lg">
                {size}
              </li>
              ))}
            </ul>
          </div>
          <div className=" mt-4 md:mt-2 xl:mt-6 flex flex-wrap justify-start gap-4 sm:gap-6 items-center">
            <button className="bg-[#496e51] text-sm hover:bg-[#6c9574] transition-colors duration-200 text-white poppins outfit-regular py-2 px-6 rounded flex-shrink-0">
              Add to Cart
            </button>
            <button className="bg-[#496e51] text-sm hover:bg-[#6c9574] transition-colors duration-200 text-white poppins outfit-regular py-2 px-6 rounded flex-shrink-0">
              Buy Now
            </button>
            <div className="flex gap-4 md:hidden ">
              <button className="border border-gray-400 hover:border-green-500 transition-colors px-4 py-2 outfit-medium rounded text-sm text-gray-700">
                Add to WishList
              </button>
              <button className="border border-gray-400 hover:border-green-500 transition-colors px-4 py-2 outfit-medium rounded text-sm text-gray-700">
                Add to Compare
              </button>
            </div>
          </div>
        </div>
      </div>
       <RecommendProductDetail suggestionProduct={suggestionProduct}  />
    </div>
  );
};

export default ProductDetail;