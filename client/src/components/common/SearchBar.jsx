import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { searchSuggestions } from "../../assets/visitor/assetsVisitor.js";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { SlCloudUpload } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedViaSearchBar } from "../../features/ProductSlice.js";

const SearchBar = () => {
  const inputRef = useRef(null);
  const requestId = uuidv4();
  const [active, setActive] = useState("Fashion");
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [visible , setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    // Construct query parameters
    const params = new URLSearchParams();
    params.append('q', search); 
    params.append('as', 'on'); 
    params.append('as-show', 'on'); 
    params.append('requestId', requestId);
    navigate(`/search?${params.toString()}`);
    dispatch(setSearchedViaSearchBar(search));
    setSearch("");
    setFilteredSuggestions([]);
    setFocused(false);
    inputRef.current.blur();
  }
};

  useEffect(() => {
    if (search.trim().length > 0) {
      const results = searchSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSuggestions(results);
    } else {
      setFilteredSuggestions([]);
    }
  }, [search]);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setFilteredSuggestions([]); // Clear suggestions
    setFocused(false); // Hide the box
    inputRef.current.blur(); // Remove focus from input
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 150);
  };

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 my-4 relative">
      {/* --- Search Bar --- */}
      <div className="flex justify-between ">
         {/* Filter Section (Left) */}
        <div className="flex items-center gap-2 sm:rounded-full py-1 px-5 mr-2 sm:border-[1px] sm:border-gray-200">
          <GiSettingsKnobs className="rotate-90 cursor-pointer" />
          <button  className="poppins-regular hidden sm:block text-sm cursor-pointer text-gray-700 hover:text-gray-900">
            Filter
          </button>
        </div>
        {/* Search and Category Section (Center) */}
        <div
          onClick={handleDivClick}
          className={`flex justify-between w-[84%] cursor-pointer py-1 px-4 ${focused && filteredSuggestions.length > 0 ? " border bg-white rounded-t-lg" : "bg-gray-50 rounded-full  border-[1px] border-gray-200 " } `}
        >
          <div className="flex items-center gap-1 w-full">
            <CiSearch className="text-lg opacity-70" />
            <input
              ref={inputRef}
              className="outline-none bg-transparent text-black w-full"
              type="text"
              placeholder="Search Dezzelmart.in"
              value={search} // Controlled component: bound to 'search' state
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={handleInputBlur} // Use the debounced blur handler
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="flex items-center gap-3 ml-20">
            <div>
              <ul className="flex items-center gap-3 text-sm">
                <li
                  onClick={() => {setActive("Fashion") ,navigate('/fashion')}}
                  className={`hidden md:block ${
                    active == "Fashion"
                      ? "bg-white border-gray-200 text-gray-900"
                      : "border-gray-50 text-gray-700"
                  } hover:bg-white hover:border-gray-200  border-[1px] text-black  py-1 px-2 rounded-full`}
                >
                  Fashion
                </li>
                <li
                  onClick={() => {setActive("Grocery") , navigate('/grocery')}}
                  className={`hidden md:block ${
                    active == "Grocery"
                      ? "bg-white border-gray-200 text-gray-900"
                      : "border-gray-50 text-gray-700"
                  } hover:bg-white hover:border-gray-200   border-[1px] text-black  py-1 px-2 rounded-full`}
                >
                  Grocery
                </li>
                <li
                  onClick={() => {setActive("Accessories") , navigate('/accessories')}}
                  className={`hidden lg:block ${
                    active == "Accessories"
                      ? "bg-white border-gray-200 text-gray-900"
                      : "border-gray-50 text-gray-700"
                  } hover:bg-white hover:border-gray-200   border-[1px] text-black  py-1 px-2 rounded-full`}
                >
                  Accessories
                </li>
                <li
                  onClick={() => {setActive("Electronics") , navigate('/electronics')}}
                  className={`hidden lg:block ${
                    active == "Electronics"
                      ? "bg-white border-gray-200 text-gray-900"
                      : "border-gray-50 text-gray-700"
                  } hover:bg-white hover:border-gray-200  border-[1px] text-black  py-1 px-2 rounded-full`}
                >
                  Electronics
                </li>
                <li onClick={() => setVisible(!visible)} className="hidden md:block lg:hidden py-1 px-2 rounded-full ">
                  More
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-300 pl-3 ">
              <SlCloudUpload className="hidden lg:block w-5 h-5  text-gray-700 hover:text-gray-900" />
              <IoIosArrowDown onClick={() => setVisible(!visible)} className="lg:hidden w-5 h-5  text-gray-700 hover:text-gray-900" />
            </div>
          </div>
        </div>
       {/* Recommendation Section (Right) */}
        <div className="flex items-center gap-2 poppins-regular ml-2  rounded-full">
          <IoFilterOutline className="hidden sm:block cursor-pointer w-5 h-5  text-gray-700 hover:text-gray-900" />
          <p className="hidden lg:block text-sm cursor-pointer text-gray-700 hover:text-gray-900">Recommended</p>
        </div>
      </div>
      {/* --- Pages Links --- */}
       <div className={`bg-white mt-1 z-40 absolute right-[4.5rem] sm:right-[7rem] md:right-[7.5rem] lg:hidden ${visible ? "flex" : "hidden"}`}>
         <ul className="border-[1px] border-gray-200 p-4 flex flex-col justify-end">
          <li onClick={() => {navigate('/explore') , setVisible(false)}} className="text-sm mb-1 md:hidden cursor-pointer border-b border-white hover:border-gray-500">Explore</li>
          <li onClick={() => {navigate('/blogs') , setVisible(false)}} className="text-sm mb-1 md:hidden cursor-pointer border-b border-white hover:border-gray-500">Blogs</li>
          <li onClick={() => {navigate('/offers') , setVisible(false)}} className="text-sm mb-1 md:hidden cursor-pointer border-b border-white hover:border-gray-500">Offers</li>
          <li onClick={() => {navigate('/career') , setVisible(false)}} className="text-sm mb-1 md:hidden cursor-pointer border-b border-white hover:border-gray-500">Career</li>
          <li onClick={() => {navigate('/fashion') , setVisible(false)}} className="text-sm mb-1 md:hidden cursor-pointer border-b border-white hover:border-gray-500">Fashion</li>
          <li onClick={() => {navigate('/grocery') , setVisible(false)}} className="text-sm mb-1 md:hidden cursor-pointer border-b border-white hover:border-gray-500">Grocery</li>
          <li onClick={() => {navigate('/accessories') , setVisible(false)}} className="text-sm mb-1 cursor-pointer border-b border-white hover:border-gray-500 ">Accessories</li>
          <li onClick={() => {navigate('/electronics') , setVisible(false)}} className="text-sm mb-1 cursor-pointer border-b border-white hover:border-gray-500 ">Electronics</li>
         </ul>
       </div>
      {/* --- Search Suggestions Dropdown --- */}
      <div className="md:pl-[113px] md:pr-[34px] lg:pl-[107px] lg:pr-[145px] xl:pl-[108px] xl:pr-[146px] mt-2">
        {(focused && filteredSuggestions.length > 0) && (
          <div className="border bg-white rounded-b-lg overflow-hidden">
            {filteredSuggestions.slice(0 , 5).map((suggestion, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-8 py-1 cursor-pointer hover:bg-gray-100 transition-colors"
                onMouseDown={(e) => { 
                  e.preventDefault(); // Crucial to prevent input blur before the action
                  handleSuggestionClick(suggestion);
                }}
              >
                <CiSearch className="text-sm opacity-50 w-4 h-4" />
                <p className="text-sm text-gray-700">{suggestion}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default SearchBar;
