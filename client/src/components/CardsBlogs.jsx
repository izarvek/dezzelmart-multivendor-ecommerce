import React from "react";
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { realArticles } from "../assets/blogs/assetsBlogs";

const CardsBlogs = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row gap-10">
      {/* Latest Posts */}
      <div className="w-full md:w-[70%]">
        <div className="text-2xl poppins-semibold border-b-2 border-gray-300 pb-5 mb-10 ">
          <h2>Latest Posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realArticles.map((blogs) => (
            <div key={blogs._id} className="mb-8 relative">
              <div className="w-full aspect-[16/9] ">
                <img
                  className="w-full h-full object-cover object-top"
                  src={blogs.image}
                  alt=""
                />
                <div className="absolute text-white top-4 left-4  bg-blue-700 hover:bg-blue-500 px-3 rounded-full lg:text-base text-sm ">
                  {blogs.category}
                </div>
              </div>
              <div>
                <h2 className="mt-6 xl:text-xl poppins-semibold">
                  {blogs.title}
                </h2>
                <p className="mt-2 poppins-regular text-gray-600 text-sm md:text-base">
                  {blogs.description[0].text}
                </p>
                <p className="poppins-semibold mt-2">By {blogs.authorname}</p>
                <div className="flex justify-between poppins-regular">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-sm">{blogs.date}</p>
                    <p className="text-sm"></p>
                    <div className="w-5 h-5 flex items-center">
                      <CiStar />
                    </div>
                  </div>
                  <div>
                    <CiBookmark className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="w-full md:w-[30%]">
        <div className="text-2xl poppins-semibold border-b-2 border-gray-300 pb-5 mb-10 ">
          <h2>Popular Post</h2>
        </div>
        <div className="grid md:grid-cols-1">
          <div>
            {realArticles.slice(0, 6).map((blogs, index) => (
              <div key={index} className="flex gap-4 mb-4 items-center">
                <div className="flex items-center w-24 flex-shrink-0 justify-center">
                  <h2 className="w-full h-full text-6xl outfit-semibold text-gray-200 flex items-center justify-center">
                    0{index + 1}
                  </h2>
                </div>
                <div>
                  <h2 className="text-md poppins-semibold">{blogs.title}</h2>
                  <p className="text-regular">By {blogs.authorname}</p>
                  <p className="text-sm text-gray-500">{blogs.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBlogs;
