import { type Profile } from "./types";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div
      key={profile.id}
      className="bg-amber-700 p-3 rounded-xl mb-2 mt-4 shadow-md text-white w-120 border-2"
    >
      <h1 className="font-bold text-lg">{profile.username}</h1>
      <h2 className="text-sm">{profile.name}</h2>
      <h3 className="text-blue-400"><a href={profile.email}>{profile.email}</a></h3>
      <h4 className="text-sm">{profile.address.city}</h4>
      <h5 className="text-sm">{profile.phone}</h5>

    </div>
  );
}
