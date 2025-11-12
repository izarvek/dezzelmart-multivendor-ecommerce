import React from "react";
import Title from "../templates/Title";
import { menuAccessoriesAssets } from "../../assets/accessories/assetsAccessories";
import { useNavigate } from "react-router-dom";
const CardsAccessory = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      <Title
        title={"Find Your Perfect Match"}
        description={"Shop By Your Categories"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-4">
        {menuAccessoriesAssets.map((product, i) => (
          <div key={i} className="relative overflow-hidden group" onClick={() => {navigate(`/product/${product.urlSlug}`) , window.scrollTo({top : 0 , behavior : 'smooth'})}}>
            <img
              className="rounded transition-all duration-500 ease-in-out hover:brightness-105 "
              src={product.image}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            <div className="mt-2 poppins-medium">{product.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsAccessory;
