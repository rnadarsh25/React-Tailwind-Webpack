import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type SideButtonProps = {
  text: string;
  route: string;
  name: string;
  isActive?: boolean;
  icon?: ReactNode | JSX.Element;
  onClick?: () => void;
};
function SideButton({
  text,
  route,
  name,
  isActive = false,
  icon,
  onClick,
}: SideButtonProps) {
  return (
    <Link to={route}>
      <div
        aria-hidden="true"
        onClick={onClick}
        id={name}
        className={`p-2 pl-2 px-12 rounded-md text-left hover:cursor-pointer flex items-center ${
          isActive ? "bg-primary" : ""
        }`}
      >
        {icon && icon}
        {text}
      </div>
    </Link>
  );
}

export default SideButton;
