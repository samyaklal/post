import './App.css';
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, body) => setPosts([...posts, { title, body }]);
  const movePost = (index, moveBy) => {
    const postCopy = [...posts];
    let temp;

    temp = postCopy[index];
    postCopy[index] = postCopy[index + moveBy];
    postCopy[index + moveBy] = temp;

    setPosts(postCopy);
  };
  const deletePost = (index) =>
    setPosts(posts.filter((post, i) => i !== index));

  return (
    <>
      <header>
        <h1>Post</h1>
      </header>
      <main>
        <AddPost addPost={addPost} />
        <PostList posts={posts} movePost={movePost} deletePost={deletePost} />
      </main>
    </>
  );
}

export default App;
