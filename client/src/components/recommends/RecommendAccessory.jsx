import React from "react";
import Title from "../templates/Title";
import { accessoryProduct } from "../../assets/accessories/assetsAccessories";

const RecommendAccessory = () => {
  return (
    <div className="mt-20">
      <Title
        title={"Our Luxury Product"}
        description={"Our Most Popular Products Specially Picked For You"}
      />
      <div className="flex flex-col md:flex-row gap-4">
        {/* First Card */}
        <div className="relative group flex-grow transition-all w-56 h-[400px] hover:w-full duration-500">
          <img
            className="h-full w-full object-cover object-right"
            src={accessoryProduct.sliderJewelry2}
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-3xl">Luxurious Earrings Specially For You</h1>
            <p className="text-sm">
              Discover exquisite, handcrafted earrings designed to add elegance
              and sophistication to your style.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative group flex-grow transition-all w-56 h-[400px] hover:w-full duration-500">
          <img
            className="h-full w-full object-cover object-center"
            src={accessoryProduct.sliderJewelry4}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-3xl">
              Elegant Necklace Perfect for Any Occasion
            </h1>
            <p className="text-sm">
              Elevate your look with this stunning, handcrafted necklace
              designed to add a touch of sophistication and charm to your style.
            </p>
          </div>
        </div>

        <div className="relative group flex-grow transition-all w-56 h-[400px] hover:w-full duration-500">
          <img
            className="h-full w-full object-cover object-center"
            src={accessoryProduct.sliderJewelry5}
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-3xl">
              Beautiful Traditional Mantika for Special Occasions
            </h1>
            <p className="text-sm">
              Enhance your traditional attire with this elegant, handcrafted
              mantika, symbolizing grace and cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendAccessory;
