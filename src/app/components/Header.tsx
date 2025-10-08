"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const dropDownLinks = [
  { href: "/projects/playables", label: "PLAYABLES" },
];

const getFirstRoute = (str: string) => {
  const splited_route = str.split("/");

  if (splited_route.length < 1) {
    return "";
  }

  return "/" + splited_route[1];
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex mx-auto bg-foreground text-background max-w-5xl gap-6">
        <span className="flex items-center p-1">
          <Logo />
          <p className="p-1">PORTFOLIO</p>
        </span>

        {/* Desktop Menu */}
        <ul className=" hidden md:flex items-center ml-auto gap-4 p-2">
          <li
            key="/home"
            className={`${pathname == "/" ? "font-bold" : "font-thin"}`}
          >
            <Link href="/">HOME</Link>
          </li>

          <li
            className={`${getFirstRoute(pathname) == "/projects" ? "font-bold" : ""}`}
          >
            <Dropdown label="PROJECTS" links={dropDownLinks} direction="DOWN"/>
          </li>

          <li
            key="/about"
            className={`${pathname == "/about" ? "font-bold" : ""}`}
          >
            <Link href="/about" className={``}>
              ABOUT
            </Link>
          </li>
        </ul>
        {/*  */}

        <nav className="ml-auto p-2 border">
          <button className="">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </nav>
    </header>
  );
}
