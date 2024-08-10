import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="max-w-7xl mx-auto overflow-x-auto">
      <table className="min-w-full bg-white border-gray-200">
        <thead className="border-y-2">
          <tr>
            <th className="p-4 text-center font-bold text-gray-700">Product</th>
            <th className="p-4 text-left font-bold text-gray-700">Price</th>
            <th className="p-4 text-center font-bold text-gray-700">
              Quantity
            </th>
            <th className="p-4 text-left font-bold text-gray-700">Total</th>
            <th className="p-4 text-center font-bold text-gray-700">Remove</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <CartItem
              key={item?._id}
              item={item}
              onRemove={onRemove}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
