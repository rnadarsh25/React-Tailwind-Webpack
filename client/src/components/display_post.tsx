import React, { useCallback, useMemo } from "react";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./avatar";
import { Post } from "../entities/types";
import { useAppContext } from "../context/app_context";

type DisplayPostProps = {
  displayDeleteIcon?: boolean;
  onClick?: (id: string) => void;
  item: Post;
  hideReplyPost?: boolean;
  onLike?: (id: string) => void;
  onDelete?: (id: string) => void;
};
function DisplayPost({
  displayDeleteIcon = false,
  onClick,
  item,
  hideReplyPost = false,
  onLike,
  onDelete,
}: DisplayPostProps) {
  const { currentUser } = useAppContext();
  const postStepper = useMemo(() => {
    let post = [{ ...item }];
    const { repliedToPost = undefined } = item;
    if (repliedToPost) {
      post = [{ ...repliedToPost, repliedToPst: true }, ...post];
    }
    return post;
  }, [item]);

  const isLikedByLoggedInUser = useCallback(
    (post: Post) => {
      if (currentUser) {
        return post.likedBy.some((it) => it.id === currentUser.id);
      }
      return false;
    },
    [currentUser],
  );

  return (
    <div className="bg-dark4 rounded-xl mb-10 py-5 pl-2">
      {postStepper.map((post, index) => (
        <div
          className={`${
            index !== postStepper.length - 1
              ? "border border-gray-700 border-t-0 border-r-0 border-b-0"
              : ""
          } ml-7 ${index !== postStepper.length - 1 ? "pb-7" : "pb-1"}`}
        >
          <div
            className={`flex justify-between items-center px-3 -ml-8 ${
              post.repliedToPst && hideReplyPost ? "hidden" : ""
            }`}
          >
            <div className="flex space-x-3 items-center">
              <div className="self-start">
                <Avatar text={post.createdBy.name} />
              </div>
              <div className="hover:cursor-pointer">
                <div aria-hidden="true" onClick={() => onClick?.(post.id)}>
                  <h3 className="font-bold">{post.createdBy.name}</h3>
                  {post.repliedToPost && (
                    <p className="text-gray-300 text-sm mb-3">
                      <span>
                        replying to{" "}
                        <span className="text-primary">
                          @{post.repliedToPost.createdBy.userName}
                        </span>
                      </span>
                    </p>
                  )}
                  <p className="mb-5">{post.content}</p>
                </div>
                <div className="flex space-x-3">
                  <div className="flex space-x-1 items-center">
                    <HeartIcon
                      className="w-7 h-7"
                      onClick={() => onLike?.(post.id)}
                    />
                    <p>{post.likedBy.length ? post.likedBy.length : ""}</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <ChatBubbleLeftIcon className="w-7 h-7" />
                    <p>{post.replies?.length ? post.replies.length : ""}</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <ShareIcon className="w-7 h-6" />
                    <p />
                  </div>
                </div>
              </div>
            </div>
            {displayDeleteIcon && (
              <button
                onClick={() => onDelete?.(post.id)}
                type="button"
                className="self-start p-2 hover:bg-dark1 hover:rounded-full "
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayPost;
