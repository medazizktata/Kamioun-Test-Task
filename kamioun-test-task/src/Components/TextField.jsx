import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

function TextField({
  children,
  placeholder,
  extraDetails = "",
  type = "text",
  className,
  required = false,
  value,
  onChange,
  isValid = true,
  errorMessage = ""
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={`${className}`}>
      <div className="my-2 flex flex-col flex-start gap-1">
        <h2 className="text-base font-semibold">{children}</h2>
        <span className="text-xs text-gray-500">{extraDetails}</span>
      </div>
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={`w-full p-2 pr-10 border rounded-lg ${!isValid ? "border-red-500" : "border-gray-500"}`}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <button
            className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? <IoEyeOff className="opacity-50" /> : <IoEye className="opacity-50" />}
          </button>
        )}
      </div>
      {!isValid && errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
    </div>
  );
}

export default TextField;
