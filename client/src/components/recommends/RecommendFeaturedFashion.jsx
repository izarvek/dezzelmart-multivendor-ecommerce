import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendFeaturedFashion = ({ image, title, price , urlSlug }) => {
  const navigate = useNavigate();
  return (
    <div  onClick={() => {navigate(`/product/${urlSlug}`) ,  window.scrollTo({top : 0 , behavior : 'smooth'})}}>
      <div className="w-full ">
        <img
          className="rounded w-full h-full object-cover hover:brightness-110  transition-all duration-300 ease-out"
          src={image}
          alt=""
        />
      </div>

      <div>
        <h2 className="poppins-semibold font-semibold mt-3 text-lg">{title}</h2>
        <p className="poppins-regular text-gray-700 mt-2">${price}</p>
      </div>

    </div>
  );
};

export default RecommendFeaturedFashion;
