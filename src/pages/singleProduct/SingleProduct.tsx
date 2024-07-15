import AddCardButton from "@/components/ui/AddCardButton";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import React from "react";
import { FaShieldAlt, FaUndo, FaMoneyBillWave } from "react-icons/fa";
import { ScrollRestoration, useParams } from "react-router-dom";

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

const product: TProductProps = {
  name: "Lorem ipsum fashion three",
  price: 16.72,
  originalPrice: 19.0,
  discount: 12,
  rating: 4.5,
  ratingCount: 7,
  description:
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.",
  warranty: "1 Year Brand Warranty",
  returnPolicy: "30 Days Return Policy",
  codAvailable: true,
  sku: "asdf103",
  category: "fashion, women",
  tags: ["fashion", "women"],
  images: ["https://i.postimg.cc/rFmVrKLv/keyboard4.jpg"],
};

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  return (
    <div>
      <ScrollRestoration />
      <SecondNavbar prevNav="product" currNav="Details" />
      <div className="lg:max-w-5xl mx-auto mt-10 lg:mt-0">
        <div className="md:flex px-4 lg:px-0 lg:gap-10">
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
              <div className="text-yellow-500">
                {Array.from(
                  { length: Math.round(product?.data?.rating) },
                  (_, i) => (
                    <span key={i}>&#9733;</span>
                  )
                )}
              </div>
            </div>
            <p className="mt-2 text-gray-600">{product?.data?.description}</p>
            <div className="mt-4">
              <div>Brand: A4TECH</div>
              <div>Quantity: {product?.data?.quantity}</div>
              <div>Category: Mechanical</div>
            </div>
            <div className="my-5">
              <AddCardButton name={"Add To Cart"} />
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
