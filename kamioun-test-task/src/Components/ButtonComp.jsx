import React from "react";

const ButtonComp = ({ children, type = "button", onClick }) => {
  return (
    <button
      className="w-full bg-blue-500 hover:bg-blue-700 transition ease-in-out duration-400 text-white py-2 px-4 rounded-lg"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComp;
