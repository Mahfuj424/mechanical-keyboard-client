

import React, { useEffect, useState } from "react";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import SideBar from "@/components/productPageContent/SideBar";
import MainContent from "@/components/productPageContent/MainContent";
import { ScrollRestoration } from "react-router-dom";

const Product = () => {
  const [filterOptions, setFilterOptions] = useState({
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: "Default",
    searchTerm: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilterOptions((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };


  useEffect(() => {
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
