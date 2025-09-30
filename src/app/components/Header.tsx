"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

const dropDownLinks = [{ href: "/projects/playables", label: "Playables" }];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="">
      <nav className="mx-auto max-w-5xl flex border gap-6">
        <span className="">My Portfolio</span>
        <ul className="flex ml-auto gap-4">
          <li key="/home">
            <Link href="/" className={``}>
              Home
            </Link>
          </li>

          <li>
            <Dropdown label="Projects" links={dropDownLinks} />
          </li>

          <li key="/about">
            <Link href="/about" className={``}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
