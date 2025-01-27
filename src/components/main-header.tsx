import Link from "next/link";

import { cookies } from "next/headers";
import Image from "next/image";
import { Earth, UserRound, UserRoundCog } from "lucide-react";

export default async function MainHeader() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const isLoggedIn = !!token;

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
              <Link href={isLoggedIn ? "/my-wini" : "/joinfree/login"}>
                {isLoggedIn ? <UserRoundCog /> : <UserRound />}
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
