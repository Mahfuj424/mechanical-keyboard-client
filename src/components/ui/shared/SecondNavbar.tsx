import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

type TNavProps = {
  currNav: string;
  prevNav: string;
};

const SecondNavbar = ({ currNav, prevNav }: TNavProps) => {
  const getLinkPath = (nav: string) =>
    nav.toLowerCase() === "home" ? "/" : `/${nav}`;

  return (
    <div className="bg-gray-100 pt-28 pb-10">
      <div className="w-full flex justify-between max-w-7xl px-4 md:px-0 mx-auto py-10">
        <h1 className="text-3xl font-bold">{currNav}</h1>
        <nav className="text-gray-600 flex items-center">
          <Link
            to={getLinkPath(prevNav)}
            className="hover:underline text-black"
          >
            {prevNav}
          </Link>
          <span className="mx-2">
            <FaAngleRight />
          </span>
          <span className="text-red-500 font-semibold">{currNav}</span>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
