// public.routes.js
import Home from "../pages/Home.jsx";
import Fashion from "../pages/Fashion.jsx";
import Grocery from "../pages/Grocery.jsx";
import Accessories from "../pages/Accessories.jsx";
import Electronics from "../pages/Electronics.jsx";
import Blogs from "../pages/Blogs.jsx";
import Offers from "../pages/Offers.jsx";
import Career from "../pages/Career.jsx";
import Page404 from "../pages/Page404.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import ProductListing from "../pages/ProductListing.jsx";
import FAQ from "../pages/FAQ.jsx";

export const publicRoutes = [
  // Category Routes
  { path: "/", element: <Home /> },
  { path: "/fashion", element: <Fashion /> },
  { path: "/grocery", element: <Grocery /> },
  { path: "/accessories", element: <Accessories /> },
  { path: "/electronics", element: <Electronics /> },

  // Navbar Routes
  { path: "/explore", element: <Home /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/offers", element: <Offers /> },
  { path: "/career", element: <Career /> },

  // Detail Page Route
  { path: "/product/:urlSlug", element: <ProductDetail /> },
  { path: "/404", element: <Page404 /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/search", element: <ProductListing /> },
  { path: "/faq", element: <FAQ /> },
];
