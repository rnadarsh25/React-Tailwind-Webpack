import React from "react";

function Header() {
  return (
    <div className="p-6 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold baseline max-w-sm ">@Byte</h1>
        <p className="text-base italic text-gray-400">
          Present your thoughts{" "}
          <span className="font-bold text-blue-700 text-base">bit by bit</span>
        </p>
      </div>
      <div>
        <h1 className="max-w-sm hover:cursor-pointer">Logout</h1>
      </div>
    </div>
  );
}

export default Header;
