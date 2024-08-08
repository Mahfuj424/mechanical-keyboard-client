import AddCardButton from "@/components/ui/AddCardButton";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { FaShieldAlt, FaUndo, FaMoneyBillWave } from "react-icons/fa";
import Rating from "react-rating-stars-component";
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



const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useGetProductByIdQuery(id);
  console.log(product);

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
              <Rating
                count={5}
                value={product?.data?.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
                isHalf={true} // Enable half-stars
              />
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
