import React from "react";
import DisplayUser from "./display_user";

function RightSideBar() {
  return (
    <div className="w-2/12 mt-7">
      <div className="flex flex-col space-y-7">
        <h3 className="text-2xl ">Shared Minds</h3>
        {[1, 2, 3].map((item) => (
          <DisplayUser key={item} />
        ))}
      </div>
    </div>
  );
}

export default RightSideBar;
