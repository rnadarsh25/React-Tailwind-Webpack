import React from "react";
import Avatar from "./avatar";

function Activity() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Activity</h1>
      {[1, 2, 3].map((item) => (
        <div
          className="flex items-center bg-dark4 p-2 rounded-lg mb-2"
          key={item}
        >
          <Avatar text="Adarsh" />
          <h3 className="text-md ml-2 font-bold">Adarsh</h3>
          <span className="text-md">&nbsp;liked your bit</span>
        </div>
      ))}
    </div>
  );
}

export default Activity;
