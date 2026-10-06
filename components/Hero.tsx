import { profile } from "@/content/profile";

const textLink =
  "font-semibold underline decoration-rule decoration-2 underline-offset-[6px] transition-colors hover:text-link hover:decoration-link";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-backdrop absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-24 sm:pb-24">
        {profile.availability && (
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-rule bg-surface/70 px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-available opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-available" />
            </span>
            {profile.availability}
          </p>
        )}

        <h1 className="font-stretch-expanded text-[clamp(2.75rem,11vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.03em]">
          {first}
          <br />
          {rest.join(" ")}
        </h1>

        <p className="mt-8 font-stretch-semi-expanded text-[1.375rem] leading-snug font-semibold text-balance sm:text-[1.75rem]">
          {profile.role} in {profile.location}.
        </p>
        <p className="mt-4 max-w-[36rem] text-muted sm:text-lg">{profile.intro}</p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink shadow-[0_0_0_1px_rgb(255_255_255/0.08),0_8px_30px_-8px_var(--accent)] transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface/70 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:border-link hover:text-link"
              >
                Résumé
                <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 3v10M6 9l4 4 4-4M4 16h12" />
                </svg>
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            )}
          </div>
          <div className="flex gap-6">
            <a href={profile.github} className={textLink}>
              GitHub
            </a>
            <a href={profile.linkedin} className={textLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
