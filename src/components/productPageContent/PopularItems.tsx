import React from "react";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularItems = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery({});

  // Slice the first 5 products for display
  const popularProducts = products?.data?.slice(0, 3);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading popular items.</div>;
  }

  return (
    <div className="p-4 hidden lg:block">
      <h3 className="text-xl font-semibold mb-4">Popular Items</h3>
      <ul>
        {popularProducts.map((product) => (
          <li key={product.id} className="flex items-center mb-4 ">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
            <Link to={`/card-details/${product?._id}`}><h4 className="hover:underline font-semibold">{product.name}</h4></Link>
              <div className="flex items-center">
                <span className="text-red-500 font-bold text-lg mr-2">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < Math.floor(product.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularItems;
