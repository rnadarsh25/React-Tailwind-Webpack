import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_POST } from "../entities/mutations";

function CreateBit() {
  const navigate = useNavigate();
  const [post, setPost] = useState<string>("");
  const [addPost] = useMutation(ADD_POST);

  const handleOnSubmit = () => {
    if (!post) return;
    addPost({
      variables: {
        post: {
          content: post,
        },
      },
      onCompleted: () => {
        setPost("");
        navigate("/");
      },
    });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Post your bit</h1>
      <h3 className="text-xl font-medium mb-5">Content</h3>
      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Create your bit!"
        className="w-full bg-dark4 p-3 pt-4 h-72 border rounded-md outline-none"
      />
      <button
        onClick={handleOnSubmit}
        type="button"
        className="w-full bg-primary p-2 rounded-lg mt-5"
      >
        Post Bit
      </button>
    </div>
  );
}

export default CreateBit;
