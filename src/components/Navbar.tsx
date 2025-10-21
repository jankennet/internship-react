import { useState } from "react";

type NavBarProps = {
  onFetch: () => void;
  onFilter: (value: string) => void;
};

export default function Navbar({ onFetch, onFilter }: NavBarProps) {
  const [searchText, setSearchText] = useState("");

  function handleSearchClick() {
    onFetch();          // re-fetch data if needed
    onFilter(searchText); // apply the filter using current text
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center gap-5 w-128 h-20 bg-amber-800 rounded-2xl p-4">
        <button
          className="border-4 bg-amber-700 hover:bg-amber-400 hover:scale-105 rounded-2xl px-4 text-white"
          onClick={handleSearchClick}
        >
          Fetch
        </button>

        <textarea
          className="w-80 border-4 bg-amber-700 rounded-2xl text-white text-10 p-2"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // only updates local state
        ></textarea>
      </div>
    </div>
  );
}
