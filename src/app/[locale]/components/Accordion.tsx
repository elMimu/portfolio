"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useClickOutside } from "@/app/hooks/useOutsideClick";

interface AccordionProps {
  label: string;
  links: { href: string; label: string }[];
  onSelect?: () => void;
}

export default function Accordion({ label, links, onSelect }: AccordionProps) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const accordionRef = useRef(null);

  useClickOutside(accordionRef, () => setOpen(false));

  const handleSelection = () => {
    setOpen(false);
    if (!onSelect) {
      return;
    }
    onSelect();
  };

  return (
    <div
      ref={accordionRef}
      className={`overflow-hidden transition-all duration-300 ease-in-out
  ${isOpen ? "max-h-20" : "max-h-5"}`}
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className="flex">
        <div className="flex-1">{label}</div>
        <span className="material-symbols-outlined ">
          {isOpen ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </div>

      <ul className={`min-w-full rounded text-black bg-background`}>
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li
              key={l.href}
              onClick={() => {
                handleSelection();
              }}
            >
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
