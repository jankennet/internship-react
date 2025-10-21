import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles";
import type { Profile } from "./components/types";

const API = "https://jsonplaceholder.typicode.com/users";
const Delay = 1;

export default function App() {
  const [filterText, setFilterText] = useState("");

  // Fetch profiles using React Query
  async function fetchProfiles() {
    const res = await fetch(API);
    await new Promise((resolve) => setTimeout(resolve, Delay * 1000)); // artificial delay
    return res.json();
  }

  const {
    data: profiles,
    isLoading,
    isError,
    refetch,
  } = useQuery<Profile[]>({
    queryKey: ["users"],
    queryFn: fetchProfiles,
  });

  // Filter handler (called from Navbar)
  function handleFilter(searchText: string) {
    setFilterText(searchText);
  }

  function handleFetch() {
    refetch(); // this re-fetches using React Query
  }

  if (isLoading) return <div className="text-center mt-5">Loading...</div>;
  if (isError) return <div className="text-center mt-5">Error fetching profiles.</div>;

  // Filter profiles (client-side)
  const filteredProfiles =
    profiles?.filter(
      (p) =>
        p.name.toLowerCase().includes(filterText.trim().toLowerCase()) ||
        p.username.toLowerCase().includes(filterText.trim().toLowerCase()) ||
        p.email.toLowerCase().includes(filterText.trim().toLowerCase())
    ) ?? [];

  return (
    <div className="flex flex-col justify-center mt-5">
      <Navbar onFilter={handleFilter} onFetch={handleFetch} />

      <div className="flex justify-center mt-5">
        <Profiles profiles={filteredProfiles} />
      </div>
    </div>
  );
}
