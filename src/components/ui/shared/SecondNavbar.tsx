import React from "react";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  return (
    <div className="bg-gray-100 pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Shop</h1>
        <nav className="text-gray-600">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2"></span>
          <span>Shop</span>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
