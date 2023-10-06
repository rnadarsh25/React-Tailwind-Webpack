import React from "react";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./avatar";

type DisplayPostProps = {
  displayDeleteIcon?: boolean;
  onClick?: (id: string) => void;
};
function DisplayPost({ displayDeleteIcon = false, onClick }: DisplayPostProps) {
  return (
    <div className="flex justify-between items-center bg-dark4 rounded-xl py-5 px-3 mb-10">
      <div className="flex space-x-3 items-center">
        <div className="self-start">
          <Avatar text="Adarsh" />
        </div>
        <div className="hover:cursor-pointer">
          <div aria-hidden="true" onClick={() => onClick?.("12345")}>
            <h3 className="font-bold">Adarsh</h3>
            <p className="mb-5">Content this is my first bit.</p>
          </div>
          <div className="flex space-x-3">
            <HeartIcon className="w-7 h-7" />
            <ChatBubbleLeftIcon className="w-7 h-7" />
            <ShareIcon className="w-7 h-6" />
          </div>
        </div>
      </div>
      {displayDeleteIcon && (
        <button
          type="button"
          className="self-start p-2 hover:bg-dark1 hover:rounded-full "
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default DisplayPost;
