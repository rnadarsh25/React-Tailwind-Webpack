import React from "react";
import Avatar from "./avatar";

function DisplayUser() {
  return (
    <div className="flex items-center space-x-2 justify-between">
      <div className="flex items-center space-x-2">
        <Avatar text="Adarsh" />
        <div className="flex flex-col">
          <h3 className="text-md truncate">Adarsh</h3>
          <p className="text-xs text-gray1">@adarsh</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="bg-primary p-1 px-3 rounded-md text-sm"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default DisplayUser;
