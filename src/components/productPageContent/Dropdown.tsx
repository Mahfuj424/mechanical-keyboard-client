import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full ps-4 lg:ps-0">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between items-center w-11/12 rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
        >
          {selectedOption}
          <FaChevronDown className="ml-2 h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right z-10 absolute right-0 mt-2 w-[92%] me-7 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`${
                  selectedOption === option
                    ? "bg-red-500 text-white"
                    : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left hover:bg-gray-500 hover:text-white`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
