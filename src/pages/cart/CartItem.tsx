import { useGetProductsQuery } from "@/redux/api/baseApi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

type CartItemProps = {
  item: {
    _id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

const CartItem = ({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  const { data } = useGetProductsQuery("");

  // Find the product details from the fetched data
  const product = data?.data?.find((product) => product._id === item._id);

  // Define the maximum quantity based on the fetched product details
  const maxQuantity = product?.quantity || Infinity; // Use Infinity if maxQuantity is not available

  return (
    <tr className="border-b">
      <td className="p-4 flex items-center">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-20 h-20 object-cover hidden md:block"
        />
        <div className="p-4">
          <Link to={`/card-details/${item?._id}`}>
            <p className="text-gray-900 hover:underline font-semibold whitespace-no-wrap">
              {item?.name}
            </p>
          </Link>
        </div>
      </td>

      <td className="p-4">
        <div className="text-sm font-medium text-gray-900">
          ${item?.price?.toFixed(2)}
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center justify-center">
          <button
            className="text-gray-500 hover:text-gray-700 px-2"
            onClick={() => {
              if (item?.quantity === 1) {
                onRemove(item?._id); // Call the remove function if quantity is 1
              } else {
                onDecrease(item?._id); // Otherwise, decrease the quantity
              }
            }}
          >
            <FaMinus />
          </button>
          <input
            type="text"
            value={item?.quantity === maxQuantity ? maxQuantity : item?.quantity }
            readOnly
            className="w-12 text-center border border-gray-300 rounded px-2"
          />
          <button
            className="text-gray-500 hover:text-gray-700 px-2"
            onClick={() => {
              if (item?.quantity < maxQuantity) {
                onIncrease(item?._id); // Only increase if quantity is less than maxQuantity
              }
            }}
          >
            <FaPlus />
          </button>
        </div>
      </td>
      <td className="p-4">
        <div className="text-sm font-medium text-gray-900">
          ${(item?.price * item?.quantity)?.toFixed(2)}
        </div>
      </td>
      <td className="p-4 text-center">
        <button
          className="text-red-500 hover:text-red-600 text-2xl font-semibold"
          onClick={() => onRemove(item?._id)}
        >
          <RxCross2 />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
