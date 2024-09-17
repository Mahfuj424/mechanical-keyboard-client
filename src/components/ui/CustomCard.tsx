import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"; // This supports half stars

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

const CustomCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }} // Start with smaller scale and below
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // End with normal scale and position
      transition={{ duration: 1.5 }}
      className="relative border rounded-md p-4 shadow-md group overflow-hidden"
    >
      <div className="relative overflow-hidden h-[230px] bg-gray-200">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="transition-all duration-300 mt-4">
        <h2 className="text-lg font-semibold">{product?.name}</h2>
        <div className="text-red-500 text-lg">
          <span className="text-black">Price: </span>${product?.price}
        </div>
        <div>
          <span className="text-lg">Brand:</span> {product?.brand}
        </div>
        <div>Quantity: {product?.quantity}</div>
        <div className="flex items-center">
          <ReactStars
            count={5}
            value={product?.rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </div>
      <Link to={`/card-details/${product?._id}`}>
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="text-white text-lg bg-red-500 px-6 py-2 rounded-full">
            See Details
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default CustomCard;
