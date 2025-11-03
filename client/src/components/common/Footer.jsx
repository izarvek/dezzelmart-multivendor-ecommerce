import React from "react";
import { linkSections } from "../../assets/visitor/assetsVisitor.js";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 mt-10  px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 bg-gray-700">
        <div className="w-full md:w-[35%]">
          <h1 className="text-3xl text-white">DezzelMart</h1>
          <p className="max-w-[410px]  mt-6 text-gray-50">
            DezellMart is a trusted brand for eCommerce, offering a wide range
            of quality products at competitive prices. Explore our collection
            and enjoy a seamless shopping experience.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[65%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-50 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 text-gray-100">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to} className="hover:underline transition">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-50 bg-gray-800">
        Conditions of Use & Sale Privacy Notice Interest-Based Ads <br /> ©
        1996-2025, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
};

export default Footer;
