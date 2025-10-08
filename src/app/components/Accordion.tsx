"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type AccordionProps = {
  label: string;
  links: { href: string; label: string }[];
};

export default function Accordion({ label, links }: AccordionProps) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className=""
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className="flex">
        <div className="flex-1">{label}</div>
        <span className="material-symbols-outlined">
          {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </div>

      <ul
        className={`min-w-full rounded text-black bg-background ${isOpen ? "origin-top scale-y-0 scale-y-100 transition-transform duration-5000 block" : "hidden"}`}
      >
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-foreground ${active ? "font-bold" : "font-thin"}`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
