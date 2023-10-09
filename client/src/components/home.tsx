import React from "react";
import { useNavigate } from "react-router-dom";
import DisplayPost from "./display_post";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Home</h1>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <DisplayPost key={item} onClick={(id) => navigate(`/post/${id}`)} />
      ))}
    </div>
  );
}

export default Home;
