import React from "react";
import Title from "../components/templates/Title";
import { groceryMenu } from "../assets/groceries/assetsGrocery";

const MenuGrocery = () => {
  return (
    <div className="mt-20 w-full">
      <Title title={"Grocery Menu"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-8">
        {groceryMenu.map((product, i) => (
          <div key={i} className="flex flex-col justify-center items-center bg-white hover:bg-green-50 hover:border-green-500 aspect-[5/4] rounded-lg border-[1px] border-gray-200">
            <img src={product.image} alt="" />
            <p className="text-xl mt-3 font-semibold">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrocery;
