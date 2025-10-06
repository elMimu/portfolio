"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const dropDownLinks = [{ href: "/projects/playables", label: "PLAYABLES" }];

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="mx-auto bg-foreground text-background max-w-5xl flex gap-6">
        <span className="flex items-center p-1">
          <Logo />
          <p className="p-1">PORTFOLIO</p>
        </span>

        <ul className="flex items-center ml-auto gap-4 p-2 header_nav">
          <li key="/home">
            <Link href="/" className={``}>
              HOME
            </Link>
          </li>

          <li>
            <Dropdown label="PROJECTS" links={dropDownLinks} />
          </li>

          <li key="/about">
            <Link href="/about" className={``}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
