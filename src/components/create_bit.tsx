import React from "react";

function CreateBit() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Post your bit</h1>
      <h3 className="text-xl font-medium mb-5">Content</h3>
      <textarea
        placeholder="Create your bit!"
        className="w-full bg-dark4 p-3 pt-4 h-72 border rounded-md outline-none"
      />
      <button type="button" className="w-full bg-primary p-2 rounded-lg mt-5">
        Post Bit
      </button>
    </div>
  );
}

export default CreateBit;
