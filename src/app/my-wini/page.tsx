import LogoutButton from "@/components/logout-button";

export default async function MyWini() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <p>THIS IS MY WINI</p>
      <LogoutButton />
    </div>
  );
}
