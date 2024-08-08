import React from "react";
import { FaCartPlus } from "react-icons/fa";

type TButtonProps = {
  name: string;
};

const AddCardButton = ({ name }: TButtonProps) => {
  return (
    <div>
      <button className="relative bg-red-500 z-0 text-white py-3 px-6 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:text-red-500">
        <span className="relative z-10 flex items-center">
         { name==='Add To Cart'? <FaCartPlus className="mr-2" /> : ''}  {name}
        </span>
        <div className="absolute inset-0 bg-red-500 transition-all duration-500 before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-x-100"></div>
      </button>
    </div>
  );
};

export default AddCardButton;
