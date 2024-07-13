
import { TbTruckDelivery } from "react-icons/tb";

const Service = () => {
  return (
    <div className="">
      <div className="flex gap-5 bg-white p-10 shadow-2xl rounded-xl">
        <div className="h-52 w-52 bg-gray-100 rounded-md flex justify-center items-center">
          <div>
            <TbTruckDelivery className="size-16 ms-6" />
            <h1 className="text-xl font-bold">Free Shipping</h1>
          </div>
        </div>
        <div className="h-52 w-52 bg-gray-100 rounded-md flex justify-center items-center">
          <div>
            <TbTruckDelivery className="size-16 ms-6" />
            <h1 className="text-xl font-bold">Free Shipping</h1>
          </div>
        </div>
        <div className="h-52 w-52 bg-gray-100 rounded-md flex justify-center items-center">
          <div>
            <TbTruckDelivery className="size-16 ms-6" />
            <h1 className="text-xl font-bold">Free Shipping</h1>
          </div>
        </div>
        <div className="h-52 w-52 bg-gray-100 rounded-md flex justify-center items-center">
          <div>
            <TbTruckDelivery className="size-16 ms-6" />
            <h1 className="text-xl font-bold">Free Shipping</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
