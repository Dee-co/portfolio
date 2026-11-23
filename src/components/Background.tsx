export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[120px] animate-orbit" />
      <div className="absolute right-[-12%] top-[18%] h-[460px] w-[460px] rounded-full bg-fuchsia-600/20 blur-[120px] animate-orbit [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[28%] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[130px] animate-orbit [animation-delay:-12s]" />
    </div>
  );
}
