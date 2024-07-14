import React, { useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange: (range: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
    onChange([value, maxValue]);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
    onChange([minValue, value]);
  };

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isMin: boolean
  ) => {
    if (isMin) {
      const value = Math.min(Number(event.target.value), maxValue - 1);
      setMinValue(value);
      onChange([value, maxValue]);
    } else {
      const value = Math.max(Number(event.target.value), minValue + 1);
      setMaxValue(value);
      onChange([minValue, value]);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="relative my-4 h-10">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => handleSliderChange(e, false)}
          className="absolute w-full h-2 appearance-none bg-gray-300 rounded-lg cursor-pointer z-10 hidden"
          style={{ zIndex: minValue > max - 100 ? 1 : 0 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => handleSliderChange(e, false)}
          className="absolute w-full h-2 appearance-none bg-gray-300 rounded-lg cursor-pointer "
          style={{ zIndex: maxValue > min - 100 ? 1 : 0 }}
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
