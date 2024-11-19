import React from "react";

interface MainProps {
  className?: string;
  workspace: { title: string; id: number; description: string };
  children?: React.ReactNode;
}

const Main = ({ className = "", workspace, children }: MainProps) => {
  return (
    <div
      data-component="main"
      className={`${className}`}>
      <h1 className="text-gray-500">{workspace.title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Main;
