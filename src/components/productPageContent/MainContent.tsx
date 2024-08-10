import React, { useState, useEffect, useCallback } from "react";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { FaSearch } from "react-icons/fa";
import CustomCard from "../ui/CustomCard";
import ScaleLoader from "react-spinners/ScaleLoader";
import EmptyState from "../ui/shared/emptyState/EmptyState";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface MainContentProps {
  filterOptions: {
    minPrice?: number;
    maxPrice?: number;
    sortBy: string;
    searchTerm: string;
  };
}

const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const MainContent: React.FC<MainContentProps> = ({ filterOptions }) => {
  const [searchTerm, setSearchTerm] = useState(filterOptions.searchTerm);
  const [isFocused, setIsFocused] = useState(false);
  const [filters, setFilters] = useState(filterOptions);

  const {
    data: products = [],
    isError,
    isLoading,
    refetch,
  } = useGetProductsQuery(filters);

  const handleSearch = useCallback(
    debounce(() => {
      setFilters({ ...filters, searchTerm });
      refetch();
    }, 200),
    [searchTerm, filters, refetch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="lg:max-w-[75%] w-full px-4 xl:px-0">
      <div
        className={`flex items-center w-full border rounded-md mt-10 lg:mt-0 px-4 py-2 bg-white ${
          isFocused ? "border-red-500" : "border-gray-300"
        }`}
      >
        <FaSearch
          className={`w-6 h-6 mr-2 ${
            isFocused ? "text-red-500" : "text-gray-500"
          }`}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="outline-none w-full bg-transparent placeholder-gray-500 focus:placeholder-white text-gray-700"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center w-full mt-14">
          <ScaleLoader color="#ff0000" />
        </div>
      ) : (
        <div>
          {isError ? (
            <EmptyState
              message={"No Data Found"}
              name={"Back to Home"}
              address={"/"}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto mt-8">
              {products?.data?.map((product: Product) => (
                <CustomCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainContent;
