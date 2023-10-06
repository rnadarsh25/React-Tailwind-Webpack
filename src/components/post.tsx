import React from "react";
import DisplayPost from "./display_post";
import Avatar from "./avatar";

function Post() {
  return (
    <div>
      <DisplayPost />
      <div className="flex justify-between my-5 border border-gray-700 border-l-0 border-r-0 py-10">
        <div className="flex w-full items-center rounded-l-full bg-dark4">
          <Avatar text="Adarsh" />
          <input
            placeholder="Reply to this bit"
            className="p-3 w-full bg-dark4 outline-none"
          />
        </div>
        <button type="button" className="bg-primary p-2 px-6 rounded-r-full ">
          Reply
        </button>
      </div>
      <div className="p-2 px-7">
        {[1, 2, 3].map((item) => (
          <DisplayPost key={item} />
        ))}
      </div>
    </div>
  );
}

export default Post;
