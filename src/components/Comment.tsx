export default function Comment() {
    return (
        <div className="h-30 w-full bg-green-800 rounded-2xl flex flex-col p-4 gap-4">
            <div className="flex ">
                <textarea className="bg-blue-100 text-black w-full h-10 rounded-lg" placeholder="Write a Comment..."></textarea>
            </div>

            <div className="flex justify-end">
                <button className="bg-blue-700 hover:scale-1500 hover:bg-blue-300 transition p-1 rounded-2xl w-25">Comment</button>
            </div>

        </div>
    )
}