import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-violet-300">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        This page <span className="gradient-text">got lost</span>
      </h1>
      <p className="mt-4 text-zinc-400">
        The page you are looking for does not exist or was moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
