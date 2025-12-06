import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../utils/Axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Loader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 z-[100] transition-opacity duration-300">
    <div className="w-16 h-16 border-8 border-indigo-600 border-t-transparent border-solid rounded-full animate-spin"></div>
    <p className="mt-6 text-xl font-semibold text-indigo-700 poppins-medium">
      Loading Application...
    </p>
  </div>
);

const UserAccountPreferences = () => {
  const user = useSelector((state) => state.user.userDetail);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    gender: "",
    dob: "",

    country: "",
    city: "",
    postal: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitDetail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.fullname || !formData.phone || !formData.gender || !formData.dob || !formData.country || !formData.city || !formData.postal || !formData.address) {
      toast.error("Please select Complete field to update");
      setIsLoading(false);
      return;
    }

    try {
      const response = await api.put("/api/details/user/update/detail", {
        fullname: formData.fullname,
        phone: formData.phone,
        gender: formData.gender,
        dob: formData.dob,
        country: formData.country,
        city: formData.city,
        postal: formData.postal,
        address: formData.address,
      });
      window.location.reload();
      console.log(response.data);
      setIsLoading(false);
      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Failed to update profile");
    }

  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {/* Function name update kiya */}
      <form onSubmit={handleSubmitDetail}>
        <div className="mt-6 pb-6 border-b-[1px] ">
          <h2 className="poppins-medium text-lg">Update Personal Detail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
            {/* --- Full Name Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter Your Full Name"
                onChange={handleInputChange}
              />
            </div>

            {/* --- Phone Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* --- Gender Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="gender">
                Gender
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="text"
                id="gender"
                name="gender"
                placeholder="Enter Your Gender"
                value={formData.gender}
                onChange={handleInputChange}
              />
            </div>

            {/* --- DOB Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="dob">
                DOB
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="date"
                id="dob"
                name="dob"
                placeholder="Enter Your DOB"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="poppins-medium text-lg">Update Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
            {/* --- Country Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="country">
                Country
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="text"
                id="country"
                name="country"
                placeholder="Enter Country Name"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>

            {/* --- Area Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="city">
                City/State
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="text"
                id="city"
                name="city"
                placeholder="Enter City or State"
                value={formData.area}
                onChange={handleInputChange}
              />
            </div>

            {/* --- Postal Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="postal">
                Postal/Pin Code
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="number"
                id="postal"
                name="postal"
                placeholder="Enter Postal or Pin Code"
                value={formData.postal}
                onChange={handleInputChange}
              />
            </div>

            {/* --- Address Input: 'name' attribute added --- */}
            <div className="flex flex-col">
              <label className="poppins-regular text-sm" htmlFor="address">
                Current Address
              </label>
              <input
                className="border-[1px] mt-1 py-1 px-2 rounded-md placeholder:text-sm placeholder:poppins-light text-sm poppins-light"
                type="text"
                id="address"
                name="address"
                placeholder="Enter Current Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            className="bg-lime-700 hover:bg-lime-600 py-2 px-8 rounded-full poppins-regular text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAccountPreferences;
