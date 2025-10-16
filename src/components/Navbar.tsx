type NavBarProps = {
    onFetch: () => void;
    onFilter: (value: string) => void;
}

export default function Navbar ({onFetch, onFilter}: NavBarProps) {

    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-5 w-128 h-20 bg-amber-800 rounded-2xl">
                <button className="border-4 bg-amber-700 hover:bg-amber-400 hover:scale-2000 rounded-2xl px-4 text-white"
                onClick={onFetch}>Fetch</button>
                <textarea className="w-80 border-4 bg-amber-700 rounded-2xl text-white text-10" placeholder="Search"
                onChange={(e)=> onFilter(e.target.value)}></textarea>
            </div>

            <div>
                
            </div>
        </div>
    )
}