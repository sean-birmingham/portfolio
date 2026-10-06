import Image from "next/image";
import { profile, tech } from "@/content/profile";
import { Section } from "./Section";

function Portrait() {
  return (
    <div className="relative w-full max-w-[13rem]">
      {/* Offset outline behind the photo */}
      <div aria-hidden="true" className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border-2 border-link/60" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-rule bg-surface shadow-[0_24px_60px_-24px_var(--accent)]">
        <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill sizes="208px" className="object-cover" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" title="About" aside={<Portrait />}>
      <p className="max-w-[40rem]">{profile.about}</p>
      <p className="mt-4 max-w-[40rem]">
        {profile.hobbies.text}{" "}
        <a
          href={profile.hobbies.link.href}
          className="font-semibold underline decoration-link decoration-2 underline-offset-[5px] transition-colors hover:text-link"
        >
          {profile.hobbies.link.label}
        </a>
        .
      </p>

      <h3 className="mt-10 font-stretch-semi-expanded text-base font-bold">Tech I use</h3>
      <ul className="mt-4 flex max-w-[40rem] flex-wrap gap-2">
        {tech.map((item) => (
          <li key={item} className="rounded-full border border-rule px-3 py-1 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
