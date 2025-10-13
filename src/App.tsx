import React from "react";
import Post from "./components/Post";
import PostInput from "./components/PostInput";


export default function App() {
  const [posts, setPostList] = React.useState<string[]>([]);

  function addPost(content: string) {
    setPostList(prevList => {
      const newPosts = [content, ...prevList ];
      return newPosts;
    });
  }
  return (
    <div className="flex flex-col justify-center min-h-screen items-center py-10 gap-3">
      <PostInput addInput={addPost}/>

      {posts.map((content) => {
        return <Post key={content} content={content}/>
      })}
    </div>
  )
}