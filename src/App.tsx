import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { type Profile } from "./components/types";
import Profiles from "./components/Profiles";

export default function App() {
  const [profiles, setProfileData] = useState<Profile[]>();
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let API = "https://jsonplaceholder.typicode.com/users"

 function fetchProfiles() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
        setFilteredProfiles(data); // show all by default
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  function handleFetchFiltered() {
    const query = searchQuery.toLowerCase();

    if (!query.trim()) {
      // show all if empty
      setFilteredProfiles(profiles!);
      return;
    }

    const filtered = profiles!.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.username.toLowerCase().includes(query) ||
        p.email.toLowerCase().includes(query)
    );

    setFilteredProfiles(filtered);
  }

  useEffect(fetchProfiles, [])

  return (
    <div className="flex flex-col justify-center mt-5">
      <div>
        <Navbar onFilter={(val)=>setSearchQuery(val)} onFetch={handleFetchFiltered} />
          {isLoading && <div>Lodeng... </div>}
        <div className="flex justify-center mt-5">
          <Profiles profiles={filteredProfiles}/>
        </div>
      </div>
    </div>
  )
}