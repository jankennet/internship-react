import { useState } from "react";

type PostProps = {
  content: string;
}

export default function Post({ content }: PostProps) {
  let [likes, setLikes] = useState(0);

  function incrementLikes() {
    setLikes(prev => prev + 1);
  }

  return (
    <>
      <div className="h-64 w-128 border-4 rounded-2xl flex flex-col p-4 gap-4">

        <div className="flex justify-center">
          <p className="w-full h-38 rounded-2xl border-4 p-2">{content}</p>
        </div>

        <div className="flex justify-start">
          <button
            className="p-2 px-4 rounded-2xl w-30 text-2xl border-4"
            onClick={incrementLikes}
          >Like {likes}</button>
        </div>

      </div>
    </>
  );
}
