/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
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
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
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
      className={`fixed z-10 w-full transition-colors duration-300 ${
        location?.pathname === "/" ? bgColor : "bg-gray-900"
      }`}
    >
      <div className="navbar max-w-7xl px-4 lg:px-0 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link to='/' className="flex items-center justify-center">
          <h1 className="text-6xl font-semibold text-red-500">E-</h1>
          <h1 className={`text-white text-2xl font-semibold mt-3`}>Market</h1>
        </Link>

        {/* Large screen */}
        <div className="hidden lg:flex items-center pt-2">
          <ul className="menu menu-horizontal flex px-1 space-x-7">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-red-500"
                        : "text-white"
                    } hover:text-red-500 transition-all`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link to={"/cart"} className="text-xl lg:block hidden text-white">
          <BsCart3 />
        </Link>

        {/* Mobile screen */}
        <div className="lg:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost text-white"
          >
            <SlMenu className="text-2xl" />
          </button>
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 h-full w-3/4 bg-white z-20 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col items-center justify-center`}
          >
            <Link to={"/cart"} className="text-xl flex items-center -ms-10 mb-5 gap-2 text-black">
              <BsCart3 /> cart
            </Link>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="text-xl text-black">
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
