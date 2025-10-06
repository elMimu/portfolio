"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const dropDownLinks = [{ href: "/projects/playables", label: "PLAYABLES" }];

const getFirstRoute = (str: string) => {
  const splited_route = str.split("/");

  if (splited_route.length < 1) {
    return "";
  }

  return "/" + splited_route[1];
};

export default function Header() {
  const pathname = usePathname();
  console.log(getFirstRoute(pathname));
  return (
    <header>
      <nav className="mx-auto shadow-lg bg-foreground text-background max-w-5xl flex gap-6">
        <span className="flex items-center p-1">
          <Logo />
          <p className="p-1">PORTFOLIO</p>
        </span>

        <ul className="flex items-center ml-auto gap-4 p-2 header_nav">
          <li key="/home" className={`${pathname == "/" ? "underline" : ""}`}>
            <Link href="/">HOME</Link>
          </li>

          <li
            className={`${getFirstRoute(pathname) == "/projects" ? "underline" : ""}`}
          >
            <Dropdown label="PROJECTS" links={dropDownLinks} />
          </li>

          <li
            key="/about"
            className={`${pathname == "/about" ? "underline" : ""}`}
          >
            <Link href="/about" className={``}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
