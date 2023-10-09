import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import DisplayUser from "./display_user";

function SearchComponent() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Search</h1>
      <div className="flex px-5 items-center rounded-lg bg-dark4">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          placeholder="Search..."
          className="w-full p-3 bg-dark4 text-white outline-none"
        />
      </div>
      <div className="flex flex-col space-y-7 mt-10 px-5">
        {[1, 2, 3].map((item) => (
          <DisplayUser key={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchComponent;
