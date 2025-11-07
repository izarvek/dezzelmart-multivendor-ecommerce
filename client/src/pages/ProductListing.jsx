import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import avatar from "../assets/fashion/banner-01-1.jpg";
import {
  recommendAssets,
  recommendEditorAssets,
  fashionTrendyAssets,
} from "../assets/fashion/assetsFashion";
import { menuAccessoriesAssets } from "../assets//accessories/assetsAccessories";
import {
  electronicProducts,
  recomendedProducts,
} from "../assets/electronics/assetsElectronics";
import { groceryProductAssets } from "../assets/groceries/assetsGrocery";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const navigate = useNavigate();
  const searchedViaSearchBar = useSelector(
    (state) => state.product.searchedViaSearchBar
  );
  const [barValue, setBarValue] = useState(0);
  const [discountFilter, setDiscountFilter] = useState(0);
  const [selectedFashionTypes, setSelectedFashionTypes] = useState([]);
  const allAssets = [
    // fashionAssets,
    ...(recommendAssets || []),
    ...(recommendEditorAssets || []),
    ...(fashionTrendyAssets || []),
    // Accerrosories
    ...(menuAccessoriesAssets || []),
    // electronicProducts,
    ...(recomendedProducts || []),
    ...(electronicProducts || []),
    // groceries
    ...(groceryProductAssets || []),
  ];

  const filteredAssets = allAssets.filter((item) => {
    const matchesSearch = searchedViaSearchBar
      ? item.title
          ?.toLowerCase()
          .includes(searchedViaSearchBar.toLowerCase()) ||
        item.brand
          ?.toLowerCase()
          .includes(searchedViaSearchBar.toLowerCase()) ||
        item.category
          ?.toLowerCase()
          .includes(searchedViaSearchBar.toLowerCase()) ||
        item.subCategory
          ?.toLowerCase()
          .includes(searchedViaSearchBar.toLowerCase())
      : true;
    const matchesDiscount = discountFilter
      ? item.discount >= discountFilter
      : true;
    const matchesPrice = barValue ? item.price >= barValue : true;

    const matchesFashionType =
    selectedFashionTypes.length > 0
      ? selectedFashionTypes.includes(item?.category)
      : true;

    return matchesSearch && matchesDiscount && matchesPrice && matchesFashionType;
  });
  
  const handleFashionTypeChange = (event) => {
  const { value, checked } = event.target;
  setSelectedFashionTypes((prev) => {
    if (checked) {
      return [...prev, value];
    } else {
      return prev.filter((type) => type !== value);
    }
  });
 };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

  const paginatedAssets = filteredAssets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-5">
      <div className="flex gap-4">
        <div className="w-[35%] md:w-[30%] lg:w-[25%] xl:w-[20%] border-[1px] p-2 md:p-4 rounded-lg">
          <div>
            <h2 className="poppins-medium mb-2">Brands</h2>
            <div className="flex gap-2  mt-1">
              <input
                type="checkbox"
                id="lv"
                name="brand"
                value="Louis Vuitton"
              />
              <label className="poppins-light text-sm" htmlFor="lv">
                Louis Vuitton
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input type="checkbox" id="gucci" name="brand" value="Gucci" />
              <label className="poppins-light text-sm" htmlFor="gucci">
                Gucci
              </label>
            </div>
            <div className="flex gap-2  mt-1">
              <input type="checkbox" id="prada" name="brand" value="Prada" />
              <label className="poppins-light text-sm" htmlFor="prada">
                Prada
              </label>
            </div>
            <div className="flex gap-2  mt-1">
              <input
                type="checkbox"
                id="burberry"
                name="brand"
                value="Burberry"
              />
              <label className="poppins-light text-sm" htmlFor="burberry">
                Burberry
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input type="checkbox" id="hm" name="brand" value="H&M" />
              <label className="poppins-light text-sm" htmlFor="hm">
                H&M
              </label>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="poppins-medium mb-2">Discount</h2>
            <ul>
              <li
                onClick={() => setDiscountFilter(10)}
                className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
              >
                10% Off or more
              </li>
              <li
                onClick={() => setDiscountFilter(20)}
                className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
              >
                20% Off or more
              </li>
              <li
                onClick={() => setDiscountFilter(30)}
                className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
              >
                30% Off or more
              </li>
              <li
                onClick={() => setDiscountFilter(40)}
                className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
              >
                40% Off or more
              </li>
              <li
                onClick={() => setDiscountFilter(50)}
                className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
              >
                50% Off or more
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="poppins-medium mb-2">Categories</h2>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="fashion"
                name="category"
                value="Fashion"
              />
              <label htmlFor="fashion" className="font-poppins-light text-sm">
                Fashion
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="grocery"
                name="category"
                value="Grocery"
              />
              <label htmlFor="grocery" className="font-poppins-light text-sm">
                Grocery
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="accessories"
                name="category"
                value="Accessories"
              />
              <label
                htmlFor="accessories"
                className="font-poppins-light text-sm"
              >
                Accessories
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="electronics"
                name="category"
                value="Electronics"
              />
              <label
                htmlFor="electronics"
                className="font-poppins-light text-sm"
              >
                Electronics
              </label>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="poppins-medium mb-2">Price Range</h2>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                className="w-full"
                value={barValue}
                onChange={(e) => setBarValue(parseInt(e.target.value))}
              />
            </div>
            <div className="mt-2 text-sm flex justify-between poppins-semibold">
              <span>$0</span>
              <span>${barValue}</span>
              <span>$1000</span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="poppins-medium mb-2">Fashion Type</h2>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="man"
                name="fashionType"
                value="Man"
                onChange={handleFashionTypeChange}
                checked={selectedFashionTypes.includes("Man")}
              />
              <label className="poppins-light text-sm" htmlFor="man">
                Man
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="women"
                name="fashionType"
                value="Women"
                onChange={handleFashionTypeChange}
                checked={selectedFashionTypes.includes("Women")}
              />
              <label className="poppins-light text-sm" htmlFor="women">
                Women
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="boy"
                name="fashionType"
                value="Boy"
                onChange={handleFashionTypeChange}
                checked={selectedFashionTypes.includes("Boy")}
              />
              <label className="poppins-light text-sm" htmlFor="boy">
                Boy
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="girl"
                name="fashionType"
                value="Girl"
                onChange={handleFashionTypeChange}
                checked={selectedFashionTypes.includes("Girl")}
              />
              <label className="poppins-light text-sm" htmlFor="girl">
                Girl
              </label>
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="checkbox"
                id="kids"
                name="fashionType"
                value="Kids"
                onChange={handleFashionTypeChange}
                checked={selectedFashionTypes.includes("Kids")}
              />
              <label className="poppins-light text-sm" htmlFor="kids">
                Kids
              </label>
            </div>
          </div>
        </div>
        <div className="w-[65%] md:w-[70%] lg:w-[75%] xl:w-[80%] border-[1px] p-2 md:p-4 rounded-lg">

          <div className="flex justify-end mb-4">
            <select className="border-[1px] rounded-sm px-1 border-gray-600 outline-none">
              <option>Sort By : </option>
              <option>Popularity</option>
              <option>Price - Low to High</option>
              <option>Prive - High to Low</option>
              <option>Newest Fist</option>
            </select>
          </div>
          
          {paginatedAssets.length === 0 ? (
            <div className="flex flex-col  justify-center items-center h-full"> 
              <h1 class="text-3xl md:text-5xl font-bold text-gray-700">
              404 Not Found
             </h1>
            <div class="h-px w-64 md:w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
             <p class="md:text-xl text-gray-400 max-w-lg text-center">
             The page you are looking for does not exist or has been moved.
            </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedAssets.map((item, i) => {
              return (
                <div
                  key={i}
                  className="border-[1px] border-gray-200 p-2 rounded-lg bg-white"
                >
                  <div 
                  onClick={() => navigate(`/product/${item.urlSlug}`)}
                  className="rounded-lg overflow-hidden ">
                    <img
                      className="w-full h-full object-cover object-top hover:brightness-105 transition-all duration-500 ease-in-out"
                      src={item?.image[0]}
                      alt=""
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="outfit-semibold text-sm">{item?.brand}</h2>
                    <p className="text-lg md:text-xl outfit-regular mt-1">
                      {item?.title}
                    </p>
                    <div>
                      {item?.sale && (
                        <p className="text-[12px] md:text-sm mt-1 outfit-medium bg-red-600 text-white w-[45%] md:w-[48%] flex justify-center rounded-sm">
                          Limited time deal
                        </p>
                      )}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1 border-b pb-2 border-gray-300">
                      <span className="text-2xl outfit-semibold">
                        ${(item?.price * (1 - item.discount / 100)).toFixed(1)}
                      </span>
                      <span className="line-through text-gray-500 outfit-medium">
                        ${item?.price}
                      </span>
                      <span className="outfit-regular outfit-medium">
                        ( {item?.discount}% Off )
                      </span>
                    </div>
                    <div className="mt-1 flex gap-1 items-center cursor-pointer text-blue-600 outfit-medium">
                      <p className=" text-sm  ">Add to Cart</p>
                      <RiShoppingCartLine />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}

        </div>
      </div>
      <div className="mt-10 md:ml-60">
        <div className="flex items-center gap-8 justify-center">
          <div
            className={`border-[1px] p-2 rounded-full cursor-pointer ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevPage}
          >
            <FaAngleLeft className="w-5 h-5" />
          </div>

          <div>
            <p className="select-none text-lg text-gray-600 outfit-regular">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <div
            className={`border-[1px] p-2 rounded-full cursor-pointer ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextPage}
          >
            <FaAngleRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
