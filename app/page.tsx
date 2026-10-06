import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/content/profile";

export default function Home() {
  // Projects are the first thing reviewers look for, so they lead once there are some.
  const hasProjects = projects.length > 0;

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        {hasProjects && <Projects />}
        <Experience />
        {!hasProjects && <Projects />}
        <Education />
        <Certifications />
      </main>
      <Contact />
    </>
  );
}
