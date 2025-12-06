import React, { useState } from "react";
import avatar from "../../../assets/fashion/banner-01-1.jpg";
import { useSelector } from "react-redux";
import api from "../../../utils/Axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRef } from "react";

const Loader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 z-[100] transition-opacity duration-300">
    <div className="w-16 h-16 border-8 border-indigo-600 border-t-transparent border-solid rounded-full animate-spin"></div>
    <p className="mt-6 text-xl font-semibold text-indigo-700 poppins-medium">
      Loading Application...
    </p>
  </div>
);

const UserAccountProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null);
  const user = useSelector((state) => state.user.userDetail);
  const fileInputRef = useRef(null);
  // console.log(user);
  const [formData, setFormData] = useState({
    avatar: null,
  });
  const handleInputChange = (e) => {
    const { name, files } = e.target;
    const inputValue = files[0];
    setFormData({
      ...formData,
      [name]: inputValue,
    });

    // Create blob URL for preview
    if (inputValue) {
      const url = URL.createObjectURL(inputValue);
      setPreviewUrl(url);
    }
  };
  // console.log(previewUrl);

  const handleSubmitDetail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.avatar) {
      toast.error("Please select an avatar file");
      setIsLoading(false);
      return;
    }

    // Create FormData for multipart/form-data submission
    const form = new FormData();
    form.append("avatar", formData.avatar);

    try {
      const response = await api.put("/api/details/user/update/avatar", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  const handleAvatarDoubleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
      <form
        onSubmit={handleSubmitDetail}
        className="flex justify-between items-center mt-2 pb-6 border-b-[1px] border-gray-200"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            onDoubleClick={handleAvatarDoubleClick}
          >
            <img
              className="w-full h-full object-cover object-top"
              src={previewUrl || user?.avatar || avatar}
              alt="User Avatar"
            />
          </div>

          <div className="leading-5">
            <h2 className="poppins-medium">
              {user?.userInfo.fullname
                ? user?.userInfo.fullname
                : "Update Name"}
            </h2>
            <p className="poppins-regular text-sm text-gray-500">
              @{user?.username ? user?.username.replace(/\s+/g, '') : "updateusername"}
            </p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          id="avatar"
          name="avatar"
          onChange={handleInputChange}
          accept=".jpg, .jpeg, .png"
        />

        <div className={`${previewUrl ? "block" : "hidden"}`}>
          <button
            type="submit"
            className="flex gap-2 items-center bg-lime-700 text-white rounded-full py-2 px-4 poppins-regular hover:bg-lime-600"
          >
            Update
          </button>
        </div>
      </form>

      <div>
        <div className="mt-6 pb-6 border-b-[1px] ">
          <h2 className="poppins-medium text-lg">Personal Detail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
            <div className="poppins-regular text-sm">
              <span>Full Name : </span>
              <span>
                {user?.userInfo?.fullname
                  ? user?.userInfo?.fullname
                  : "Update Name"}
              </span>
            </div>
            <div className="poppins-regular text-sm">
              <span>Email : </span>
              <span>{user?.email ? user.email : "update@gmail.com"}</span>
            </div>
            <div className="poppins-regular text-sm">
              <span>Phone : </span>
              <span>
                {user?.userInfo?.phone ? user?.userInfo?.phone : "update phone"}
              </span>
            </div>
            <div className="poppins-regular text-sm">
              <span>Gender : </span>
              <span>
                {user?.userInfo?.gender ? user?.userInfo?.gender : "undefined"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pb-6 border-b-[1px] ">
          <h2 className="poppins-medium text-lg">Your Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
            <div className="poppins-regular text-sm">
              <span>Country : </span>
              <span>
                {user?.userAddress.country
                  ? user?.userAddress.country
                  : "India"}
              </span>
            </div>
            <div className="poppins-regular text-sm">
              <span>City/State : </span>
              <span>
                {user?.userAddress?.city ? user?.userAddress?.city : "Unknown"}
              </span>
            </div>
            <div className="poppins-regular text-sm">
              <span>Postal Code : </span>
              <span>
                {user?.userAddress?.postal
                  ? user?.userAddress?.postal
                  : "update postal"}
              </span>
            </div>
            <div className="poppins-regular text-sm">
              <span>Current Address : </span>
              <span>
                {user?.userAddress?.address
                  ? user?.userAddress?.address
                  : "update current address"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountProfile;
