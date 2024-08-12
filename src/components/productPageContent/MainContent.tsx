import React, { useState, useEffect, useCallback } from "react";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
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

const MainContent: React.FC<MainContentProps> = ({ filterOptions }) => {
  const [searchTerm, setSearchTerm] = useState(filterOptions.searchTerm);
  const [isFocused, setIsFocused] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Products per page

  const {
    data: products = [],
    isError,
    isLoading,
  } = useGetProductsQuery({
    ...filterOptions,
  });

  useEffect(() => {
    setFilteredProducts(products?.data); // Set the products once fetched
  }, [products]);

  const handleSearch = useCallback(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after search
  }, [products, searchTerm]);

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

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  console.log(filteredProducts);
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
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
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto mt-8">
                {currentProducts?.map((product: Product) => (
                  <CustomCard key={product.id} product={product} />
                ))}
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center items-center mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 bg-red-500 text-white rounded-l-md"
                >
                  <FaArrowLeft />
                </button>
                <span className="mx-4 flex items-center">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-3 py-1 mx-1 rounded-md ${
                        currentPage === index + 1
                          ? "bg-red-500 text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 bg-red-500 text-white rounded-r-md"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainContent;
