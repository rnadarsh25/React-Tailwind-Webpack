import React from "react";
import SideBar from "./sidebar";

function Home() {
  return (
    <div className="flex space-x-3 px-6">
      <SideBar />
      <div className="bg-green-200 w-8/12">
        <h1 className="">content</h1>
      </div>
      <div className="bg-blue-100 w-2/12">Rgiht side bar</div>
    </div>
  );
}

export default Home;
