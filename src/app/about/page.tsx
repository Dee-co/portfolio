import type { Metadata } from "next";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { education, experience, interests, profile, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}: background, skills, education and interests.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-10 pt-36 md:pt-44">
      <SectionHeading
        eyebrow="About me"
        title={
          <>
            Engineer, builder, <span className="gradient-text">problem solver</span>
          </>
        }
        text={profile.intro}
      />

      {/* Bio + quick facts */}
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SpotlightCard className="h-full">
            <div className="space-y-4 p-7 leading-relaxed text-zinc-300">
              <p>
                Hi everyone, I&apos;m <span className="font-semibold text-amber-300">{profile.name}</span>. I&apos;m
                currently working as a <span className="font-semibold text-amber-300">Software Developer at {profile.company}</span>,
                where I build mobile apps, WhatsApp-driven commerce and real-time systems.
              </p>
              <p>
                I work across React Native, React.js, Vue.js and Node.js. I enjoy the full path from a rough idea to a
                published app: typed data models, resilient real-time connections, payment flows that handle failure, and
                CI/CD that ships safely.
              </p>
              <p>
                I started my career in 2022 as a trainee, moved through frontend roles, and now own products end to end.
                I hold an engineering degree in Mechanical Engineering, which is where my problem-first mindset comes from.
              </p>
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full">
            <div className="space-y-5 p-7">
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <div>
                  <p className="text-sm text-zinc-500">Currently</p>
                  <p className="font-semibold">{experience[0].role}, {profile.company}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <div>
                  <p className="text-sm text-zinc-500">Education</p>
                  <p className="font-semibold">{education.degree}</p>
                  <p className="text-sm text-zinc-400">{education.school} · {education.score}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <div>
                  <p className="text-sm text-zinc-500">Based in</p>
                  <p className="font-semibold">{profile.location}</p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Professional <span className="gradient-text">skillset</span>
            </>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.07} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-6">
                  <h3 className="text-base font-bold">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span key={it} className="chip">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="Beyond code"
          title={
            <>
              Outside of <span className="gradient-text">coding</span>
            </>
          }
          text="Activities that keep me inspired and motivated."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.08} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex items-center gap-4 p-6">
                  <span className="text-3xl" aria-hidden>
                    {it.emoji}
                  </span>
                  <p className="font-semibold">{it.label}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
