import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  onClick: () => void;
}

const Button = ({ className = "", title, children, onClick }: ButtonProps) => {
  return (
    <button
      title={title}
      data-component="button"
      className={`border-2 rounded px-3 py-1 ${className}`}
      onClick={onClick}>
      {children || "Button"}
    </button>
  );
};

export default Button;
