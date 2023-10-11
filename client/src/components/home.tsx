import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import DisplayPost from "./display_post";
import DisplayLoader from "./display_loader";
import { GET_POSTS } from "../entities/queries";
import { Post } from "../entities/types";

function Home() {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_POSTS);
  const posts = useMemo(() => data?.getPosts || [], [data]);
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
        />
      ))}
    </div>
  );
}

export default Home;
