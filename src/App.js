import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import PostsApp from "./components/PostsApp";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Client } from "@microsoft/microsoft-graph-client";
import qs from "qs";

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

const app_id = "057dcfca-0b51-44e2-a8fa-27dce43a3c8e";
const app_secret = "w27lM-Z0Rd_oN_~RXhB_.yAJCXm0N6VAyh";
const tenant = "a31e752f-5c14-4620-842e-6c9b4e81fbce";

function GetToken() {
  
  axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
  axios
    .post(
      "https://login.microsoftonline.com/"+tenant+"/oauth2/v2.0/token",
      qs.stringify({
        client_id: app_id,
        scope: "https://graph.microsoft.com/.default",
        client_secret: app_secret,
        grant_type: "client_credentials",
      })
    )
    .then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
}

function App() {
  const { Posts, AddPost } = usePostState();
  console.log("App", Posts);
  GetToken();
  return (
    <div className="App">
      <PostsApp posts={Posts} addPost={AddPost} />
    </div>
  );
}

export default App;
