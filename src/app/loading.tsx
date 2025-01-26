import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LoaderCircle className="animate-spin" size={48} />
    </div>
  );
}
