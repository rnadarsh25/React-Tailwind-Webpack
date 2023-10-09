import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
};
function Button({ children, onClick, isActive = false }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full space-x-2  rounded p-2 px-6  items-center justify-center ${
        isActive ? "bg-red-300" : "bg-dark4"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
