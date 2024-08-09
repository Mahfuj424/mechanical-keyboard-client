import AddCardButton from "@/components/ui/AddCardButton";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { FaShieldAlt, FaUndo, FaMoneyBillWave } from "react-icons/fa";
import { ScrollRestoration, useParams } from "react-router-dom";
import React from "react";

type TProductProps = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  ratingCount: number;
  description: string;
  warranty: string;
  returnPolicy: string;
  codAvailable: boolean;
  sku: string;
  category: string;
  tags: string[];
  images: string[];
};

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useGetProductByIdQuery(id);
  console.log(product);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;
    const percentage = Math.round(decimalPart * 100);

    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative">
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.284 7.02h7.293c.969 0 1.371 1.24.588 1.81l-5.897 4.285 2.284 7.02c.3.921-.755 1.688-1.541 1.097L12 18.184l-5.897 4.285c-.786.591-1.841-.176-1.541-1.097l2.284-7.02L.949 11.757c-.783-.57-.381-1.81.588-1.81h7.293l2.284-7.02z"
                />
              </svg>
            </div>
            {index < fullStars && (
              <div className="absolute inset-0 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.284 7.02h7.293c.969 0 1.371 1.24.588 1.81l-5.897 4.285 2.284 7.02c.3.921-.755 1.688-1.541 1.097L12 18.184l-5.897 4.285c-.786.591-1.841-.176-1.541-1.097l2.284-7.02L.949 11.757c-.783-.57-.381-1.81.588-1.81h7.293l2.284-7.02z" />
                </svg>
              </div>
            )}
            {index === fullStars && percentage > 0 && (
              <div
                className="absolute inset-0 text-yellow-500 overflow-hidden"
                style={{ width: `${percentage}%` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.284 7.02h7.293c.969 0 1.371 1.24.588 1.81l-5.897 4.285 2.284 7.02c.3.921-.755 1.688-1.541 1.097L12 18.184l-5.897 4.285c-.786.591-1.841-.176-1.541-1.097l2.284-7.02L.949 11.757c-.783-.57-.381-1.81.588-1.81h7.293l2.284-7.02z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <ScrollRestoration />
      <SecondNavbar prevNav="product" currNav="Details" />
      <div className="lg:max-w-5xl mx-auto mt-10 lg:mt-0">
        <div className="md:flex px-4 xl:px-0 lg:gap-10">
          <div className="md:shrink-0 flex items-center">
            <img
              className="h-48 w-full object-cover rounded-md transition-transform duration-500 hover:scale-105 md:h-3/4 md:w-[400px]"
              src={product?.data?.image}
              alt={product?.data?.name}
            />
          </div>
          <div className="p-8">
            <div className="tracking-wide text-lg font-semibold">
              {product?.data?.name}
            </div>
            <div className="mt-2">
              <span className="text-xl text-red-600">
                ${product?.data?.price.toFixed(2)}
              </span>
            </div>
            <div className="mt-2 flex items-center">
              {renderStars(product?.data?.rating || 0)}
            </div>
            <p className="mt-2 text-gray-600">{product?.data?.description}</p>
            <div className="mt-4">
              <div>Brand: A4TECH</div>
              <div>Quantity: {product?.data?.quantity}</div>
              <div>Category: Mechanical</div>
            </div>
            <div className="my-5">
              <AddCardButton name={"Add To Cart"} product={product?.data}/>
            </div>
            <div className="mt-4 text-gray-500">
              <div className="flex items-center">
                <FaShieldAlt className="text-gray-500 mr-2" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center mt-2">
                <FaUndo className="text-gray-500 mr-2" />
                <span>30 Days Return Policy</span>
              </div>
              <div className="flex items-center mt-2">
                <FaMoneyBillWave className="text-gray-500 mr-2" />
                <span>Cash on Delivery available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
