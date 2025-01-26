import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DearCustomer() {
  return (
    <div className="flex items-center justify-between p-10">
      <div className="gpa-3 flex flex-col gap-3">
        <span className="text-3xl font-bold">Dear customers,</span>
        <span className="text-xl">sign in for special offers</span>
      </div>
      <Link
        href="/joinfree/login"
        className="flex items-center gap-2 text-[#00ab68]"
      >
        <span className="text-3xl font-bold">Sign in</span>
        <ChevronRight size={32} />
      </Link>
    </div>
  );
}
