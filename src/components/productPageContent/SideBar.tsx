import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import CustomButton from "../ui/CustomButton";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import PopularItems from "./PopularItems";

interface SideBarProps {
  onFilterChange: (newFilters: {
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    searchTerm?: string;
  }) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onFilterChange }) => {
  const { data: productsData } = useGetProductsQuery("");
  const products = productsData?.data || []; // Adjust based on the correct path to the array

  const maxPrice =
    products.length > 0
      ? Math.floor(
          products.reduce((max, product) => Math.max(max, product.price), 0)
        )
      : 200;

  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sortBy, setSortBy] = useState("Default");

  // Update priceRange whenever maxPrice changes
  useEffect(() => {
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);

  useEffect(() => {
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sortBy,
    });
  }, [priceRange, sortBy]);

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange([Math.floor(newRange[0]), Math.floor(newRange[1])]);
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const handleClearFilters = () => {
    setPriceRange([0, maxPrice]);
    setSortBy("Default");
    onFilterChange({
      minPrice: 0,
      maxPrice: maxPrice,
      sortBy: "Default",
      searchTerm: "",
    });
  };

  const dropdownOptions = [
    "Default",
    "Price - High to Low",
    "Price - Low to High",
  ];
  console.log(maxPrice);
  console.log(productsData);

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
            max={maxPrice}
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
      <div className="mt-5 flex justify-center border-b pb-10">
        <CustomButton onClick={handleClearFilters} name={"Clear All Filter"} />
      </div>
      <PopularItems />
      <div className="border-t pt-5 hidden lg:block">
        <div
          className="relative w-[70%] h-96 bg-cover bg-center mx-auto "
          style={{
            backgroundImage: `url("https://i.postimg.cc/RCk4kZds/6272fbd9-bc8f-422f-be49-4c8bd84fdf8f-jpg.webp")`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Optional: For dark overlay */}
          <div className="absolute bottom-10 left-10 text-white space-y-3">
            <h2 className="text-lg font-bold">NEW COLLECTION</h2>
            <h3 className="text-2xl font-bold">SALE 30% OFF</h3>
            <CustomButton name="SHOP NOW" onClick={()=>''}></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
