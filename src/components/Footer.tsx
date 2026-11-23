import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950/60 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm">
              {profile.initials}
            </span>
            {profile.name}
          </div>
          <p className="mt-3 max-w-xs text-sm text-zinc-400">
            React Native developer building fast, dependable mobile and web products.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail size={15} /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone size={15} /> {profile.phone}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. Designed and built with Next.js.
      </div>
    </footer>
  );
}
