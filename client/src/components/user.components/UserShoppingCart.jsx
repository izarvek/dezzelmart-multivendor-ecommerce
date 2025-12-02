import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { allAssets } from "../templates/allAssets";
import { setRemoveFromCart , setShippingDetailCalculation } from "../../features/ProductSlice";
import { useNavigate } from "react-router-dom";

const UserShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.addToCartItems);

  const [allCartProduct, setAllCartProduct] = useState(() => {
    return cartItems
      .map((cartItem) => {
        const product = allAssets.find(
          (asset) => asset.urlSlug === cartItem.urlSlug
        );
        if (product) {
          return {
            ...product,
            size: cartItem.size,
            quantity: 1,
          };
        }
        return null;
      })
      .filter(Boolean);
  });

  const subTotal = allCartProduct.reduce(
    (acc, product) =>
      acc + product.price * (1 - product.discount / 100) * product.quantity,
    0
  );
  const totalDiscount = allCartProduct.reduce(
    (acc, product) =>
      acc + product.price * (product.discount / 100) * product.quantity,
    0
  );

  useEffect(() => {
    const shippingPayload = {
      subTotal,
      totalDiscount,
    };
    dispatch(setShippingDetailCalculation(shippingPayload));
  }, [subTotal, totalDiscount, dispatch]);


  const handleSetQuantity = (slug, newQuantity) => {
    if (newQuantity < 1) return;

    setAllCartProduct((prevProducts) =>
      prevProducts.map((product) => {
        if (product.urlSlug === slug) {
          return {
            ...product,
            quantity: newQuantity,
          };
        }
        return product;
      })
    );
  };

  const handleDeleteItem = (slug) => {
    setAllCartProduct((prev) => prev.filter((item) => item.urlSlug !== slug));
    dispatch(setRemoveFromCart(slug));
  };

  return (
    <div className="">
      <div className="flex justify-between p-2 border-[1px] rounded-t-lg border-gray-200 poppins-medium">
        <div>
          <p>Products</p>
        </div>
        <div className="hidden lg:flex gap-52 mr-2">
          <p>Quantity</p>
          <p>Price</p>
        </div>
      </div>

      {allCartProduct.length > 0 &&
        allCartProduct.map((item, i) => (
          <div
            key={i}
            className="mt-1 flex lg:flex-row flex-col justify-between p-2 border-[1px] "
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover object-top"
                  src={item.image[0]}
                  alt=""
                />
              </div>
              <div className="">
                <h2
                  onClick={() => navigate(`/product/${item.urlSlug}`)}
                  className="poppins-medium hover:underline hover:text-blue-600 transition-all duration-500 ease-in-out"
                >
                  {item.title}
                </h2>
                <p
                  className={`poppins-light text-sm text-gray-600 ${
                    item.brand ? "text-blue-600" : "hidden"
                  }`}
                >
                  {item.brand}
                </p>
                <p
                  className={`poppins-light text-sm text-gray-600 ${
                    item.material ? "text-blue-600" : "hidden"
                  }`}
                >
                  {item.material}
                </p>
                <div className="flex gap-2 items-center">
                  {item.size.length > 0 && (
                    <p className="text-sm poppins-light">Size :</p>
                  )}
                  {item.size.map((size, i) => (
                    <div key={i} className="text-sm poppins-light flex">
                      <p>{size}</p>
                      <p className={`${item.size.length > 1 ? "" : "hidden"}`}>
                        ,
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex pt-4 lg:pt-0 justify-between gap-40 mt-4 lg:mt-0 bg-gray-50 lg:bg-white shadow-inner lg:shadow-none px-2 rounded-lg lg:rounded-none">
              <div className="flex items-center gap-4">
                <div
                  onClick={() =>
                    handleSetQuantity(item.urlSlug, item.quantity - 1)
                  }
                >
                  <FaMinus />
                </div>
                <p className="poppins-semibold select-none">{item.quantity}</p>
                <div
                  onClick={() =>
                    handleSetQuantity(item.urlSlug, item.quantity + 1)
                  }
                >
                  <FaPlus />
                </div>
              </div>
              <div className="flex gap-10 lg:block">
                <div className="text-end">
                  <h2 className="poppins-medium">
                    $
                    {(
                      item.price *
                      (1 - item.discount / 100) *
                      item.quantity
                    ).toFixed(2)}
                  </h2>
                  <p className="text-sm poppins-light text-gray-600">
                    {item.discount}% Discount
                  </p>
                </div>
                <div
                  onClick={() => handleDeleteItem(item.urlSlug)}
                  className="lg:mt-4 flex justify-end"
                >
                  <RiDeleteBinLine />
                </div>
              </div>
            </div>
          </div>
        ))}

      {allCartProduct.length == 0 && (
        <div className="flex justify-center text-sm poppins-light border-[1px] border-gray-200 rounded-sm py-4 mt-2">
          <p>Add Product In The Cart 😊</p>
        </div>
      )}
      <div className="mt-1 flex justify-between p-2 border-[1px] rounded-b-lg border-gray-200 poppins-medium">
        {<h2>Total Products : {allCartProduct.length}</h2>}
        <button className="bg-blue-500 poppins-regular text-sm text-white px-2 py-1 rounded-full">
          Save Items
        </button>
      </div>
    </div>
  );
};

export default UserShoppingCart;
