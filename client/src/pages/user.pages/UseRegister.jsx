import React from "react";
import { MdEmail } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { FaUser, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/Axios"; // Assuming your configured Axios instance is here

const UseRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Input changes ko handle karne ke liye
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.email || !formData.username || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
     const response =  await api.post("/api/auth/user/register", {
        email: formData.email,
        username: formData.username,
        password: formData.password
      });

      // console.log(response.data)

      navigate("/login"); 
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed. Please try again.";
      setError(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10">
      <div className="border-[1px] border-gray-200 rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center mb-10">
          <FaShopify className="w-20 h-20 mb-6" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl poppins-medium">
              Your shopping starts here
            </h2>
            <h2 className="text-2xl poppins-medium">Take the first step</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex gap-2 items-center border-[1px] border-gray-200 rounded-lg py-2 px-4">
            <MdEmail className="w-5 h-5" />
            <input
              className="bg-transparent placeholder:poppins-light poppins-light outline-none"
              type="email"
              placeholder="E-mail"
              name="email" 
              value={formData.email}
              onChange={handleInputChange} 
              required
            />
          </div>

          {/* Username Input */}
          <div className="flex gap-2 items-center border-[1px] border-gray-200 rounded-lg py-2 px-4 mt-2">
            <FaUser className="w-5 h-5" />
            <input
              className="bg-transparent placeholder:poppins-light poppins-light outline-none"
              type="text"
              placeholder="Username"
              name="username" 
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex gap-2 items-center border-[1px] border-gray-200 rounded-lg py-2 px-4 mt-2">
            <FaLock className="w-5 h-5" />
            <input
              className="bg-transparent placeholder:poppins-light poppins-light outline-none"
              type="password"
              placeholder="Password"
              name="password" 
              value={formData.password}
              onChange={handleInputChange} 
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex gap-2 items-center border-[1px] border-gray-200 rounded-lg py-2 px-4 mt-2">
            <FaLock className="w-5 h-5" />
            <input
              className="bg-transparent placeholder:poppins-light poppins-light outline-none"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleInputChange} 
              required
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <p className="text-red-500 poppins-regular text-sm mt-2 text-center">
              {error}
            </p>
          )}

          <div className="mt-6">
            <button
              type="submit" 
              className={`poppins-regular text-base text-white ${
                loading ? "bg-gray-600" : "bg-lime-700 hover:bg-lime-600"
              } transition-all duration-300 ease-in-out py-2 w-full rounded-full`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-1">
                  <FiLoader className="inline animate-spin mr-2 w-5 h-5" />
                  <p>signing up . . .</p>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        {/* ... Rest of the component (social logins, sign in link) ... */}
        <div className="flex items-center mt-6">
          <div className="w-full h-[2px] bg-gray-500 rounded-full"></div>
          <p className="text-sm poppins-regular px-2">or</p>
          <div className="w-full h-[2px] bg-gray-500 rounded-full"></div>
        </div>
        <div className="mt-6 flex justify-center items-center gap-6">
          <FaFacebook className="w-6 h-6" />
          <IoLogoApple className="w-7 h-7" />
          <FaGoogle className="w-6 h-6" />
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <p className="poppins-medium text-sm">Already have an account?</p>
          <p
            onClick={() => navigate("/login")}
            className="underline text-blue-600 poppins-medium text-sm cursor-pointer"
          >
            Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseRegister;