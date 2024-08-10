import { useSelector, useDispatch } from "react-redux";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import toast from "react-hot-toast";
import Cart from "./Cart";
import CartTotals from "./CartTotals";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { useEffect } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart?.items);
  console.log(items); // Correctly typed if using TypeScript

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    toast.error("Removed from Cart");
  };

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
    toast.success("Increased quantity");
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
    toast.success("Decreased quantity");
  };

  const calculateTotal = () => {
    return items?.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const warningMessage =
        "Your cart data may be lost if you reload the page. Are you sure you want to leave?";
      event.preventDefault();
      event.returnValue = warningMessage; // For most browsers
      return warningMessage; // For some browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <SecondNavbar prevNav="product" currNav="Shopping Cart" />
      <div className="px-4 xl:px-0 py-10 ">
        <div>
          <Cart
            items={items}
            onRemove={handleRemove}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
        <div className="lg:max-w-7xl mx-auto flex justify-end">
          <CartTotals subtotal={calculateTotal()} total={calculateTotal()} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
