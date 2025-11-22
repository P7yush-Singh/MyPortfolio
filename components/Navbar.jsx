"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center">
      <div className="w-full max-w-4xl px-4">
        <nav className="flex items-center justify-between rounded-full border border-black/10 bg-[#f7efe6]/90 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-2xl text-sm font-semibold text-white"
              style={{ backgroundColor: "#4b4ded" }}
            >
              PS
            </div>
            <div className="leading-tight flex flex-col">
              <a href="/" className="text-sm font-semibold uppercase tracking-[0.2em]">
                Piyush Singh
              </a>
              <a href="/" className="text-xs text-black/60">Full-Stack Developer</a>
            </div>
          </div>

          <button
            className="rounded-full border border-black/10 px-3 py-1 text-sm md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-black/70 hover:text-[#4b4ded]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md"
              style={{ backgroundColor: "#4b4ded" }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-black/10 bg-[#f7efe6]/95 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:hidden">
            <div className="flex flex-col gap-3 text-xs">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="uppercase tracking-[0.18em] text-black/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
