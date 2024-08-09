import Main from "@/layouts/Main";
import About from "@/pages/about/About";
import CartPage from "@/pages/cart/CartPage";
import Contact from "@/pages/contact/Contact";
import Dashboard from "@/pages/dashboard/Dashboard";
import Home from "@/pages/home/Home";
import Product from "@/pages/product/Product";
import SingleProduct from "@/pages/singleProduct/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "card-details/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
