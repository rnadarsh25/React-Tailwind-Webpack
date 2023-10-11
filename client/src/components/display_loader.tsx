import React from "react";

function DisplayLoader({ type = "loading" }: { type?: string }) {
  if (type === "loading")
    return <h3 className="text-2xl text-center">Loading...</h3>;
  return <h3 className="text-2xl text-center">something went wrong!</h3>;
}

export default DisplayLoader;
