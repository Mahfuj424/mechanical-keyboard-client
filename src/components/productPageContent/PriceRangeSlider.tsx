import React, { useEffect, useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (range: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(value[0]);
  const [maxValue, setMaxValue] = useState(value[1]);

  useEffect(() => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  }, [value]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(newValue);
    onChange([newValue, maxValue]);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(newValue);
    onChange([minValue, newValue]);
  };

  return (
    <div className="w-full pe-5">
      <div className="relative my-4  h-10">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => handleMinChange(e)}
          className="absolute w-full h-2 appearance-none bg-gray-300 rounded-lg cursor-pointer z-10 hidden"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => handleMaxChange(e)}
          className="absolute w-full h-2 appearance-none bg-gray-300 rounded-lg cursor-pointer "
        />
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700">Min: ${minValue}</span>
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="w-20 mt-1 border border-gray-300 rounded px-2 py-1"
            min={min}
            max={max - 1}
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700">Max: ${maxValue}</span>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-20 mt-1 border border-gray-300 rounded px-2 py-1"
            min={min + 1}
            max={max}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
