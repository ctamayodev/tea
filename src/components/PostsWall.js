import React, { useState } from "react";
import PostCard from "./PostCard";

function PostWall(props) {
  return (
    <div className="container m-0 p-0">
      {props.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostWall;
