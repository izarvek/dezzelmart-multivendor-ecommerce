import React, { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/common/Footer";
import SearchBar from "./components/common/SearchBar";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes.jsx";
import { authRoutes, userProfileRoutes } from "./routes/userRoutes.jsx";
import { useSelector } from "react-redux";

const Loader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 z-[100] transition-opacity duration-300">
    <div className="w-16 h-16 border-8 border-indigo-600 border-t-transparent border-solid rounded-full animate-spin"></div>
    <p className="mt-6 text-xl font-semibold text-indigo-700 poppins-medium">
      Loading Application...
    </p>
  </div>
);

const App = () => {
  const userToggleProfile = useSelector((state) => state.user.profileMenuOpen);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   setIsLoading(false)
  }, []); 

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <div
        className={`absolute z-10 px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 w-[100%] h-[100%] ${
          userToggleProfile ? "block bg-black/50" : "hidden"
        } `}
      ></div>

      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        {publicRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
        
        {authRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
        
        {userProfileRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
        
      </Routes>

      <Footer />
    </div>
  );
};

export default App;