import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, text, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-zinc-400">{text}</p>}
    </Reveal>
  );
}
