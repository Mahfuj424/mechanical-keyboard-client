import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  onClose: () => void;
  onPaymentSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Error creating payment method:", error);
      } else {
        console.log("Payment method created successfully:", paymentMethod);
        // Call the onPaymentSuccess function to handle post-payment actions
        onPaymentSuccess();
        onClose();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-4 border border-gray-300 rounded-md" />
      <button
        type="submit"
        className="w-full bg-red-500 text-white p-2 rounded-md mt-4"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
