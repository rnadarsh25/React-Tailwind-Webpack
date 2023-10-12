import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import DisplayPost from "./display_post";
import Avatar from "./avatar";
import { GET_POST, GET_POSTS } from "../entities/queries";
import DisplayLoader from "./display_loader";
import { Post as TypePost } from "../entities/types";
import { ADD_REPLY, POST_LIKE } from "../entities/mutations";

function Post() {
  const { id } = useParams();
  const [reply, setReply] = useState<string>("");
  const [addReply] = useMutation(ADD_REPLY);
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { id },
  });

  const [postLike] = useMutation(POST_LIKE, {
    variables: {
      postId: id,
    },
    awaitRefetchQueries: true,
    refetchQueries: [GET_POST, GET_POSTS],
  });

  const handleOnAddReply = () => {
    if (!reply) return;
    addReply({
      variables: {
        postId: id,
        post: {
          content: reply,
        },
      },
      awaitRefetchQueries: true,
      refetchQueries: [GET_POST, GET_POSTS],
      onCompleted: () => {
        setReply("");
      },
    });
  };

  if (loading) return <DisplayLoader />;
  if (error) return <DisplayLoader type="error" />;

  return (
    <div>
      <DisplayPost item={data?.getPost} onLike={() => postLike()} />
      <div className="flex justify-between my-5 border border-gray-700 border-l-0 border-r-0 py-10">
        <div className="flex w-full items-center rounded-l-full bg-dark4">
          <Avatar text="Adarsh" />
          <input
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Reply to this bit"
            className="p-3 w-full bg-dark4 outline-none"
          />
        </div>
        <button
          onClick={handleOnAddReply}
          type="button"
          className="bg-primary p-2 px-6 rounded-r-full "
        >
          Reply
        </button>
      </div>
      <div className="p-2 px-7">
        {data?.getPost.replies.map((item: TypePost) => (
          <DisplayPost
            item={item}
            key={item.id}
            onLike={(likePostId: string) =>
              postLike({
                variables: {
                  postId: likePostId,
                },
                awaitRefetchQueries: true,
                refetchQueries: [GET_POST, GET_POSTS],
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Post;
