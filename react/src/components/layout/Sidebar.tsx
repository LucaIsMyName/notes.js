import React from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  return (
    <div
      data-component="sidebar"
      className={`${className}`}>
      <h1 className="text-3xl">Sidebar</h1>
    </div>
  );
};

export default Sidebar;
