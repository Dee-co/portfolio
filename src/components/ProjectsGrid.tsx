"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

const filters = [
  { key: "all", label: "All" },
  { key: "work", label: "At Delibo" },
  { key: "personal", label: "Personal" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function ProjectsGrid() {
  const [active, setActive] = useState<FilterKey>("all");
  const list = projects.filter((p) => active === "all" || p.category === active);

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            onClick={() => setActive(f.key)}
            className={clsx(
              "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
              active === f.key ? "text-white" : "text-zinc-400 hover:text-white"
            )}
          >
            {active === f.key && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{f.label}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
