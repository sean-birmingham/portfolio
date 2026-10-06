import { profile } from "@/content/profile";
import { ContactForm } from "./ContactForm";
import { CopyEmailButton } from "./CopyEmailButton";

// Set this in Vercel (Settings → Environment Variables) or in .env.local.
// Without it, the form is hidden and visitors see your email instead.
const formKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/** Dark in both themes, so the page always ends on black and blue. */
export function Contact() {
  const year = new Date().getFullYear();
  const [emailUser, emailDomain] = profile.email.split("@");
  const linkClass =
    "font-semibold underline decoration-night-ink/30 decoration-2 underline-offset-[6px] transition-colors hover:text-night-link hover:decoration-night-link";

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mt-10 scroll-mt-16 overflow-hidden bg-night text-night-ink dark:border-t dark:border-rule dark:bg-surface"
    >
      {/* Thin blue horizon line along the top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-night-link)_30%,var(--color-night-link)_70%,transparent)] opacity-70"
      />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-24">
        <div className={formKey ? "grid gap-12 lg:grid-cols-2 lg:gap-16" : ""}>
          <div>
            <h2 id="contact-heading" className="font-stretch-expanded text-[1.625rem] leading-tight font-extrabold tracking-tight sm:text-[1.875rem]">
              Get in touch
            </h2>
            <p className="mt-3 max-w-[36rem] text-night-muted">
              {formKey
                ? "Have a role or a project in mind? Send me a message here, or email me directly."
                : "Have a role or a project in mind? Email is the quickest way to reach me."}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className={`mt-8 inline-block font-stretch-semi-expanded leading-tight font-bold underline decoration-night-link decoration-2 underline-offset-[0.2em] transition-colors hover:text-night-link sm:decoration-[3px] ${
                formKey ? "text-[clamp(1.125rem,4.6vw,1.625rem)]" : "text-[clamp(1.125rem,5.2vw,3rem)]"
              }`}
            >
              {/* Allow a line break only after the @ on narrow screens */}
              {emailUser}@<wbr />
              {emailDomain}
            </a>
            <div className="mt-5">
              <CopyEmailButton email={profile.email} />
            </div>

            <ul className="mt-8 flex gap-8">
              <li>
                <a href={profile.linkedin} className={linkClass}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} className={linkClass}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {formKey && <ContactForm accessKey={formKey} email={profile.email} />}
        </div>

        <p className="mt-16 border-t border-night-ink/10 pt-6 text-sm text-night-muted">
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
