import React, { useEffect, useState } from "react";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cartSlice"; // আপনার তৈরি করা হুক
import { useDecreaseProductQuantityMutation } from "@/redux/api/baseApi";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const [decreaseProductQuantity] = useDecreaseProductQuantityMutation(); // নতুন হুক

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const delivery = { ...formData, paymentMethod };

    try {
      // পণ্যগুলোর পরিমাণ কমানোর জন্য ব্যাকএন্ডে রিকোয়েস্ট পাঠান
      for (const item of cartItems) {
        for (let i = 0; i < item.quantity; i++) {
          await decreaseProductQuantity(item._id);
        }
      }

      toast.success("Order Successful");
      navigate("/product");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order");
    }
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
      <SecondNavbar prevNav="cart" currNav="CheckOut" />
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">Checkout</h2>
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-md focus:border-red-500"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-md focus:border-red-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="w-full border border-gray-300 p-2 rounded-md focus:border-red-500"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              className="w-full border border-gray-300 p-2 rounded-md focus:border-red-500"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Choose Your Payment Method
          </h3>
          <div className="space-y-2">
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  onChange={() => handlePaymentMethodChange("cash")}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  onChange={() => handlePaymentMethodChange("online")}
                  className="mr-2"
                />
                Stripe
              </label>
            </div>
          </div>

          {paymentMethod && (
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-2 rounded-md mt-4"
            >
              Place Order
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
