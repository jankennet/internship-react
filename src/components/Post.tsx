import { useState } from "react";
import Comment from "./CommentInput";
import CommentInput from "./CommentInput";

type PostProps = {
    content: string;
}

export default function Post({content}: PostProps) {
    const [comments, setComments] = useState<string[]>([]);

    let [likeCount, setLikeCount] = useState(0);

    function handleLike() {
        setLikeCount((prev: number) => prev + 1);
    }

    function addNewComment(commentContent: string) {
        setComments(prevComments => {
            const newComments = [ commentContent, ...prevComments];
            return newComments;
        });
    }
    return (
        <div className="max-w-[32rem] w-full border-8 rounded-2xl flex flex-col p-4 gap-4 mx-auto">
            <div className="flex justify-center">
                <p className="border-2 text-black w-full h-20 rounded-lg text-lg">
                    {content}
                </p>
            </div>

            <div className="flex justify-start">
                <button 
                className="border-4 hover:scale-2500 hover:bg-blue-300 transition p-3 rounded-2xl w-30"
                onClick={handleLike}
                >Like {likeCount}</button>

            </div>

            <div className="w-full">
            <CommentInput addComment={addNewComment} />
            </div>

        </div>
    )
}