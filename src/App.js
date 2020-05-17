import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import PostsApp from "./components/PostsApp";
import "bootstrap/dist/css/bootstrap.css";

const usePostState = () => {
  const [user, setUser] = useState("wolf");
  const [Posts, setPosts] = useState([
    {
      id: uuid(),
      username: "wolf",
      content: "Hello World",
      createdDateTime: new Date("Sun May 17 2020 01:10:37 GMT+0800"),
    },
    {
      id: uuid(),
      username: "chini",
      content: "Hay nako",
      createdDateTime: new Date(Date.now()),
    },
    {
      id: uuid(),
      username: "boii",
      content: "Sample!",
      createdDateTime: Date.now(),
    },
  ]);

  const AddPost = (content) => {
    const newPost = {
      id: uuid(),
      username: user,
      content,
      createdDateTime: Date.now(),
    };
    setPosts([newPost, ...Posts]);
  };

  return { Posts, AddPost };
};

function App() {
  const { Posts, AddPost } = usePostState();
  console.log("App", Posts);
  return (
    <div className="App">
      <PostsApp posts={Posts} addPost={AddPost} />
    </div>
  );
}

export default App;
