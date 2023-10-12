import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import DisplayPost from "./display_post";
import DisplayLoader from "./display_loader";
import { GET_POSTS } from "../entities/queries";
import { Post } from "../entities/types";
import { POST_LIKE } from "../entities/mutations";

function Home() {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_POSTS);
  const posts = useMemo(() => data?.getPosts || [], [data]);

  const [postLike] = useMutation(POST_LIKE);
  const handleOnLike = (postId: string) => {
    postLike({
      variables: {
        postId,
      },
      awaitRefetchQueries: true,
      refetchQueries: [GET_POSTS],
    });
  };

  if (loading) return <DisplayLoader />;
  if (error) return <DisplayLoader type="error" />;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Home</h1>
      {posts.map((item: Post) => (
        <DisplayPost
          hideReplyPost
          item={item}
          key={item?.id}
          onClick={(id) => navigate(`/post/${id}`)}
          onLike={handleOnLike}
        />
      ))}
    </div>
  );
}

export default Home;
