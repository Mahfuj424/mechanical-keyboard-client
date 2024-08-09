import CustomButton from "@/components/ui/CustomButton";
import React from "react";

const CartTotals = ({ subtotal, shipping = "Free Shipping", total }) => {
  return (
    <div className="p-6 border rounded-md bg-white lg:w-[500px] mt-10">
      <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-gray-700">Cart Subtotal</span>
        <span className="font-medium text-gray-900">
          ${subtotal?.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-gray-700">Shipping</span>
        <span className="font-medium text-gray-900">{shipping}</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-lg font-bold">Total</span>
        <span className="text-lg font-bold">${total?.toFixed(2)}</span>
      </div>
      <div className="mt-6">
        <CustomButton
          name="Proceed To CheckOut"
          onClick={() => ""}
        ></CustomButton>
      </div>
    </div>
  );
};

export default CartTotals;
