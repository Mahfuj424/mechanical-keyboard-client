import { useGetProductsQuery } from "@/redux/api/baseApi";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import CustomCard from "../ui/CustomCard";
import ScaleLoader from "react-spinners/ScaleLoader";

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

  useEffect(() => {
    setFilters(filterOptions);
    setSearchTerm(filterOptions.searchTerm);
  }, [filterOptions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = () => {
    setFilters({ ...filters, searchTerm });
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  return (
    <div className="lg:max-w-[75%] w-full px-4 lg:px-0">
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
          className="outline-none w-full bg-transparent placeholder-gray-500 focus:placeholder-white text-gray-700"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
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
            <div className="flex justify-center items-center w-full mt-14">
              <h1 className="text-3xl font-bold text-center text-red-500">
                NO DATA FOUND
              </h1>
            </div>
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
