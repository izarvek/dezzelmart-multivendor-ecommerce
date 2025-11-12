import React from "react";
import ShoppingCart from "../../components/user.components/ShoppingCart";
import ShippingDetails from "../../components/user.components/ShippingDetails";

const Cart = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-4">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="poppins-medium text-2xl">Shopping Cart</h2>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mt-4">
        <div className="w-full md:w-[70%]">
          <ShoppingCart />
        </div>
        <div className="w-full md:w-[30%]">
          <ShippingDetails />
        </div>
      </div>
    </div>
  );
};
export default Cart;
