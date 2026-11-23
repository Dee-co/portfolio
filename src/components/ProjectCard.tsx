import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import SpotlightCard from "./SpotlightCard";
import ProjectIcon from "./ProjectIcon";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="h-full">
      <article className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <div
            className={clsx(
              "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
              project.accent
            )}
          >
            <ProjectIcon name={project.icon} className="h-7 w-7" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            {project.category === "work" ? "At Delibo" : "Personal"}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-violet-300">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        {project.highlights && (
          <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-violet-300"
          >
            Live demo <ArrowUpRight size={16} />
          </a>
        )}
      </article>
    </SpotlightCard>
  );
}
