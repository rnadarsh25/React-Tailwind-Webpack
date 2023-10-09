import React from "react";
import { getNameInitials } from "../utils/helpers";

function Avatar({ text }: { text: string }) {
  return (
    <div className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-full bg-red-200">
      {getNameInitials(text)}
    </div>
  );
}

export default Avatar;
