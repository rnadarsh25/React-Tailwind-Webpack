import React, { useCallback, useMemo, useState } from "react";
import {
  PencilIcon,
  ClipboardDocumentIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getNameInitials } from "../utils/helpers";
import DisplayPost from "./display_post";
import Button from "./button";
import { GET_USER } from "../entities/queries";
import DisplayLoader from "./display_loader";
import { Post } from "../entities/types";
import { useAppContext } from "../context/app_context";

function Profile() {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const { isCurrentUser } = useAppContext();
  const [activeTab, setActiveTab] = useState("bits");

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id,
    },
  });

  const isActive = useCallback(
    (type: string) => type === activeTab,
    [activeTab],
  );

  const user = useMemo(() => data?.getUser, [data]);
  const contentToDisplay = useMemo(() => {
    if (activeTab === "replies") {
      return user?.posts?.filter((post: Post) => post.repliedToPost) || [];
    }
    return user?.posts?.filter((post: Post) => !post.repliedToPost) || [];
  }, [activeTab, user?.posts]);

  const isLoggedInUser = useMemo(() => isCurrentUser(id), [id]);

  if (loading) return <DisplayLoader />;
  if (error) return <DisplayLoader type="error" />;

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <div className="w-16 h-16 overflow-hidden text-3xl flex items-center justify-center rounded-full bg-red-200">
            {getNameInitials(user?.name)}
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{user?.name}</h1>
            <p className="text-md text-gray1">@{user?.userName}</p>
          </div>
        </div>
        {isLoggedInUser && (
          <button
            type="button"
            className="bg-dark4 p-2 px-6 flex space-x-2 items-center rounded-full hover:bg-dark3"
          >
            <PencilIcon className="w-4 h-4" />
            <p>Edit</p>
          </button>
        )}
      </div>
      <div className="px-2 h-24 mt-4">
        <p>{user?.description}</p>
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
          {contentToDisplay.map((item: Post) => (
            <DisplayPost
              onClick={(postId) => navigate(`/post/${postId}`)}
              hideReplyPost={activeTab !== "replies"}
              item={item}
              key={item.id}
              displayDeleteIcon={isLoggedInUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
