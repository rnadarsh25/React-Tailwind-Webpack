import React from "react";
import SideBar from "./sidebar";

function Home() {
  return (
    <div className="flex justify-center space-x-3">
      <SideBar />
      <div className="bg-green-200">
        <h1 className="">content</h1>
      </div>
      <SideBar />
    </div>
  );
}

export default Home;
