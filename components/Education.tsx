import { education } from "@/content/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="divide-y divide-rule">
        {education.map((item) => (
          <li
            key={`${item.program}-${item.start}`}
            className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <h3 className="font-semibold">{item.program}</h3>
              <p className="text-muted">{item.school}</p>
            </div>
            <p className="shrink-0 text-sm text-muted tabular-nums">
              {item.start} – {item.end}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
