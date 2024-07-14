import React from "react";
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
    <div className="bg-gray-100 pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
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
          <span>{currNav}</span>
        </nav>
      </div>
    </div>
  );
};

export default SecondNavbar;
