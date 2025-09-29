"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="">
      <nav className="mx-auto max-w-5xl flex border gap-6">
        <span className="">My Portfolio</span>
        <ul className="flex ml-auto gap-4">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link href={l.href} className={` ${active ? "font-bold" : "font-thin"}`}>{l.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
