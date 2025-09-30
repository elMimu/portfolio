"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DropdownProps = {
  label: string;
  links: { href: string; label: string }[];
};

export default function Dropdown({ label, links }: DropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative border">
      {label}
      <ul className="absolute hidden group-hover:block">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${active ? "font-bold" : "font-thin"}`}
              >{l.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
