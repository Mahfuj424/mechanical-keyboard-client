// Product.tsx

import React, { useState } from "react";
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

  return (
    <div className="mb-20">
      <ScrollRestoration />
      <SecondNavbar prevNav="home" currNav="product" />
      <div className="flex w-full max-w-7xl mx-auto gap-10 mt-10">
        <SideBar onFilterChange={handleFilterChange} />
        <MainContent filterOptions={filterOptions} />
      </div>
    </div>
  );
};

export default Product;
