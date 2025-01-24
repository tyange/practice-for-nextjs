import Link from "next/link";

import { Earth, UserRound } from "lucide-react";

export default function MainHeader() {
  return (
    <header>
      <nav className="flex w-full items-center justify-between p-4">
        <div>
          <Link href="/">탈토위니</Link>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <UserRound />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Earth />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
