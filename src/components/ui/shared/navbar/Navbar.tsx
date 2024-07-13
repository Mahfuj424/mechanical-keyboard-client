/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Define the routes that should have a white background initially
  const whiteBgRoutes = ["/product", "/about", "/contact", "/dashboard"];

  // Set the initial background color based on the current pathname
  const [bgColor, setBgColor] = useState(
    whiteBgRoutes.includes(location.pathname) ? "bg-white" : "bg-transparent"
  );

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-gray-900");
    } else {
      setBgColor(
        whiteBgRoutes.includes(location.pathname)
          ? "bg-white"
          : "bg-transparent"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { title: "Home", url: "/" },
    { title: "Product", url: "/product" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <div
      className={`fixed z-10 w-full transition-colors duration-300 ${bgColor}`}
    >
      <div className="navbar max-w-[1200px] mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div>
          <img className="w-40 h-12" src="path_to_your_logo" alt="Logo" />
        </div>

        {/* Large screen */}
        <div className="hidden lg:flex items-center pt-2">
          <ul className="menu menu-horizontal flex px-1 space-x-7">
            {navItems.map((item, index) => (
              <li className="text-xl" key={index}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-red-500 border-b-4 border-red-500" : ""
                    } ${
                      location.pathname === "/" ? "text-white" : "text-black"
                    } hover:text-red-500 transition-all`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`text-xl ${
            location.pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          cart
        </div>

        {/* Mobile screen */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`btn btn-ghost ${
              location.pathname === "/" ? "text-white" : "text-black"
            }`}
          >
            <SlMenu className="text-2xl" />
          </button>
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 h-full p-5 w-64 shadow-lg z-20 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="space-y-4 mt-16">
              {navItems.map((item, index) => (
                <li key={index} className="text-black">
                  <NavLink
                    to={item.url}
                    className="flex items-center gap-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
