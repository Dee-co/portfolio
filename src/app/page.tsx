import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import HeroCard from "@/components/HeroCard";
import Typewriter from "@/components/Typewriter";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import ProjectCard from "@/components/ProjectCard";
import ProjectIcon from "@/components/ProjectIcon";
import CopyEmail from "@/components/CopyEmail";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile, projects, stats, whatIDo } from "@/data/portfolio";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-36 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal y={12}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.title} at {profile.company}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="gradient-text">{profile.firstName}</span>
                <span className="ml-2 inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_infinite]">👋</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 min-h-[2.25rem] text-2xl font-semibold text-zinc-200 md:text-3xl">
                <Typewriter words={profile.roles} />
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View my work <ArrowRight size={16} />
                </Link>
                <a href={profile.resumeUrl} download className="btn-ghost">
                  <Download size={16} /> Download resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex items-center gap-4 text-sm text-zinc-400">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-white"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-white"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <span className="h-4 w-px bg-white/15" />
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} /> {profile.location}
                </span>
              </div>
            </Reveal>
          </div>

          <HeroCard />
        </div>

        {/* Stats */}
        <Reveal delay={0.1} className="mt-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-3xl p-5 text-center md:p-6">
                <p className="gradient-text text-4xl font-extrabold tracking-tight">{s.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Marquee />

      {/* What I do */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Products that feel <span className="gradient-text">fast and dependable</span>
            </>
          }
          text={profile.intro}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 text-violet-200 ring-1 ring-white/10">
                    <ProjectIcon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section id="work" className="section-pad pt-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                Things I&apos;ve <span className="gradient-text">built and shipped</span>
              </>
            }
          />
          <Reveal>
            <Link href="/projects" className="btn-ghost">
              All projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad pt-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/20 via-ink-900 to-fuchsia-600/20 p-8 text-center md:p-14">
            <div aria-hidden className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/30 blur-[100px]" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300">Contact</p>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s build something <span className="gradient-text">great together</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Have a project, a role or just an idea? Send me a message and I will get back to you.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail size={16} /> {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-400">
                <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
                  <Phone size={15} /> {profile.phone}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
