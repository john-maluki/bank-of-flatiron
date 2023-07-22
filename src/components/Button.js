import React from "react";

const Button = ({ textContent, type, className, onAction }) => {
  return (
    <button type={type} className={className} onClick={onAction}>
      {textContent}
    </button>
  );
};

export default Button;
