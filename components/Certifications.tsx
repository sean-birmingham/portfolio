import { certifications } from "@/content/profile";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <li key={cert.name} className="flex flex-col rounded-xl border border-rule bg-surface/60 p-5">
            {/* Seal mark */}
            <svg viewBox="0 0 24 24" className="size-7 text-link" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="9" r="6" />
              <path d="m9.5 9 1.7 1.7L14.6 7.4" />
              <path d="M8.5 14 7 21l5-2.5 5 2.5-1.5-7" />
            </svg>
            <h3 className="mt-4 leading-snug font-semibold">{cert.name}</h3>
            <p className="mt-1 text-sm text-muted">
              {cert.issuer}, {cert.year}
            </p>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-4 text-sm font-semibold text-link underline decoration-link/40 decoration-2 underline-offset-4 transition-colors hover:decoration-link"
              >
                View certificate
                <span className="sr-only"> for {cert.name} (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
