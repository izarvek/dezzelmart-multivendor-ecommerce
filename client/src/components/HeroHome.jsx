import { useEffect, useState } from "react";
import { visitorSlider } from "../assets/visitor/assetsVisitor.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const HeroHome = () => {
  const images = Object.values(visitorSlider);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(intervalId);
  }, 
  []);

  return (
    <div className="mt-2">
      <div className="relative">
        <img className="w-full"  src={images[currentIndex]} alt="" />
        <div className="absolute top-[45%] w-full flex justify-between select-none text-2xl md:3xl lg:text-4xl ">
          <FaAngleLeft onClick={handlePrev} className="text-gray-100 active:text-gray-400" />
          <FaAngleRight onClick={handleNext} className="text-gray-100 active:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
