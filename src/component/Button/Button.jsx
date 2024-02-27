import React from "react";

export const Button = ({ type, disabled, name, className, click }) => {
  return (
    <button
      onClick={click}
      className={className}
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
