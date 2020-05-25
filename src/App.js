import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import PostsApp from "./components/PostsApp";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeaInfo from "./components/TeaInfo";

const usePostState = () => {
  const [user, setUser] = useState("you");
  const [teaInfo, setTeaInfo] = useState([
    {
      id: uuid(),
      name: "Black Tea",
      description: `Common varieties of black tea include Assam,
      Nepal, Darjeeling, Nilgiri, Rize, Keemun, and Ceylon teas. Western
      black teas are usually brewed for about four minutes. In many
      regions of the world, actively boiling water is used and the tea
      is often stewed. In India, black tea is often boiled for fifteen
      minutes or longer to make Masala chai, as a strong brew is
      preferred. Tea is often strained while serving.`,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Assam-Tee_SFTGFOP1.jpg/1280px-Assam-Tee_SFTGFOP1.jpg",
    },
    {
      id: uuid(),
      name: "Green Tea",
      description: `In regions of the world that prefer mild
      beverages, such as the Far East, green tea is steeped in water
      around 80 to 85 °C (176 to 185 °F). Regions such as North Africa
      or Central Asia prefer a bitter tea, and hotter water is used. In
      Morocco, green tea is steeped in boiling water for 15 minutes.`,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Shincha-2010.jpg/1280px-Shincha-2010.jpg",
    },
    {
      id: uuid(),
      name: "Oolong Tea",
      description: `brewed around 82 to 96 °C (185 to
        205 °F), with the brewing vessel warmed before pouring the water.
        Yixing purple clay teapots are the traditional brewing-vessel for
        oolong tea which can be brewed multiple times from the same
        leaves, unlike green tea, seeming to improve with reuse. In the
        southern Chinese and Taiwanese Gongfu tea ceremony, the first brew
        is discarded, as it is considered a rinse of leaves rather than a
        proper brew.`,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dung-ti-oolong-gross.jpg/1280px-Dung-ti-oolong-gross.jpg",
    },
    {
      id: uuid(),
      name: "Iced Tea",
      description: `A form of cold tea.
      Though usually served in a glass with ice, it can refer to any tea
      that has been chilled or cooled. It may be sweetened with sugar,
      syrup and/or apple slices. Iced tea is also a popular packaged
      drink and can be mixed with flavored syrup, with multiple common
      flavors including lemon, raspberry, lime, passion fruit, peach,
      orange, strawberry, and cherry.`,
      imgUrl: "https://cf.shopee.ph/file/7641351ec37bfb13bedc0ac8a01f56f9",
    },
  ]);
  const [Posts, setPosts] = useState([
    {
      id: uuid(),
      username: "milkita",
      content: "I love milk tea!",
      createdDateTime: new Date("Sun May 17 2020 01:10:37 GMT+0800"),
    },
    {
      id: uuid(),
      username: "kobe",
      content: "Spill the tea...",
      createdDateTime: new Date("Sun Feb 29 2020 01:10:37 GMT+0800"),
    },
    {
      id: uuid(),
      username: "coffeeLover420",
      content: "Coffee ftw!",
      createdDateTime: new Date("Sun April 20 1869 01:10:37 GMT+0800"),
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

  return { Posts, AddPost, teaInfo };
};

function App() {
  const { Posts, AddPost, teaInfo } = usePostState();
  console.log("App", Posts);
  //GetToken();
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div style={{paddingTop:"50px"}}>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <Home teaInfo={teaInfo} />
                <PostsApp posts={Posts} addPost={AddPost} />
              </React.Fragment>
            )}
          />
          
        <Route
          path="/posts"
          render={(props) => <PostsApp posts={Posts} addPost={AddPost} />}
        />
        <Route
          path="/tea"
          render={(props) => <TeaInfo teaInfo={teaInfo}/>}
        />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
