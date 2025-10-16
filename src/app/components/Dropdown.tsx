"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useOutsideClick";

type DropdownProps = {
  label: string;
  links: { href: string; label: string }[];
  direction: "RIGHT" | "LEFT" | "DOWN";
};

function handleOpenDirection(dir: "RIGHT" | "LEFT" | "DOWN") {
  switch (dir) {
    case "LEFT":
      return "right-full top-0";

    case "RIGHT":
      return "left-full top-0";

    default:
      return "left-0 top-full";
  }
}

function getDirectionArrow(
  label: string,
  dir: "RIGHT" | "LEFT" | "DOWN",
  isOpen: boolean,
) {
  const icon = !isOpen
    ? dir === "RIGHT"
      ? "arrow_right"
      : dir === "LEFT"
        ? "arrow_left"
        : "arrow_drop_down"
    : dir === "RIGHT"
      ? "arrow_left"
      : dir === "LEFT"
        ? "arrow_right"
        : "arrow_drop_up";

  return (
    <>
      {dir === "LEFT" && (
        <span className="material-symbols-outlined">{icon}</span>
      )}
      <span>{label}</span>
      {dir !== "LEFT" && (
        <span className="material-symbols-outlined">{icon}</span>
      )}
    </>
  );
}

function handleAnimation(dir: "RIGHT" | "LEFT" | "DOWN", isOpen: boolean) {
  switch (dir) {
    case "DOWN":
      return isOpen
        ? "origin-top scale-y-[100%] block"
        : "origin-top scale-y-0";
    case "LEFT":
      return isOpen
        ? "origin-right scale-x-[100%] block"
        : "origin-right scale-x-0";
    case "RIGHT":
      return isOpen
        ? "origin-left scale-x-[100%] block"
        : "origin-left scale-x-0";
  }
}

export default function Dropdown({ label, links, direction }: DropdownProps) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  useClickOutside(dropDownRef, () => setOpen(false));

  return (
    <span
      ref={dropDownRef}
      className="flex relative justify-center"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      {getDirectionArrow(label, direction, isOpen)}

      <ul
        className={`absolute min-w-full border rounded text-center bg-foreground absolute transition duration-100 ${handleOpenDirection(direction)} ${handleAnimation(direction, isOpen)}`}
      >
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href} onClick={() => setOpen(false)}>
              <Link
                href={l.href}
                className={`${active ? "font-bold" : "font-thin"}`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </span>
  );
}
