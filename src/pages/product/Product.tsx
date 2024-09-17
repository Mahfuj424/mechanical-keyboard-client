/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from "react";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import SideBar from "@/components/productPageContent/SideBar";
import MainContent from "@/components/productPageContent/MainContent";
import { ScrollRestoration } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cartSlice";

const Product = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = cartItems.length;
  const [filterOptions, setFilterOptions] = useState({
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: "Default",
    searchTerm: "",
  });

  const handleFilterChange = (newFilters:any) => {
    setFilterOptions((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };



  useEffect(() => {
    if (cartCount > 0) {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        const warningMessage =
          "Your cart data may be lost if you reload the page. Are you sure you want to leave?";
        event.preventDefault();
        event.returnValue = warningMessage; // For most browsers
        return warningMessage; // For some browsers
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);


  return (
    <div className="mb-20">
      <ScrollRestoration />
      <SecondNavbar prevNav="home" currNav="product" />
      <div className="lg:flex w-full max-w-7xl justify-between mx-auto gap-10 mt-10">
        <SideBar onFilterChange={handleFilterChange} />
        <MainContent filterOptions={filterOptions} />
      </div>
    </div>
  );
};

export default Product;
