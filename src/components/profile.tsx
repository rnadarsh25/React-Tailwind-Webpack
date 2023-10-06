import React, { useCallback, useState } from "react";
import {
  PencilIcon,
  ClipboardDocumentIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { getNameInitials } from "../utils/helpers";
import DisplayPost from "./display_post";
import Button from "./button";

function Profile() {
  const [activeTab, setActiveTab] = useState("bits");
  const isActive = useCallback(
    (type: string) => type === activeTab,
    [activeTab],
  );
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <div className="w-16 h-16 overflow-hidden text-3xl flex items-center justify-center rounded-full bg-red-200">
            {getNameInitials("Adarsh")}
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Adarsh Singh Tiwari</h1>
            <p className="text-md text-gray1">@adarsh</p>
          </div>
        </div>
        <button
          type="button"
          className="bg-dark4 p-2 px-6 flex space-x-2 items-center rounded-full hover:bg-dark3"
        >
          <PencilIcon className="w-4 h-4" />
          <p>Edit</p>
        </button>
      </div>
      <div className="px-2 h-24 mt-4">
        <p>MERN Stack Developer :)</p>
      </div>
      <div className="border border-b-0 border-l-0 border-r-0 border-gray-700 border-solid pt-7 space-y-5">
        <div className="flex space-x-1">
          <Button
            onClick={() => setActiveTab("bits")}
            isActive={isActive("bits")}
          >
            <ClipboardDocumentIcon className="w-4 h-4" />
            <p>Bits</p>
          </Button>
          <Button
            onClick={() => setActiveTab("replies")}
            isActive={isActive("replies")}
          >
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <p>Replies</p>
          </Button>
          <Button
            onClick={() => setActiveTab("tagged")}
            isActive={isActive("tagged")}
          >
            <BookmarkIcon className="w-4 h-4" />
            <p>Tagged</p>
          </Button>
        </div>
        <div>
          {[1, 2, 3].map((item) => (
            <DisplayPost key={item} displayDeleteIcon />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
