import React from "react";

type CommentInputProps = {
     addComment: (content: string) => void;
}

export default function CommentInput({addComment}: CommentInputProps) {
    const [content, setContent] = React.useState("");

    function addCommentAndClear(content: string) {
        if (content.trim() !== "") {
            addComment(content);
            setContent("");
        }
    }
    return (
        <div className="h-32 w-full border-4 rounded-2xl flex flex-col p-4 gap-3">
            <div className="flex ">
                <textarea className="border-2 text-black w-full h-10 rounded-lg" placeholder="Write a Comment..."
                value={content}
                onChange={(e) => {setContent(e.target.value)}}></textarea>
            </div>

            <div className="flex justify-end">
                <button className="border-4 hover:scale-1500 hover:bg-blue-300 transition p-1 rounded-2xl w-25"
                onClick={() => addCommentAndClear(content)}>Comment</button>
            </div>

        </div>
    )
}