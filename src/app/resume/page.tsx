import type { Metadata } from "next";
import { Download, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { education, experience, profile, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}: experience, skills and education.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-10 pt-36 md:pt-44">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Resume"
          title={
            <>
              Experience <span className="gradient-text">and skills</span>
            </>
          }
        />
        <Reveal>
          <a href={profile.resumeUrl} download className="btn-primary">
            <Download size={16} /> Download PDF
          </a>
        </Reveal>
      </div>

      {/* Header card */}
      <Reveal className="mt-10">
        <SpotlightCard>
          <div className="p-7">
            <h3 className="text-2xl font-bold">{profile.name}</h3>
            <p className="mt-1 text-violet-300">
              Software Developer | React Native | TypeScript | JavaScript | Redux Toolkit | React.js
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
              <span className="flex items-center gap-2"><MapPin size={15} /> {profile.location}</span>
              <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={15} /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={15} /> {profile.email}
              </a>
            </div>
            <p className="mt-5 leading-relaxed text-zinc-300">{profile.summary}</p>
          </div>
        </SpotlightCard>
      </Reveal>

      {/* Experience timeline */}
      <h3 className="mt-16 text-xl font-bold">Professional experience</h3>
      <ol className="relative mt-8 border-l border-white/10 pl-8">
        {experience.map((job) => (
          <li key={job.role + job.period} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full border border-violet-400/50 bg-ink-950"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
            </span>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h4 className="text-lg font-bold">{job.role}</h4>
                {job.current && (
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-zinc-400">
                <span className="font-medium text-zinc-200">{job.company}</span>
                {job.location ? `, ${job.location}` : ""} · {job.period}
              </p>
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Skills */}
      <h3 className="mt-16 text-xl font-bold">Technical skills</h3>
      <Reveal className="mt-6">
        <div className="glass space-y-4 rounded-3xl p-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="grid gap-2 sm:grid-cols-[200px_1fr]">
              <p className="text-sm font-semibold text-zinc-200">{g.title}</p>
              <p className="text-sm text-zinc-400">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Education */}
      <h3 className="mt-16 text-xl font-bold">Education</h3>
      <Reveal className="mt-6">
        <SpotlightCard>
          <div className="flex items-start gap-4 p-6">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 text-violet-200 ring-1 ring-white/10">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold">{education.degree}</p>
              <p className="text-sm text-zinc-400">{education.school}</p>
              <p className="mt-1 text-sm text-zinc-500">Score: {education.score}</p>
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </div>
  );
}
