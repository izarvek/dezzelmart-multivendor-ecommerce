import React from "react";
import Navbar from "./components/common/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/common/Footer";
import SearchBar from "./components/common/SearchBar";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes.jsx";
import { authRoutes , userProfileRoutes } from "./routes/userRoutes.jsx";
import { useSelector } from "react-redux";
const App = () => {
  const userToggleProfile = useSelector((state) => state.user.profileMenuOpen);
  return (
    <div className="relative">
      <div
        className={`absolute z-10 px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40  w-[100%] h-[100%] ${
          userToggleProfile ? "block bg-black/50" : "hidden"
        } `}
      ></div>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        {publicRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })},

        {authRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })},
        
        {userProfileRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })},

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
