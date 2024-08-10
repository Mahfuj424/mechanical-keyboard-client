import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating-stars-component";
import AddCardButton from "./AddCardButton";
import { Link } from "react-router-dom";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  brand: string;
  quantity: number;
};

interface ProductCardProps {
  product: TProduct;
}

const CustomCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative border rounded-md p-4 shadow-md group overflow-hidden">
      <div className="relative overflow-hidden h-[300px]">
        {/* Set a fixed height */}
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:blur-sm"
        />
        <Link
          to={`/card-details/${product?._id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <IoEyeOutline className="text-red-500 bg-white rounded-full font-bold cursor-pointer text-3xl" />
        </Link>
      </div>
      <div className=" transition-all duration-300">
        <h2 className="text-lg text-center font-semibold mt-4">
          {product?.name}
        </h2>
        <div className="flex items-center justify-center mt-2">
          <span className="text-red-500 text-xl font-bold">
            ${product?.price}
          </span>
          <span className="text-gray-500 text-lg line-through ml-2">200</span>
        </div>
        <div className="text-lg text-center">
          <span className="text-lg font-semibold">Brand:</span> {product?.brand}
        </div>
        <div className="text-lg text-center">Quantity: {product?.quantity}</div>
        <div className="flex items-center justify-center mt-2">
          <Rating
            count={5}
            value={product?.rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
            isHalf={true} // Enable half-stars
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AddCardButton name={"Add To Cart"} product={product} quantity={0}/>
      </div>
    </div>
  );
};

export default CustomCard;
