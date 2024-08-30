import React, { useState, useEffect } from "react";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import toast from "react-hot-toast";
import { ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cartSlice";
import { useDecreaseProductQuantityMutation } from "@/redux/api/baseApi";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";

const CheckOut = () => {
  const location = useLocation();
  const { total, items } = location.state || {};

  console.log("items", items);

  console.log("total", total);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false); // State for controlling the modal
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const [decreaseProductQuantity] = useDecreaseProductQuantityMutation();

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

  const isFormFilledOut = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.address
    );
  };

  const handlePaymentMethodChange = (method: string) => {
    if (!isFormFilledOut()) {
      toast.error(
        "Please fill out the form before selecting a payment method."
      );
      return;
    }

    if (method === "stripe") {
      setIsStripeModalOpen(true); // Open the Stripe modal when Stripe is selected
      setPaymentMethod(null); // Prevent the "Place Order" button from showing
    } else {
      setPaymentMethod(method); // Set the payment method to "cash" for displaying the "Place Order" button
    }
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const delivery = { ...formData, paymentMethod };

    try {
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

  // Function to handle payment success from Stripe
  // const handleStripePaymentSuccess = async () => {
  //   try {
  //     // Decrease product quantities
  //     for (const item of cartItems) {
  //       for (let i = 0; i < item.quantity; i++) {
  //         await decreaseProductQuantity(item._id);
  //       }
  //     }

  //     toast.success("Payment Successful");
  //     navigate("/product");
  //   } catch (error) {
  //     console.error("Error processing payment:", error);
  //     toast.error("Failed to process payment");
  //   } finally {
  //     setIsStripeModalOpen(false);
  //   }
  // };

  // payment with stripe
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51P7dlcB60XUsFAl173CotM9I3Vu2tm4yIvsiHzlfMGbuqvaNbHenyflOnYqUHmCexpGWapEpebml1SDLW4qdvHEA00211GcA1I"
    );
    const body = {
      products: items,
    };

    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      "http://localhost:5000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe?.redirectToCheckout({
      sessionId: session?.id,
    });
    for (const item of cartItems) {
      for (let i = 0; i < item.quantity; i++) {
        await decreaseProductQuantity(item._id);
      }
    }

    if (result?.error) {
      console.log("stripe error", result?.error);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const warningMessage =
        "Your cart data may be lost if you reload the page. Are you sure you want to leave?";
      event.preventDefault();
      event.returnValue = warningMessage;
      return warningMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <ScrollRestoration />
      <SecondNavbar prevNav="cart" currNav="CheckOut" />
      <div className="max-w-md mx-auto p-4 z-0">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">Checkout</h2>
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 160 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              className="w-full border border-gray-300 p-2 rounded-md focus:border-red-500"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </motion.div>

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
            <div onClick={makePayment}>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  onChange={() => handlePaymentMethodChange("stripe")}
                  className="mr-2"
                />
                Pay Stripe
              </label>
            </div>
          </div>

          {paymentMethod === "cash" && (
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
