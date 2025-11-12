import React, { useEffect, useState } from "react";
import { allAssets } from "../../components/templates/allAssets.js";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredAssets } from "../../features/ProductSlice.js";

const SidebarProductListing = () => {
  const dispatch = useDispatch();
  const searchedViaSearchBar = useSelector(
    (state) => state.product.searchedViaSearchBar
  );
  const sortViaOption = useSelector((state) => state.product.sortViaOption);

  // --- Local State for Filter Criteria ---
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchBrand, setSearchBrand] = useState("");
  const [minDiscount, setMinDiscount] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [barPrice, setBarPrice] = useState(1);
  const [selectedFashionTypes, setSelectedFashionTypes] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedShippingOptions, setSelectedShippingOptions] = useState([]);

  useEffect(() => {
    const filteredAssets = allAssets.filter((product) => {
      const tokens = searchedViaSearchBar?.toLowerCase()?.split(" ");
      const searchFilter = tokens.some((token) =>
        product.title.toLowerCase().includes(token)
      );
      const discountFilter = product.discount >= minDiscount;
      const barPriceFilter = product.price >= barPrice;
      const minRatingFilter = product.rating >= minRating;

      return (
        searchFilter && discountFilter && barPriceFilter && minRatingFilter
      );
    });

    if (sortViaOption === "high-to-low") {
      filteredAssets.sort((a, b) => b.price - a.price);
    } else if (sortViaOption === "low-to-high") {
      filteredAssets.sort((a, b) => a.price - b.price);
    }

    dispatch(setFilteredAssets(filteredAssets));
  }, [
    searchedViaSearchBar,
    selectedBrands,
    minDiscount,
    barPrice,
    minRating,
    sortViaOption,
    dispatch,
  ]);

  // Filter Selected Brands
  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedBrands((prev) => [...prev, value.toLowerCase()]);
    } else {
      setSelectedBrands((prev) =>
        prev.filter((brand) => brand !== value.toLowerCase())
      );
    }
  };
  const handleSearchBrand = (e) => {
    if (e.key === "Enter") {
      const brandToAdd = searchBrand.trim();
      if (brandToAdd && !selectedBrands.includes(brandToAdd)) {
        setSelectedBrands((prev) => [...prev, brandToAdd.toLowerCase()]);
      }
      setSearchBrand("");
    }
  };
  // Filter Shipping Options
  const handleShippingOptions = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedShippingOptions((prev) => [...prev, value]);
    } else {
      setSelectedShippingOptions((prev) =>
        prev.filter((shipping) => shipping !== value)
      );
    }
  };

  console.log(selectedBrands);
  console.log(minDiscount);
  console.log(minRating);
  console.log(selectedShippingOptions);
  console.log(sortViaOption);
  console.log(searchedViaSearchBar);

  return (
    <div>
      {/* Brands */}
      <div>
        <div>
          <h2 className="poppins-medium mb-2">Brands</h2>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search brands..."
              className="w-full border-[1px] border-gray-300 rounded-md p-1 pl-5 outline-none focus:border-gray-500 text-sm poppins-light"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
              onKeyDown={handleSearchBrand}
            />
          </div>
        </div>
        <div className="flex gap-2  mt-1">
          <input
            type="checkbox"
            id="lv"
            name="brand"
            value="Louis Vuitton"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="lv">
            Louis Vuitton
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="gucci"
            name="brand"
            value="Gucci"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="gucci">
            Gucci
          </label>
        </div>
        <div className="flex gap-2  mt-1">
          <input
            type="checkbox"
            id="prada"
            name="brand"
            value="Prada"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="prada">
            Prada
          </label>
        </div>
        <div className="flex gap-2  mt-1">
          <input
            type="checkbox"
            id="burberry"
            name="brand"
            value="Burberry"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="burberry">
            Burberry
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="hm"
            name="brand"
            value="H&M"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="hm">
            H&M
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="nike"
            name="brand"
            value="Nike"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="nike">
            Nike
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="adidas"
            name="brand"
            value="Adidas"
            onChange={handleBrandChange}
          />
          <label className="poppins-light text-sm" htmlFor="adidas">
            Adidas
          </label>
        </div>
      </div>
      {/* Discount */}
      <div className="mt-4">
        <h2 className="poppins-medium mb-2">Discount</h2>
        <ul>
          <li
            onClick={() => setMinDiscount(10)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            10% Off or more
          </li>
          <li
            onClick={() => setMinDiscount(20)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            20% Off or more
          </li>
          <li
            onClick={() => setMinDiscount(30)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            30% Off or more
          </li>
          <li
            onClick={() => setMinDiscount(40)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            40% Off or more
          </li>
          <li
            onClick={() => setMinDiscount(50)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            50% Off or more
          </li>
        </ul>
      </div>
      {/* Category */}
      <div className="mt-4 hidden">
        <h2 className="poppins-medium mb-2">Categories</h2>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="fashion" name="category" value="Fashion" />
          <label htmlFor="fashion" className="font-poppins-light text-sm">
            Fashion
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="grocery" name="category" value="Grocery" />
          <label htmlFor="grocery" className="font-poppins-light text-sm">
            Grocery
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="accessories"
            name="category"
            value="Accessories"
          />
          <label htmlFor="accessories" className="font-poppins-light text-sm">
            Accessories
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="electronics"
            name="category"
            value="Electronics"
          />
          <label htmlFor="electronics" className="font-poppins-light text-sm">
            Electronics
          </label>
        </div>
      </div>
      {/* Sub Category*/}
      <div className="hidden">
        <div className="mt-4  border-gray-200">
          <h3 className="poppins-regular mb-1 text-sm text-gray-700">
            Grocery Sub-Categories
          </h3>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="freshProduce"
              name="subCategory"
              value="Fresh Produce"
            />
            <label
              htmlFor="freshProduce"
              className="font-poppins-light text-xs"
            >
              Fresh Produce
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="dairy"
              name="subCategory"
              value="Dairy & Eggs"
            />
            <label htmlFor="dairy" className="font-poppins-light text-xs">
              Dairy & Eggs
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="snacks"
              name="subCategory"
              value="Snacks & Beverages"
            />
            <label htmlFor="snacks" className="font-poppins-light text-xs">
              Snacks & Beverages
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="pantry"
              name="subCategory"
              value="Pantry Staples"
            />
            <label htmlFor="pantry" className="font-poppins-light text-xs">
              Pantry Staples
            </label>
          </div>
        </div>

        <div className="mt-4  border-gray-200">
          <h3 className="poppins-regular mb-1 text-sm text-gray-700">
            Accessories Sub-Categories
          </h3>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="jewellery"
              name="subCategory"
              value="Jewellery"
            />
            <label htmlFor="jewellery" className="font-poppins-light text-xs">
              Jewellery
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="bags"
              name="subCategory"
              value="Bags & Wallets"
            />
            <label htmlFor="bags" className="font-poppins-light text-xs">
              Bags & Wallets
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="watches"
              name="subCategory"
              value="Watches"
            />
            <label htmlFor="watches" className="font-poppins-light text-xs">
              Watches
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="eyewear"
              name="subCategory"
              value="Eyewear"
            />
            <label htmlFor="eyewear" className="font-poppins-light text-xs">
              Eyewear
            </label>
          </div>
        </div>

        <div className="mt-4  border-gray-200">
          <h3 className="poppins-regular mb-1 text-sm text-gray-700">
            Electronics Sub-Categories
          </h3>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="mobile"
              name="subCategory"
              value="Mobile Phones"
            />
            <label htmlFor="mobile" className="font-poppins-light text-xs">
              Mobile Phones
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="laptops"
              name="subCategory"
              value="Laptops & PCs"
            />
            <label htmlFor="laptops" className="font-poppins-light text-xs">
              Laptops & PCs
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="appliances"
              name="subCategory"
              value="Home Appliances"
            />
            <label htmlFor="appliances" className="font-poppins-light text-xs">
              Home Appliances
            </label>
          </div>
          <div className="flex gap-2 mt-1">
            <input
              type="checkbox"
              id="audio"
              name="subCategory"
              value="Audio & Headphones"
            />
            <label htmlFor="audio" className="font-poppins-light text-xs">
              Audio & Headphones
            </label>
          </div>
        </div>
      </div>
      {/* Price Range */}
      <div className="mt-4">
        <h2 className="poppins-medium mb-2">Price Range</h2>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="w-full"
            value={barPrice}
            onChange={(e) => setBarPrice(e.target.value)}
          />
        </div>
        <div className="mt-2 text-sm flex justify-between poppins-semibold">
          <span>${barPrice}</span>
          <span>$1000</span>
        </div>
      </div>
      {/* Fashion Type */}
      <div className="mt-4 ">
        <h2 className="poppins-medium mb-2">Fashion Type</h2>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="man" name="fashionType" value="Man" />
          <label className="poppins-light text-sm" htmlFor="man">
            Man
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="women" name="fashionType" value="Women" />
          <label className="poppins-light text-sm" htmlFor="women">
            Women
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="boy" name="fashionType" value="Boy" />
          <label className="poppins-light text-sm" htmlFor="boy">
            Boy
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="girl" name="fashionType" value="Girl" />
          <label className="poppins-light text-sm" htmlFor="girl">
            Girl
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="kids" name="fashionType" value="Kids" />
          <label className="poppins-light text-sm" htmlFor="kids">
            Kids
          </label>
        </div>
      </div>
      {/* Rating */}
      <div className="mt-4">
        <h2 className="poppins-medium mb-2">Ratings</h2>
        <ul>
          <li
            onClick={() => setMinRating(5)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            5 Stars Only
          </li>
          <li
            onClick={() => setMinRating(4)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            4 Stars & Up
          </li>
          <li
            onClick={() => setMinRating(3)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            3 Stars & Up
          </li>
          <li
            onClick={() => setMinRating(2)}
            className="poppins-light text-sm mt-1 cursor-pointer hover:text-red-500"
          >
            2 Stars & Up
          </li>
        </ul>
      </div>
      {/* Color */}
      <div className="mt-4">
        <h2 className="poppins-medium mb-2">Color</h2>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="red" name="color" value="Red" />
          <label className="poppins-light text-sm" htmlFor="red">
            Red
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="blue" name="color" value="Blue" />
          <label className="poppins-light text-sm" htmlFor="blue">
            Blue
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="black" name="color" value="Black" />
          <label className="poppins-light text-sm" htmlFor="black">
            Black
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="white" name="color" value="White" />
          <label className="poppins-light text-sm" htmlFor="white">
            White
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="green" name="color" value="Green" />
          <label className="poppins-light text-sm" htmlFor="green">
            Green
          </label>
        </div>
      </div>
      {/* Size */}
      <div className="mt-4 hidden">
        <h2 className="poppins-medium mb-2">Size</h2>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="s" name="size" value="S" />
          <label className="poppins-light text-sm" htmlFor="s">
            S
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="m" name="size" value="M" />
          <label className="poppins-light text-sm" htmlFor="m">
            M
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="l" name="size" value="L" />
          <label className="poppins-light text-sm" htmlFor="l">
            L
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="xl" name="size" value="XL" />
          <label className="poppins-light text-sm" htmlFor="xl">
            XL
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="xxl" name="size" value="XXL" />
          <label className="poppins-light text-sm" htmlFor="xxl">
            XXL
          </label>
        </div>
      </div>
      {/* Material */}
      <div className="mt-4">
        <h2 className="poppins-medium mb-2">Material</h2>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="cotton" name="material" value="Cotton" />
          <label className="poppins-light text-sm" htmlFor="cotton">
            Cotton
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="leather" name="material" value="Leather" />
          <label className="poppins-light text-sm" htmlFor="leather">
            Leather
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="polyester"
            name="material"
            value="Polyester"
          />
          <label className="poppins-light text-sm" htmlFor="polyester">
            Polyester
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input type="checkbox" id="metal" name="material" value="Metal" />
          <label className="poppins-light text-sm" htmlFor="metal">
            Metal
          </label>
        </div>
      </div>
      {/* Shipping Option */}
      <div className="mt-4">
        <h2 className="poppins-medium mb-2">Shipping Option</h2>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="freeShipping"
            name="shipping"
            value="Free Shipping"
            onChange={handleShippingOptions}
          />
          <label className="poppins-light text-sm" htmlFor="freeShipping">
            Free Shipping
          </label>
        </div>
        <div className="flex gap-2 mt-1">
          <input
            type="checkbox"
            id="express"
            name="shipping"
            value="Express Delivery"
            onChange={handleShippingOptions}
          />
          <label className="poppins-light text-sm" htmlFor="express">
            Express Delivery
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarProductListing;
