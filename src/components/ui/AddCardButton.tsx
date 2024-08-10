import { addToCart } from "@/redux/features/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { TProduct } from "./CustomCard";
import toast from "react-hot-toast";
import { useState } from "react";

type TButtonProps = {
  name: string;
  product: TProduct;
  quantity: number;
};

const AddCardButton = ({ name, product, quantity }: TButtonProps) => {
  console.log(quantity);
  console.log("product =>", product?.quantity);
  const dispatch = useDispatch();
  // const [available, setAvailable]= useState('')

  const handleAddToCart = () => {
    if (product?.quantity === quantity) {
      toast.error("Quantity not available");
    } else {
      dispatch(addToCart(product));
      toast.success(
        "Item added to cart. Note: Cart data may be lost if you reload the page.",
        {
          duration: 6000, // Duration in milliseconds (6000ms = 6 seconds)
        }
      );
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="relative bg-red-500 z-0 text-white py-3 px-6 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:text-red-500"
      >
        <span className="relative z-10 flex items-center">
          {name === "Add To Cart" ? <FaCartPlus className="mr-2" /> : ""} {name}
        </span>
        <div className="absolute inset-0 bg-red-500 transition-all duration-500 before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-x-100"></div>
      </button>
    </div>
  );
};

export default AddCardButton;
