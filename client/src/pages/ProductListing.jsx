// import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {scrollToTop} from '../components/templates/scrollToTop.js'
import CardsProductListing from "../components/cards/CardsProductListing";
import SidebarProductListing from "../components/sidebar/sidebarProductListing.jsx";
import { setSortViaOption } from "../features/ProductSlice.js"
import { useSelector , useDispatch } from "react-redux";
import { useState } from "react";

const ProductListing = () => {
  const dispatch = useDispatch();
  const sortViaOption = useSelector((state) => state.product.sortViaOption)
  const filteredAssets = useSelector((state) => state.product.filteredAssets)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15 ;
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
          <SidebarProductListing/>
        </div>

        <div className="w-[65%] md:w-[70%] lg:w-[75%] xl:w-[80%] border-[1px] p-2 md:p-4 rounded-lg">
          <div className="flex justify-end mb-4">
            <select
              className="border-[1px] rounded-sm px-2 py-1 border-gray-600 outline-none text-sm font-poppins"
              value={sortViaOption}
              onChange={(e) => dispatch(setSortViaOption(e.target.value))}
            >
              <option
                value="default"
                disabled
                className="poppins-regular text-sm"
              >
                Sort By :
              </option>
              <option value="low-to-high" className="poppins-regular text-sm">
                Price - Low to High
              </option>
              <option value="high-to-low" className="poppins-regular text-sm">
                Price - High to Low
              </option>
            </select>
          </div>

          <CardsProductListing  paginatedAssets={paginatedAssets}/>
        </div>
      </div>

      <div className="mt-10 md:ml-60">
        <div className="flex items-center gap-8 justify-center">
          <div
            className={`border-[1px] p-2 rounded-full  ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              handlePrevPage();
              scrollToTop(300);
            }}
          >
            <FaAngleLeft className="w-5 h-5" />
          </div>

          <div>
            <p className="select-none text-lg text-gray-600 outfit-regular">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <div
            className={`border-[1px] p-2 rounded-full  ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              handleNextPage();
              scrollToTop(300); 
            }}
          >
            <FaAngleRight className="w-5 h-5" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductListing;