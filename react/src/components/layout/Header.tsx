import React from "react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  return (
    <div
      data-component="header"
      className={`${className}`}>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
