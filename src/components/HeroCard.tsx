"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const floaters = [
  { label: "React Native", className: "-left-6 -top-4 animate-float" },
  { label: "TypeScript", className: "-right-5 top-20 animate-float-slow" },
  { label: "Socket.io", className: "-left-6 -bottom-5 animate-float-slow" },
  { label: "MQTT", className: "-right-4 -bottom-4 animate-float" },
];

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <div aria-hidden className="absolute -inset-3 rounded-[2rem] sm:-inset-6 bg-gradient-to-br from-violet-600/30 via-fuchsia-600/20 to-amber-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/80 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-zinc-500">developer.ts</span>
        </div>

        <div className="flex items-center gap-4 px-5 pt-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xl font-bold shadow-lg shadow-violet-900/50">
            {profile.initials}
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">{profile.name}</p>
            <p className="text-sm text-zinc-400">{profile.title} at {profile.company}</p>
          </div>
        </div>

        <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7">
          <code>
            <span className="text-fuchsia-400">const</span> <span className="text-sky-300">developer</span> <span className="text-zinc-500">=</span> {"{"}
            {"\n"}  <span className="text-zinc-300">role</span>: <span className="text-amber-300">&quot;React Native&quot;</span>,
            {"\n"}  <span className="text-zinc-300">experience</span>: <span className="text-amber-300">&quot;4+ years&quot;</span>,
            {"\n"}  <span className="text-zinc-300">stack</span>: [<span className="text-amber-300">&quot;TypeScript&quot;</span>,
            {"\n"}    <span className="text-amber-300">&quot;Redux Toolkit&quot;</span>, <span className="text-amber-300">&quot;Socket.io&quot;</span>],
            {"\n"}  <span className="text-zinc-300">shipped</span>: [<span className="text-amber-300">&quot;Play Store&quot;</span>,
            {"\n"}    <span className="text-amber-300">&quot;App Store&quot;</span>],
            {"\n"}  <span className="text-zinc-300">shipsFast</span>: <span className="text-emerald-300">true</span>,
            {"\n"}{"}"};
          </code>
        </pre>
      </div>

      {floaters.map((f) => (
        <span
          key={f.label}
          className={`absolute hidden rounded-full border border-white/15 bg-ink-800/90 px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-xl backdrop-blur-md sm:block ${f.className}`}
        >
          {f.label}
        </span>
      ))}
    </motion.div>
  );
}
