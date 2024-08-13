import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";

// Replace with your actual publishable key from Stripe Dashboard
const stripePromise = loadStripe(
  "pk_test_51PnD22P21b7mK6qGGF66KRD1mIcTnML5lQRt4LhzGzdYm7C1jklSLGvpB9waU4AJPqNhutRoa5HWwCzPXpScf8Eu00EjC7TRIi"
);

interface StripeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

const StripeModal: React.FC<StripeModalProps> = ({ isOpen, onClose, onPaymentSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay with opacity */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white p-6 rounded shadow-lg w-96 z-10">
        <button className="text-red-500 mb-4" onClick={onClose}>
          Close
        </button>
        <Elements stripe={stripePromise}>
          <CheckoutForm onClose={onClose} onPaymentSuccess={onPaymentSuccess} />
        </Elements>
      </div>
    </div>
  );
};

export default StripeModal;
