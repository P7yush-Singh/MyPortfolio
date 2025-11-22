import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
      <footer className="border-t border-black/10 px-4 py-10 text-white md:py-12" style={{ backgroundColor: "#111827" }}>
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-semibold">Piyush Singh</p>
            <p className="mt-1 text-sm text-gray-300">
              Full-Stack Developer
            </p>
            <p className="mt-4 text-xs text-gray-400">
              © {new Date().getFullYear()} Piyush Singh. All rights reserved.
            </p>
          </div>
          {/* Here I'm adding Icons like Insta Linkedin and Github */}
          <div className="flex flex-col gap-2 items-center text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Socials
            </p>
            <div className="flex gap-6 mt-4">
            <a href="https://github.com/p7yu5h" target="_blank" rel="noreferrer">
            <Github />
            </a>
            <a href="https://www.linkedin.com/in/p7yu5h" target="_blank" rel="noreferrer">
            <Linkedin />
            </a>
            <a href="https://www.instagram.com/p7yu5h" target="_blank" rel="noreferrer">
            <Instagram />
            </a>
            </div>
          </div>
          {/* here I'm adding Contact Info */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Contact
            </p>
            <a href="mailto:piyush.pych@gmail.com">
              piyush.pych@gmail.com
            </a>
            <a
              href="https://www.instagram.com/p7yu5h"
              target="_blank"
              rel="noreferrer"
            >
              @p7yu5h on Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  }
  