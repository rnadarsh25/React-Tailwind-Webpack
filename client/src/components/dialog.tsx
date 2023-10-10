import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Dialog({
  children,
  onClose,
  title,
}: {
  children: ReactNode;
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="absolute bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 w-screen h-screen grid place-items-center">
      <div className="flex items-start justify-between p-3 pt-3 rounded-md space-x-2  bg-white text-black w-3/12 h-2/4">
        <div className="flex flex-col ml-5 w-11/12 gap-7 px-10">
          <h1 className="text-3xl baseline">{title}</h1>
          {children}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 mt-1 rounded-full hover:bg-gray-200"
        >
          <XMarkIcon className="w-5 h-5 hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Dialog;
