"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import { useState } from "react";

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
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="border bg-foreground">
      <nav className="relative flex mx-auto  text-background max-w-5xl gap-6  ">
        <span className="flex items-center p-1">
          <Image
            width={60}
            height={40}
            src="/logo-white.svg"
            alt="logo"
            className=""
          />
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-auto gap-4 p-2">
          <li
            key="/home"
            className={`${pathname == "/" ? "font-bold" : "font-thin"}`}
          >
            <Link href="/">HOME</Link>
          </li>

          <li
            className={`${getFirstRoute(pathname) == "/projects" ? "font-bold" : ""}`}
          >
            <Dropdown label="PROJECTS" links={dropDownLinks} direction="DOWN" />
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

        <button
          className="md:hidden ml-auto p-2"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        <div
          className={`z-10 absolute md:hidden bg-foreground w-full top-full ${!isOpen ? "hidden" : "block"}`}
        >
          <ul className="text-center p-2">
            <hr className="border-gray-300" />
            <li
              onClick={() => setOpen(false)}
              key="/home"
              className={`m-1 ${pathname == "/" ? "font-bold" : "font-thin"}`}
            >
              <Link href="/">HOME</Link>
            </li>
            <hr className="border-gray-300" />
            <li
              className={`m-1 ${getFirstRoute(pathname) == "/projects" ? "font-bold" : ""}`}
            >
              <Accordion
                label="PROJECTS"
                onSelect={() => {
                  setOpen(false);
                }}
                links={dropDownLinks}
              />
            </li>
            <hr className="border-gray-300" />
            <li
              onClick={() => setOpen(false)}
              key="/about"
              className={`m-1 ${pathname == "/about" ? "font-bold" : ""}`}
            >
              <Link href="/about" className={``}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
