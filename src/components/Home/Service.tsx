import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";
import { TbMessage2Question } from "react-icons/tb";

const Service = () => {
  return (
    <div className="bg-white p-10 shadow-md rounded-xl max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:space-y-0 space-y-5">
        <div className="h-52 w-52 bg-gray-100 rounded-md shadow-md flex justify-center items-center group mx-auto">
          <div className="text-center">
            <TbTruckDelivery className="size-16 ms-8 text-black group-hover:text-red-500 duration-300 transition-all" />
            <h1 className="text-xl font-bold mb-2">Free Shipping</h1>
            <p>Order Our $500</p>
          </div>
        </div>
        <div className="h-52 w-52 bg-gray-100 rounded-md flex shadow-md justify-center items-center group mx-auto">
          <div className="text-center">
            <MdOutlinePayment className="size-16 ms-8 text-black group-hover:text-red-500 duration-300 transition-all" />
            <h1 className="text-xl font-bold mb-2">Quick Payment</h1>
            <p>100% Secure</p>
          </div>
        </div>
        <div className="h-52 w-52 bg-gray-100 rounded-md flex shadow-md justify-center items-center group mx-auto">
          <div className="text-center">
            <LuCircleDollarSign className="size-16 ms-8 text-black group-hover:text-red-500 duration-300 transition-all" />
            <h1 className="text-xl font-bold mb-2">Big Cashback</h1>
            <p>Over 40% Cashback</p>
          </div>
        </div>
        <div className="h-52 w-52 bg-gray-100 rounded-md flex shadow-md justify-center items-center group mx-auto">
          <div className="text-center">
            <TbMessage2Question className="size-16 ms-8 text-black group-hover:text-red-500 duration-300 transition-all" />
            <h1 className="text-xl font-bold mb-2">24/7 Support</h1>
            <p>Ready For You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
