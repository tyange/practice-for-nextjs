import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="items-cente sticky top-0 z-40 flex justify-between bg-white p-4 shadow-md">
      <div>임시 NAV</div>
      <div>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/">메인</Link>
          </li>
          <li>
            <Link href="/shipping-schedule">운송 일정</Link>
          </li>
          <li>
            <Link href="/search">검색</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
