/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import toast from "react-hot-toast";
import { ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cartSlice";
import { useDecreaseProductQuantityMutation } from "@/redux/api/baseApi";
import { loadStripe } from "@stripe/stripe-js";

const CheckOut = () => {
  const location = useLocation();
  const { total, items } = location.state || {};

  console.log("items", items);

  console.log("total", total);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [, setIsStripeModalOpen] = useState(false); // State for controlling the modal
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

    if (!isFormFilledOut()) {
      toast.error("Please fill out the form before placing an order.");
      return;
    }

    try {
      // Decrease the quantity of each product in the cart
      for (const item of cartItems) {
        await decreaseProductQuantity({
          id: item._id,
          quantity: item.quantity,
        }); // Pass both id and quantity
      }

      // Process the payment based on the selected method
      if (paymentMethod === "stripe") {
        await makePayment(); // Process Stripe payment
      } else if (paymentMethod === "cash") {
        toast.success("Order Successful");
        navigate("/product"); // Redirect to the product page
      }
    } catch (error: any) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order: " + error.message);
    }
  };

  // payment with stripe
  const makePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51P7dlcB60XUsFAl173CotM9I3Vu2tm4yIvsiHzlfMGbuqvaNbHenyflOnYqUHmCexpGWapEpebml1SDLW4qdvHEA00211GcA1I"
      );

      const body = { products: items };
      console.log(body);
      const headers = { "content-type": "application/json" };

      const response = await fetch(
        "https://machanical-keyboard-server.vercel.app/api/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      for (const item of cartItems) {
        await decreaseProductQuantity({
          id: item._id,
          quantity: item.quantity,
        }); // Pass both id and quantity
      }

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();
      const result = await stripe?.redirectToCheckout({
        sessionId: session?.id,
      });
      console.log(result);

      if (result?.error) {
        throw new Error(
          result.error.message || "Failed to redirect to checkout"
        );
      }
    } catch (error: any) {
      console.error("Stripe payment error:", error);
      toast.error("Failed to process payment: " + error.message);
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
