import React from "react";

type PostInputProps = {
    addInput: (content: string) => void;
}

export default function PostInput({addInput}: PostInputProps) {
const [content, setContent] = React.useState("");

function addInputAndClear(content: string) {
    if (content.trim() !== "") {
        addInput(content);
        setContent("");
    }
}

    return (
    <div className="h-68 w-128 border-8 rounded-2xl flex flex-col p-4 gap-4">
        <div className="border-4 flex justify-center rounded-lg" >
          <textarea className="text-black w-full h-40 rounded-lg" placeholder="What's on your mind?"
          value={content}
          onChange={(e) => {setContent(e.target.value)}}></textarea>
        </div>

        <div className="flex justify-end">
          <button className="border-4 hover:scale-500 hover:bg-blue-300 transition p-3 rounded-2xl w-30"
          onClick={() => addInputAndClear(content)}>Post</button>
        </div>
      </div>
    )
}