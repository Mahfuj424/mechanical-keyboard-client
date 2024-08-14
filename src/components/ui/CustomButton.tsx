import { FaCartPlus } from "react-icons/fa";

type TButtonProps = {
  name: string;
  onClick: () => void;
};

const CustomButton = ({ name, onClick }: TButtonProps) => {
  return (
    <button
      className="relative bg-red-500 text-lg font-semibold text-white hover:text-red-500 hover:border border-red-500 py-3 px-6 rounded-md flex items-center justify-center overflow-hidden transition-all duration-500 group"
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center">
        {name === "Add To Cart" && <FaCartPlus className="mr-2" />}
        {name}
      </span>
      <div className="absolute inset-0 bg-white transition-transform duration-500 scale-x-0 origin-center group-hover:scale-x-100"></div>
    </button>
  );
};

export default CustomButton;
