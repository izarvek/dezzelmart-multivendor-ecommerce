import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendEditorFashion = ({image , title , description , price , urlSlug}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate(`/product/${urlSlug}`)}>
        <div className="w-full aspect-[5/6]">
          <img
            className="rounded w-full h-full object-cover hover:brightness-110 transition-all duration-300 ease-out"
            src={image}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="poppins-semibold font-semibold mt-3 text-lg">
            {title}
          </h2>
          <p className="text-gray-500 px-3 text-center">{description}</p>
          <p className="poppins-regular text-gray-700 mt-2">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendEditorFashion;
