import { getImageProps } from "next/image";
import { projects, type Project } from "@/content/profile";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className={`grid gap-x-10 gap-y-14 ${projects.length > 1 ? "sm:grid-cols-2" : "max-w-[40rem]"}`}>
        {projects.map((project) => (
          <ProjectEntry key={project.title} project={project} wide={projects.length === 1} />
        ))}
      </ul>
    </Section>
  );
}

type Kind = "mobile" | "tablet" | "desktop";

/*
  Frame shape for each kind of screenshot, written out per breakpoint so
  Tailwind can see the full class names. Phone: under 640px. Tablet: 640 to
  1023px. Desktop: 1024px and up.
*/
const FRAME = {
  base: {
    mobile: "aspect-[13/20] max-w-[22rem] rounded-[1.75rem]",
    tablet: "aspect-[3/4] max-w-[26rem] rounded-[1.5rem]",
    desktop: "aspect-[16/10] max-w-none rounded-xl",
  },
  sm: {
    tablet: "sm:aspect-[3/4] sm:max-w-[26rem] sm:rounded-[1.5rem]",
    desktop: "sm:aspect-[16/10] sm:max-w-none sm:rounded-xl",
  },
  lg: "lg:aspect-[16/10] lg:max-w-none lg:rounded-xl",
} as const;

function Screenshot({ project, wide }: { project: Project; wide: boolean }) {
  const shots = project.screenshots!;
  const phoneKind: Kind = shots.mobile ? "mobile" : shots.tablet ? "tablet" : "desktop";
  const tabletKind = shots.tablet ? "tablet" : "desktop";
  const alt = `Screenshot of ${project.title}`;

  const desktop = getImageProps({
    src: shots.desktop,
    alt,
    fill: true,
    sizes: wide ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 420px, 100vw",
  }).props;
  const tablet = shots.tablet ? getImageProps({ src: shots.tablet, alt, fill: true, sizes: "416px" }).props : null;
  const mobile = shots.mobile ? getImageProps({ src: shots.mobile, alt, fill: true, sizes: "352px" }).props : null;

  return (
    <div
      className={`relative mb-5 w-full overflow-hidden border border-rule transition-colors group-hover:border-link ${FRAME.base[phoneKind]} ${FRAME.sm[tabletKind]} ${FRAME.lg}`}
    >
      <picture>
        {mobile && <source media="(max-width: 639px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />}
        {tablet && <source media="(max-width: 1023px)" srcSet={tablet.srcSet} sizes={tablet.sizes} />}
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
        <img
          {...desktop}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </picture>
    </div>
  );
}

function ProjectEntry({ project, wide }: { project: Project; wide: boolean }) {
  const linkClass =
    "font-semibold underline decoration-rule decoration-2 underline-offset-[6px] transition-colors hover:text-link hover:decoration-link";

  return (
    <li className="group">
      {project.screenshots && <Screenshot project={project} wide={wide} />}
      <h3 className="font-stretch-expanded text-xl leading-snug font-bold tracking-tight">{project.title}</h3>
      {project.credit && <p className="mt-1 text-sm text-muted">{project.credit}</p>}
      <p className="mt-3">{project.description}</p>
      <p className="mt-3 text-sm text-link">{project.tech.join(", ")}</p>
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-4 flex gap-6">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Visit the site
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              View the code
            </a>
          )}
        </div>
      )}
    </li>
  );
}
