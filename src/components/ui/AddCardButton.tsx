import { addToCart, selectCartItems } from "@/redux/features/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TProduct } from "./CustomCard";
import toast from "react-hot-toast";

type TButtonProps = {
  name: string;
  product: TProduct;
  quantity: number;
};

const AddCardButton = ({ name, product }: TButtonProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Find the product in the cart
  const cartItem = cartItems.find((item) => item?._id === product?._id);

  const handleAddToCart = () => {
    if (product?.quantity === 0) {
      toast.error("Product not available");
    } else if (cartItem && cartItem.quantity === product.quantity) {
      // If the product is already in the cart and the quantities match
      toast.error("You cannot add more of this product to the cart.");
    } else if (product?._id) {
      dispatch(addToCart(product));
      toast.success(
        "Item added to cart. Note: Cart data may be lost if you reload the page.",
        {
          duration: 5000, // Duration in milliseconds (5000ms = 5 seconds)
        }
      );
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="relative bg-red-500 text-white py-3 px-6 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group"
      >
        <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-red-500">
          {name === "Add To Cart" ? <FaCartPlus className="mr-2" /> : ""} {name}
        </span>
        <div className="absolute inset-0 bg-red-500 transition-transform duration-500 before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-center before:transition-transform before:duration-500 group-hover:before:scale-x-100"></div>
      </button>
    </div>
  );
};

export default AddCardButton;
