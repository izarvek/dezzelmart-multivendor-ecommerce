import React from "react";

const ShippingDetails = () => {
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
             <input type="radio" name="shippingMethod" value="economy8-10" />
            <p className="poppins-light text-sm text-gray-600">
              Economy (8 - 10 days)
            </p>
          </div>
          <p className="poppins-medium">$35.50</p>
        </div>
        <div className="flex justify-between mt-1">
          <div className="flex gap-2 items-center">
            <input type="radio" name="shippingMethod" value="economy5-7" />
            <p className="poppins-light text-sm text-gray-600">
              Economy (5 - 7 days)
            </p>
          </div>
          <p className="poppins-medium">$25.00</p>
        </div>
        <div className="flex justify-between mt-1">
          <div className="flex gap-2 items-center">
            <input type="radio" name="shippingMethod" value="exWorks" />
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
          <p className="poppins-medium">$35.00</p>
        </div>
        <div className="mt-1 flex justify-between">
          <p className="poppins-light text-sm text-gray-600">Shipping</p>
          <p className="poppins-medium">$25.00</p>
        </div>
        <div className="mt-1 flex justify-between">
          <p className="poppins-light text-sm text-gray-600">Tax</p>
          <p className="poppins-medium">$5.00</p>
        </div>
        <div className="mt-1 flex justify-between">
          <p className="poppins-light text-sm text-gray-600">Discount</p>
          <p className="poppins-medium">$21.00</p>
        </div>
      </div>
      <hr className="mt-2 border-gray-300 border-dashed" />
      <div className="mt-2">
        <div className="flex justify-between">
          <p className="poppins-medium text-blue-600">Total Amount</p>
          <p className="poppins-bold text-blue-600">$210</p>
        </div>
        <button className="flex w-full bg-blue-600 hover:bg-blue-500 py-2 text-sm text-white justify-center items-center poppins-light rounded-full mt-2">Checkout</button>
      </div>
     </div>
     <div className="p-2 border-[1px] rounded-lg border-gray-200 mt-2 shadow-sm">
          <h2 className="poppins-medium">Discount Coupon</h2>
          <div className="mt-2 border-2 border-blue-500 rounded-full pl-2 flex justify-between overflow-hidden">
            <input type="text" placeholder="Enter Coupon" className="ml-2 outline-none poppins-light text-sm" />
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm poppins-regular px-10 md:px-2 lg:px-8 py-1 rounded-r-full">Apply</button>
          </div>
          <p className="mt-4 poppins-regular text-sm">Available Coupon</p>
          <div className="mt-2 border-[1px] border-blue-400 border-dashed bg-blue-50 py-2 px-4 rounded-full">
             <div className="flex gap-2">
              <p className="text-sm poppins-medium">FABS :</p>
              <p className="text-sm poppins-light">Flat 8% off</p>
             </div>
          </div>
          <div className="mt-2 border-[1px] border-blue-400 border-dashed bg-blue-50 py-2 px-4 rounded-full">
             <div className="flex gap-2">
              <p className="text-sm poppins-medium">BENZ :</p>
              <p className="text-sm poppins-light">Flat 20% off</p>
             </div>
          </div>
     </div>
    </div>
  );
};

export default ShippingDetails;
