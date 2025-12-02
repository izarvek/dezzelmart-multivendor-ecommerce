import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const UserShippingDetails = () => {
  const couponRef = useRef(null);
  const [shippingMethod, setShippingMethod] = useState("1");
  const [coupon, setCoupon] = useState(0);
  const ShippingCalculation = useSelector(
    (state) => state.product.shippingDetailCalculation
  );
  const subTotal = ShippingCalculation?.subTotal;
  const Discount = ShippingCalculation?.totalDiscount;
  const shipping = 0.5;
  const tax = 5;

  const TotalAmount =
    ((subTotal + shipping) * (1 + tax / 100) * (1 - coupon / 100)) + Number(shippingMethod);
  const YouSave =
    Discount + (subTotal + shipping) * (1 + tax / 100) * (coupon / 100);

  const handleApplyCoupon = () => {
    const appliedCoupon = couponRef.current.value;
    if (appliedCoupon.trim() == "FABS8") {
      setCoupon(8);
    } else if (appliedCoupon.trim() == "BENZ15") {
      setCoupon(15);
    } else {
      setCoupon(0);
      toast.error("Add Valid Coupon");
    }
  };
  const handleChange = (e) => {
    setShippingMethod(e.target.value);
  };
  return (
    <div>
      <div className="p-2 border-[1px] rounded-lg border-gray-200 shadow-sm">
        <h2 className="poppins-medium ">Shipping Details</h2>
        <div className="mt-2">
          <select
            name="country"
            id="country"
            className="border rounded w-full text-sm poppins-light outline-none py-1 px-2"
          >
            <option value="">Select a country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="South Africa">South Africa</option>
          </select>
        </div>
        <div className="mt-2">
          <div className="flex justify-between mt-1">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="shippingMethod"
                value="1"
                checked={shippingMethod === "1"}
                onChange={handleChange}
              />
              <p className="poppins-light text-sm text-gray-600">
                Economy (7 - 8 days)
              </p>
            </div>
            <p className="poppins-medium">$1</p>
          </div>
          <div className="flex justify-between mt-1">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="shippingMethod"
                value="1.50"
                checked={shippingMethod === "1.50"}
                onChange={handleChange}
              />
              <p className="poppins-light text-sm text-gray-600">
                Economy (5 - 7 days)
              </p>
            </div>
            <p className="poppins-medium">$1.50</p>
          </div>
          <div className="flex justify-between mt-1">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="shippingMethod"
                value="0"
                checked={shippingMethod === "0"}
                onChange={handleChange}
              />
              <p className="poppins-light text-sm text-gray-600">
                Ex-Works Pickup
              </p>
            </div>
            <p className="poppins-medium">$00.00</p>
          </div>
        </div>
        <hr className="mt-2 border-gray-300 border-dashed" />
        <h2 className="poppins-medium mt-2">Payment Summary</h2>
        <div className="mt-2">
          <div className="mt-1 flex justify-between">
            <p className="poppins-light text-sm text-gray-600">Sub-Total</p>
            <p className="poppins-medium">${subTotal?.toFixed(2)}</p>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="poppins-light text-sm text-gray-600">Discount</p>
            <p className="poppins-medium">${Discount?.toFixed(2)}</p>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="poppins-light text-sm text-gray-600">Shipping</p>
            <p className="poppins-medium">${shipping}</p>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="poppins-light text-sm text-gray-600">Tax</p>
            <p className="poppins-medium text-red-600">+{tax}%</p>
          </div>
          {coupon != 0 && (
            <div className="mt-1 flex justify-between">
              <p className="poppins-light text-sm text-gray-600">Coupon</p>
              <p className="poppins-medium text-green-600">-{coupon}%</p>
            </div>
          )}
          <div className="mt-1 flex justify-between">
            <p className="poppins-light text-sm text-green-600">Your Saving</p>
            <p className="poppins-medium text-green-600">
              ${YouSave?.toFixed(2)}
            </p>
          </div>
        </div>
        <hr className="mt-2 border-gray-300 border-dashed" />
        <div className="mt-2">
          <div className="flex justify-between">
            <p className="poppins-medium text-blue-600">Total Amount</p>
            <p className="poppins-bold text-blue-600">
              ${TotalAmount.toFixed(2)}
            </p>
          </div>
          <button className="flex w-full bg-blue-600 hover:bg-blue-500 py-2 text-sm text-white justify-center items-center poppins-light rounded-full mt-2">
            Checkout
          </button>
        </div>
      </div>
      <div className="p-2 border-[1px] rounded-lg border-gray-200 mt-2 shadow-sm">
        <h2 className="poppins-medium">Discount Coupon</h2>
        <div className="mt-2 border-2 border-blue-500 rounded-full pl-2 flex justify-between overflow-hidden">
          <input
            ref={couponRef}
            type="text"
            placeholder="Enter Coupon"
            className="ml-2 outline-none poppins-light text-sm"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm poppins-regular px-10 md:px-2 lg:px-8 py-1 rounded-r-full"
          >
            Apply
          </button>
        </div>
        <p className="mt-4 poppins-regular text-sm">Available Coupon</p>
        <div className="mt-2 border-[1px] border-blue-400 border-dashed bg-blue-50 active:bg-blue-100 py-2 px-4 rounded-full">
          <div onClick={() => setCoupon(8)} className="flex gap-2">
            <p className="text-sm poppins-medium">FABS :</p>
            <p className="text-sm poppins-light">Flat 8% off</p>
          </div>
        </div>
        <div className="mt-2 border-[1px] border-blue-400 border-dashed bg-blue-50 active:bg-blue-100 py-2 px-4 rounded-full">
          <div onClick={() => setCoupon(8)} className="flex gap-2">
            <p className="text-sm poppins-medium">BENZ :</p>
            <p className="text-sm poppins-light">Flat 15% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShippingDetails;
