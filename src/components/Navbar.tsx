"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className={clsx(
          "relative flex w-full max-w-3xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-white/15 bg-ink-900/80 shadow-lg shadow-black/40"
            : "border-white/10 bg-white/[0.04]"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full pl-1 pr-3 text-sm font-bold tracking-tight"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xs text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    "relative block rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-violet-100 sm:inline-block"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => {
                  const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={clsx(
                          "block rounded-2xl px-4 py-3 text-base",
                          active ? "bg-white/10 text-white" : "text-zinc-300"
                        )}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link href="/#contact" className="btn-primary mt-2 w-full">
                    Contact me
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
