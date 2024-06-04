import React, { useState } from "react";

function Checkbox({ children, checked, onChange }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={`rounded-md h-5 w-5 mr-2 hover:cursor-pointer transition-transform duration-300 ${
          checked ? "scale-125 bg-blue-500" : "scale-100"
        }`}
        checked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </div>
  );
}

export default Checkbox;
