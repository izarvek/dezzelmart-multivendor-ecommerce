import { PiHandbagSimple } from "react-icons/pi";
import { GiRoundStar } from "react-icons/gi";
import { groceryProductAssets } from "../../assets/groceries/assetsGrocery";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const CardsGrocery = () => {
  const navigate = useNavigate();
  const category = useSelector((state) => state.product.groceryProductCategory)
  const filteredProducts = groceryProductAssets.filter(product => category.includes(product.subCategory));
  const groceryProductsToDisplay = category ? filteredProducts : groceryProductAssets;


  return (
    <div>
      <div>
        {groceryProductsToDisplay.length <= 0 && (
          <div className="flex items-center justify-center flex-col mt-20">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-700">
              Product Not Found
            </h1>
            <div class="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
            <p class="md:text-xl text-gray-400 max-w-lg text-center">
             There is not product available for this category.
            </p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-4">
        {groceryProductsToDisplay.map((product, i) => (
          <div
            key={i}
            className="mb-4"
            onClick={() => navigate(`/product/${product.urlSlug}`)}
          >
            <div className="aspect-[5/4] border-[1px] border-gray-200  rounded-lg py-1 px-3">
              <img
                className="hover:brightness-105 hover:saturate-150 transition-all duration-300 ease-in-out"
                src={product.image}
                alt=""
              />
            </div>
            <div className="mt-2 border-[1px] border-gray-200 rounded-lg py-1 px-3 hover:bg-green-50 hover:border-green-500">
              <div className="flex justify-between items-center">
                <p className="text-base md:text-lg text-gray-500 outfit-regular">
                  {product.title}
                </p>
                <div className="flex items-center gap-1">
                  <GiRoundStar className="text-red-600" />
                  <p className="outfit-medium">{product.rating}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="outfit-medium text-base md:text-lg">
                  ${product.price}
                </p>
                <PiHandbagSimple className="text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrocery;
