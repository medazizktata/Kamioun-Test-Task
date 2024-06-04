import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function DropDownMenu({
  children,
  options = [],
  extraDetails = "",
  placeholder = "Please Select",
  className,
  value,
  onChange,
  isValid = true,
  errorMessage = ""
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <div className="my-2 flex justify-between items-center">
        <h2 className="text-base font-semibold">{children}</h2>
        <span className="text-xs text-gray-500">{extraDetails}</span>
      </div>
      <div className="relative w-full">
        <div
          onClick={toggleOpen}
          className={`w-full p-2 border ${isValid ? 'border-gray-500' : 'border-red-500'} rounded-lg hover:cursor-pointer pr-10 relative`}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <IoIosArrowDown />
          </span>
        </div>
        <div
          className={`absolute w-full mt-1 bg-white border border-gray-500 rounded-lg transition-all duration-300 ease-in-out overflow-hidden z-10 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
      {!isValid && errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
    </div>
  );
}

export default DropDownMenu;
