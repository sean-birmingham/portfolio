import { experience } from "@/content/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-rule">
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-stretch-semi-expanded text-xl leading-snug font-bold sm:text-[1.375rem]">
                  {job.role}
                </h3>
                <p className="mt-1 text-muted">
                  {job.company}, {job.location}
                </p>
              </div>
              <p className="shrink-0 text-muted tabular-nums sm:pt-1">
                {job.start} – {job.end}
              </p>
            </div>
            <ul className="mt-5 max-w-[42rem] space-y-3">
              {job.highlights.map((point) => (
                <li
                  key={point.slice(0, 24)}
                  className="relative pl-6 before:absolute before:top-[0.8em] before:left-0 before:h-[2px] before:w-3 before:rounded-full before:bg-link"
                >
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
