import React, { useState } from "react";
import PostsWall from "./PostsWall";
import PostComposer from "./PostComposer";

function PostApp(props) {
  return (
    <div className="container m-3 rounded p-3" style={{backgroundColor:"#ecf0f1"}}>
      <PostComposer submitPost={props.addPost} />
      <PostsWall posts={props.posts} />
    </div>
  );
}

export default PostApp;
