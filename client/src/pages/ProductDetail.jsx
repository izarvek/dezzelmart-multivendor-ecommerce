import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Rating from "../components/templates/Rating.jsx";
import Page404 from "./Page404";
import { RiLoader2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import RecommendProductDetail from "../components/recommends/RecommendProductDetail.jsx";
import { allAssets } from "../components/templates/allAssets.js"; // All Available Assets
import { setAddToCart , setAddToWishlist} from "../features/ProductSlice.js";
import { useSelector , useDispatch } from 'react-redux'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.product.addToCartItems) // cartItems is all product available in Cart
  const wishlistItems = useSelector((state) => state.product.addToWishlistItems)

  const { urlSlug } = useParams();
  const product = allAssets.find((product) => product.urlSlug === urlSlug);
  const suggestionProduct = allAssets.filter(
    (items) =>
      (items.subCategory === product.subCategory ||
        items.category === product.category) &&
      items.urlSlug !== product.urlSlug
  );

  if (!product) {
    return <Page404 />;
  }

  const [cartstatus, setCartStatus] = useState("cartidle"); 
  const [wishstatus, setWishStatus] = useState("wishidle"); 
  const [size, setSize] = useState([]);

  const handleSize = (size) => {
    setSize((prev) => {
      if (prev.includes(size)) {
        return prev.filter((s) => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };
  const cartPayload = {
    size, 
    urlSlug
  }

const handleCartClick = () => {
  if (cartstatus === "cartloading") return;
  // Check if item already in cart
  const productInCart = cartItems.some(item => item.urlSlug === urlSlug && item.size.join() === size.join());
  if (productInCart) {
    setCartStatus("added");
    return; // Item already in cart with same size
  }

  setCartStatus("cartloading");
  setTimeout(() => {
    dispatch(setAddToCart(cartPayload));
    setCartStatus("added");
  }, 1000);
};

const handleWishClick = () => {
  if (wishstatus === "wishloading") return;

  // Check if item already in wishlist
  const isInWishlist = wishlistItems.includes(urlSlug);
  if (isInWishlist) {
    setWishStatus("added");
    return; // Exit early since item is already added
  }

  setWishStatus("wishloading");
  setTimeout(() => {
    dispatch(setAddToWishlist(urlSlug));
    setWishStatus("added");
  }, 1000);
};

useEffect(() => {
  // Reset statuses when product changes
  setCartStatus("cartidle");
  setWishStatus("wishidle");
  // Check if product is in cart
  const productInCart = cartItems.some(
    (item) => item.urlSlug === urlSlug && item.size.join() === size.join()
  );
  if (productInCart) {
    setCartStatus("added");
  }
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.includes(urlSlug);
  if (isInWishlist) {
    setWishStatus("added");
  }
}, [urlSlug, cartItems, wishlistItems]);

  const banner = product.image[0];
  const [mainImage, setMainImage] = useState(banner);
  useEffect(() => {
    if (banner) {
      setMainImage(banner);
    }
  }, [product]);

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">
        <div className="flex gap-3 w-full flex-col-reverse md:flex-row md:w-2/5">
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {product.image.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 border w-20 border-gray-500/30 rounded overflow-hidden cursor-pointer aspect-16/9"
              >
                <img
                  onClick={() => setMainImage(item)}
                  src={item}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="border border-gray-500/30 flex-grow aspect-[5/6] max-h-[25rem] md:max-h-full rounded overflow-hidden">
            <img
              src={mainImage}
              alt="Selected product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="border-b-[1px] border-gray-200 pb-2 xl:pb-6">
            <h2 className="text-2xl md:text-xl xl:text-2xl outfit-regular">
              {product?.title}
            </h2>
            <div className="flex gap-2 py-2 md:py-1 bg-white">
              <Rating rating={product?.rating} />
              <p className="outfit-regular">( {product?.rating} )</p>
              {product.reviewCount && (
                <p className="outfit-regular">
                  Reviews : {product.reviewCount}
                </p>
              )}
            </div>
            <div className="flex items-center text-green-800 gap-2">
              <FaCheckCircle />
              <p>Available in Stock</p>
            </div>
            <div className="outfit-regular mt-2">
              {product.sku && <span>ID : {product.sku} </span>}
            </div>
          </div>

          <div className="border-b-[1px] border-gray-200 mt-4 pb-4 xl:pb-6">
            <div className="flex gap-2 items-baseline">
              <p className="text-red-600 outfit-semibold text-3xl">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </p>
              <p className="line-through text-xl outfit-semibold text-gray-400">
                ${product.price}
              </p>
            </div>
            <div className="mt-3 outfit-light text-gray-500">
              <div className="flex gap-1">
                This product have{" "}
                <p className="bg-red-600 text-white px-2 rounded-lg poppins-semibold">
                  {product.discount}%
                </p>{" "}
                Discount .
              </div>
              <p>{product?.description}</p>
              {product.brand && (
                <div className="flex gap-1">
                  Brand :{" "}
                  <p className=" px-2 outfit-medium text-red-600">
                    {product.brand}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 mt-2  xl:mt-4 items-center">
            {product.sizes && <p className="outfit-medium text-lg">Size :</p>}
            <ul className="flex gap-2">
              {product.sizes &&
                product?.sizes?.map((s, i) => (
                  <li
                    onClick={() => handleSize(s)}
                    key={i}
                    className={`text-sm md:text-base border border-gray-500 px-3 py-1 flex items-center justify-center cursor-pointer active:border-lime-600 active:shadow-lg transition-colors rounded-lg select-none ${
                      size.includes(s) ? "bg-lime-800 text-white" : "bg-white"
                    }`}
                  >
                    {s}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-4 md:mt-2 xl:mt-6 flex flex-wrap justify-start gap-2 sm:gap-4 items-center">
            <div
              className={`text-sm  transition-colors duration-200 text-white poppins outfit-regular py-2 px-6 rounded flex-shrink-0 flex items-center gap-2 cursor-pointer ${
                cartstatus === "cartloading" ? "bg-gray-500" : "bg-[#496e51]"
              }`}
              onClick={handleCartClick}
            >
              {cartstatus === "cartloading" ? (
                <RiLoader2Line className="w-5 h-5 animate-spin" />
              ) : null}
              <button>
                {cartstatus === "cartidle"
                  ? "Add to Cart"
                  : cartstatus === "cartloading"
                  ? "Adding..."
                  : "Added to Cart"}
              </button>
            </div>
            <div className="bg-[#496e51] text-sm hover:bg-[#6c9574] transition-colors duration-200 text-white poppins outfit-regular py-2 px-6 rounded flex-shrink-0 flex items-center gap-2">
              <button>Buy Now</button>
            </div>
            <div className="border border-gray-400 hover:border-green-500 transition-colors px-4 py-2 outfit-medium rounded text-sm text-gray-700 flex items-center gap-2"
             onClick={handleWishClick}
            >
              {wishstatus === "wishloading" ? (<RiLoader2Line className="w-5 h-5 animate-spin" />) : null}
              <button>
                {wishstatus === "wishidle"
                  ? "Add to Wishlist"
                  : wishstatus === "wishloading"
                  ? "Adding..."
                  : "Added to Wishlist"}
              </button>
            </div>
            <button className="border hidden border-gray-400 hover:border-green-500 transition-colors px-4 py-2 outfit-medium rounded text-sm text-gray-700">
              Add to Compare
            </button>
          </div>
        </div>
      </div>
      <RecommendProductDetail suggestionProduct={suggestionProduct} />
    </div>
  );
};

export default ProductDetail;
