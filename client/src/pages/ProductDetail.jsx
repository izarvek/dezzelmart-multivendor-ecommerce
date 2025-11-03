import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Rating from '../components/templates/Rating.jsx'
import Page404 from './Page404'
import { useParams } from "react-router-dom";
import { fashionTrendyAssets } from "../assets/fashion/assetsFashion";
import { menuAccessoriesAssets } from "../assets//accessories/assetsAccessories";
import { electronicProducts } from "../assets/electronics/assetsElectronics";
import { recomendedProducts } from "../assets/electronics/assetsElectronics";
import { groceryProductAssets } from "../assets/groceries/assetsGrocery";

// fashionTrendyAssets menuAccessoriesAssets electronicProducts recomendedProducts groceryProductAssets
const ProductDetail = () => {
  const { id } = useParams();

  const allAssets = [
    ...(fashionTrendyAssets || []),
    ...(menuAccessoriesAssets || []),
    ...(electronicProducts || []),
    ...(recomendedProducts || []),
    ...(groceryProductAssets || []),
  ];
  const product = allAssets.find((product) => product._id === id);

  if (!product) {
    return <Page404 />;
  }

  const banner = product.image[0];
  const [mainImage, setMainImage] = useState(banner);

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
              className="w-full h-full object-contain" // object-contain for better image display
            />
          </div>

        </div>

        <div className="w-full md:w-3/5">
          <div className="border-b-[1px] border-gray-200 pb-6">
            <h2 className="text-2xl outfit-regular">{product?.title}</h2>
            <div className="flex gap-2 py-1 md:py-2 bg-white">
              <Rating rating={product?.rating} />
              <p className="">( {product?.rating} )</p>
            </div>
            <div className="flex items-center text-green-800 gap-2">
              <FaCheckCircle />
              <p>Available in Stock</p>
            </div>
            <div className="outfit-regular mt-2">
              <span>P_ID : </span>
              <span>454323</span>
            </div>
          </div>

          <div className="border-b-[1px] border-gray-200 mt-4 pb-6">
            <div className="flex gap-2 items-baseline">
              <p className="text-red-600 outfit-semibold text-3xl">${product?.discount}</p>
              <p className="line-through text-xl outfit-semibold text-gray-400">
                ${product.price}
              </p>
            </div>
            <p className="mt-3 outfit-regular">
              Lorem ipsum fdfsdfsdfsdfdsf sdfsdfsdfd sdfsdfsdf sdfsdfds dolor
              sit amet consectetur adipisicing elit. Fuga sed voluptas provident
              veniam commodi tenetur a odio maiores laudantium perspiciatis.
            </p>
          </div>

          <div className="flex gap-4 mt-4 items-center">
            <p className="poppins-regular">Size :</p>
            <ul className="flex gap-2">
              {/* Size options list styling remains simple */}
              <li className="border border-gray-500 px-3 py-1 flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors">
                S
              </li>
              <li className="border border-gray-500 px-3 py-1 flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors">
                M
              </li>
              <li className="border border-gray-500 px-3 py-1 flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors">
                L
              </li>
              <li className="border border-gray-500 px-3 py-1 flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors">
                XL
              </li>
            </ul>
          </div>
          {/* Button Fixes: Made the container responsive with flex-wrap and improved button styling/paddings. */}
          <div className="mt-6 flex flex-wrap justify-start gap-4 sm:gap-6 items-center">
            {/* Primary Action Buttons */}
            <button className="bg-[#496e51] hover:bg-[#6c9574] transition-colors duration-200 text-white poppins outfit-regular py-2 px-6 rounded flex-shrink-0">
              Add to Cart
            </button>
            <button className="bg-[#496e51] hover:bg-[#6c9574] transition-colors duration-200 text-white poppins outfit-regular py-2 px-6 rounded flex-shrink-0">
              Buy Now
            </button>

            {/* Secondary Action Buttons */}
            <div className="flex gap-4">
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
    </div>
  );
};

export default ProductDetail;