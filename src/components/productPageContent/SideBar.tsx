// SideBar.tsx

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import CustomButton from "../ui/CustomButton";

interface SideBarProps {
  onFilterChange: (newFilters: {
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
  }) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState("Default");

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    onFilterChange({ minPrice: newRange[0], maxPrice: newRange[1], sortBy });
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sortBy,
    });
  };

  const dropdownOptions = [
    "Default",
    "Price - High to Low",
    "Price - Low to High",
  ];

  return (
    <div className="max-w-[30%] w-full px-5">
      <div>
        <Dropdown
          options={dropdownOptions}
          defaultOption={sortBy}
          onSelect={handleSortChange}
        />
      </div>
      <div className="flex items-center mt-5 justify-center bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl mb-4">Price Range Slider</h1>
          <PriceRangeSlider min={0} max={200} onChange={handlePriceChange} />
          <div className="mt-4">
            <p className="">
              Selected Price Range: ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <CustomButton onClick={()=>('')} name={"Clear All Filter"} />
      </div>
    </div>
  );
};

export default SideBar;
