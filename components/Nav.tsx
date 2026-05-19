"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Operations", href: "/operations" },
  { label: "Sales", href: "/sales" },
  { label: "Credentials", href: "/credentials" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] h-16 flex items-center px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-[#111111] font-bold text-xl tracking-tight hover:text-[#1A56DB] transition-colors"
          >
            Gabriel Tomala
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[14px] font-medium transition-colors relative pb-1 ${
                    active
                      ? "text-[#1A56DB]"
                      : "text-[#111111] hover:text-[#1A56DB]"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#1A56DB] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#111111] transition-transform duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#111111] transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#111111] transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-5 right-6 p-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-6 h-[2px] bg-[#111111] rotate-45 translate-y-[1px]" />
            <span className="block w-6 h-[2px] bg-[#111111] -rotate-45 -translate-y-[1px]" />
          </button>
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-2xl font-medium transition-colors ${
                pathname === href ? "text-[#1A56DB]" : "text-[#111111]"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
