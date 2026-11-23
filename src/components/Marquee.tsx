import { techMarquee } from "@/data/portfolio";

export default function Marquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div
      aria-label="Technologies I work with"
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10 text-sm font-medium text-zinc-400">
            {t}
            <span aria-hidden className="h-1 w-1 rounded-full bg-violet-400/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
