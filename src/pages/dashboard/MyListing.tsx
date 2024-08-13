import React, { useState, useEffect } from "react";
import EmptyState from "@/components/ui/shared/emptyState/EmptyState";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductDataRow from "./ProductDataRow";
import AddProductData from "../../modal/AddProductData";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MyListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Products per page
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: products, isLoading, isError } = useGetProductsQuery("");

  useEffect(() => {
    if (products?.data && Array.isArray(products.data)) {
      setFilteredProducts(products.data);
    }
  }, [products]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className="lg:max-w-7xl mx-auto px-4 xl:px-0 mt-5">
        <AddProductData />
      </div>
      {isLoading ? (
        <div className="flex justify-center h-screen w-full mt-14">
          <ScaleLoader color="#ff0000" />
        </div>
      ) : (
        <div>
          {isError || filteredProducts?.length === 0 ? (
            <EmptyState
              message={"No Keyboard Data Available!"}
              address={""}
              name={"Add Product"}
            />
          ) : (
            <div className="w-full max-w-7xl px-4 xl:px-0 mx-auto">
              <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                          >
                            Brand
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                          >
                            Delete
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                          >
                            Update
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentProducts?.map((product) => (
                          <ProductDataRow key={product._id} product={product} />
                        ))}
                      </tbody>
                    </table>
                    
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
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyListings;
