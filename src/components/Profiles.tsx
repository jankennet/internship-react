import ProfileCard from "./ProfilesCard";
import { type Profile } from "./types";

interface ProfilesProps {
  profiles: Profile[];
}


export default function Profiles ({profiles}: ProfilesProps) {
    return (
        <div className="flex flex-col justify-center items-center bg-amber-900 w-128 rounded-2xl">
        {profiles.length === 0 ? (
            <p className="text-amber-200">No profiles loaded.</p>
        ) : (
        profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
            ))
            )}
        </div>
    );
}