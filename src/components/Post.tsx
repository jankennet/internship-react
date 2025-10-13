import { useState } from "react";
import Comment from "./Comment";

type PostProps = {
    content: string;
}

export default function Post({content}: PostProps) {

    let [likeCount, setLikeCount] = useState(0);

    function handleLike() {
        setLikeCount((prev: number) => prev + 1);
    }
    return (
        <div className="h-48 w-128 border-8 rounded-2xl flex flex-col p-4 gap-4">
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

            <div className="flex justify-center">
            <Comment />
            </div>

        </div>
    )
}