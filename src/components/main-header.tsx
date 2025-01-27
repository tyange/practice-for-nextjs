import Link from "next/link";

import { Earth, UserRound } from "lucide-react";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header>
      <nav className="flex w-full items-center justify-between p-4">
        <div>
          <Link className="relative block h-10 w-40" href="/">
            <Image
              fill
              src="https://image.autowini.com/IMG/mobile/common/logo.svg"
              alt="autowini logo"
            />
          </Link>
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
