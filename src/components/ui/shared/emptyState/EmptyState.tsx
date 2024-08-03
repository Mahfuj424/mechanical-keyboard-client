import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton";

type TEmptyStateProps = {
  message: string;
  address: string;
  name: string;
};

const EmptyState = ({ message, address, name }:TEmptyStateProps) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
        <CustomButton name={name} onClick={()=>('')}/>
      </Link>
    </div>
  );
};

export default EmptyState;
