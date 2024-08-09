import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import CustomButton from "../ui/CustomButton";

interface SideBarProps {
  onFilterChange: (newFilters: {
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    searchTerm?: string;
  }) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState("Default");

  useEffect(() => {
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sortBy,
    });
  }, [priceRange, sortBy]);

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const handleClearFilters = () => {
    setPriceRange([0, 200]);
    setSortBy("Default");
    onFilterChange({
      minPrice: 0,
      maxPrice: 200,
      sortBy: "Default",
      searchTerm: "",
    });
  };

  const dropdownOptions = [
    "Default",
    "Price - High to Low",
    "Price - Low to High",
  ];

  return (
    <div className="lg:max-w-[30%] w-full">
      <div>
        <Dropdown
          options={dropdownOptions}
          selectedOption={sortBy}
          onSelect={handleSortChange}
        />
      </div>
      <div className="flex items-center mt-5 px-4 xl:px-0 justify-center bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl mb-4">Price Range Slider</h1>
          <PriceRangeSlider
            min={0}
            max={200}
            value={priceRange}
            onChange={handlePriceChange}
          />
          <div className="mt-4">
            <p className="">
              Selected Price Range: ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <CustomButton onClick={handleClearFilters} name={"Clear All Filter"} />
      </div>
    </div>
  );
};

export default SideBar;
