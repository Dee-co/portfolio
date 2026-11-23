"use client";

import { useRef } from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

// Card with a soft light that follows the cursor.
export default function SpotlightCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/30",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,0.16), transparent 45%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
