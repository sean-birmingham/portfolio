import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata = {
  title: `Page not found | ${profile.name}`,
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <div aria-hidden="true" className="hero-backdrop absolute inset-0 -z-10" />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:px-6">
        <Link href="/" className="font-stretch-expanded text-lg font-extrabold tracking-tight" aria-label={`${profile.name}, home`}>
          SB
        </Link>
        <div className="flex flex-1 flex-col justify-center py-16">
          <p className="font-stretch-expanded text-[clamp(5rem,22vw,11rem)] leading-none font-extrabold tracking-[-0.04em] text-link">
            404
          </p>
          <h1 className="mt-6 font-stretch-semi-expanded text-[1.75rem] leading-tight font-bold">This page doesn&apos;t exist.</h1>
          <p className="mt-3 max-w-[32rem] text-muted">The link may be broken, or the page may have moved.</p>
          <Link
            href="/"
            className="mt-8 self-start rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink shadow-[0_8px_30px_-8px_var(--accent)] transition-transform hover:-translate-y-0.5"
          >
            Go to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
