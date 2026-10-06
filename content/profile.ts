/**
 * All of the site's content lives in this file.
 * Edit the values below and the pages update automatically.
 */

export const profile = {
  name: "Sean Birmingham",
  role: "Front-end developer",
  location: "Great Mills, Maryland",
  email: "sean.birmingham98@gmail.com",
  // Portrait shown in the About section (file lives in /public)
  photo: "/sean-birmingham.jpg",
  github: "https://github.com/sean-birmingham",
  linkedin: "https://www.linkedin.com/in/sean-birmingham",
  // Résumé PDF in /public, linked from the hero. Set to null to hide the button.
  resume: null as string | null,
  // Shown above your name with a status dot. Set to null to hide it.
  availability: "Open to front-end and full-stack roles" as string | null,
  intro: "I build responsive web interfaces with React and Next.js, backed by full-stack training in Node.js, Express, and SQL.",
  about:
    "I care most about the part of an application people actually touch: interfaces that feel effortless on any screen, built with clean, maintainable code the next developer can pick up without a tour. As a team lead at Bloom Institute of Technology, I mentored newer developers and ran the stand-ups and code reviews that kept the team moving.",
};

/** Your tech, front end first. Builds the "Tech I use" list in About. */
export const stack = [
  { layer: "Front end", tools: ["React", "Next.js", "Redux Toolkit", "Context API", "React Native", "Tailwind CSS"] },
  { layer: "Back end and data", tools: ["Node.js", "Express", "REST APIs", "Python", "SQL", "PostgreSQL", "MongoDB", "JSON"] },
  { layer: "Testing and tooling", tools: ["Jest", "Cypress", "Git", "Docker", "CI/CD"] },
];

export const languages = ["JavaScript", "HTML", "CSS", "Sass/Less"];

/** Most recent first. */
export const experience = [
  {
    role: "Front-End Developer",
    company: "Independent projects",
    location: "Remote",
    start: "2022",
    end: "Present",
    highlights: [
      "Built Filmpire by following a JavaScript Mastery course: a movie discovery app with TMDB sign-in, favorites and watchlists, and an AI voice assistant, using React, Redux Toolkit, and Material UI.",
      "Designed and built this portfolio with Next.js, TypeScript, and Tailwind CSS, with light and dark themes and a fully responsive layout.",
    ],
  },
  {
    role: "Team Lead, Full Stack Web Development",
    company: "Bloom Institute of Technology",
    location: "Remote",
    start: "Jul 2020",
    end: "Oct 2020",
    highlights: [
      "Mentored junior developers one-on-one through full-stack concepts and debugging complex codebases.",
      "Ran daily stand-ups, code reviews, and sprint retrospectives using agile practices.",
      "Reviewed projects and gave feedback on code quality, performance, and architecture.",
      "Worked with instructors and engineering leads on curriculum updates and technical standards.",
    ],
  },
];

/** Most recent first. Each program ended with a certificate. */
export const education = [
  {
    school: "Nucamp Coding Bootcamp",
    program: "Backend, SQL & DevOps with Python",
    start: "Apr 2022",
    end: "Jul 2022",
  },
  {
    school: "Nucamp Coding Bootcamp",
    program: "Front-End Web & Mobile Development",
    start: "Aug 2021",
    end: "Dec 2021",
  },
  {
    school: "Bloom Institute of Technology",
    program: "Full Stack Web Development & Computer Science",
    start: "Sep 2019",
    end: "Jan 2021",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  /** Link to view the certificate. Leave out to hide the "View certificate" link. */
  url?: string;
};

/** Most recent first. */
export const certifications: Certification[] = [
  {
    name: "Backend, SQL, and DevOps with Python",
    issuer: "Nucamp Coding Bootcamp",
    year: "2022",
    url: "https://drive.google.com/file/d/1TBJVtFCiW1-bovWkj_6PTNdMmTrTLar9/view?usp=drivesdk",
  },
  {
    name: "Front End Web + Mobile Development",
    issuer: "Nucamp Coding Bootcamp",
    year: "2021",
    url: "https://drive.google.com/file/d/1xTbq86xWzBQZ97qflN7QuWGfvkhmWsRh/view?usp=drive_link",
  },
  {
    name: "Full-Stack Web Development + Technical Interviewing",
    issuer: "Bloom Institute of Technology",
    year: "2021",
    url: "https://drive.google.com/file/d/1rcLGZltQfdc8AB_bOxbxIqQ2ppS6lqW4/view?usp=drive_link",
  },
];

export type Project = {
  title: string;
  /** What it does, what you built, and one problem you solved along the way */
  description: string;
  tech: string[];
  /** Link to the live site, if there is one */
  liveUrl?: string;
  /** Link to the source code, if it's public */
  repoUrl?: string;
  /** Short note shown under the title, e.g. where the project came from */
  credit?: string;
  /**
   * Screenshots in /public/projects. Visitors see the one that matches their
   * screen: phone (under 640px wide), tablet (640 to 1023px), or desktop.
   * Phone and tablet are optional; desktop is used when they're missing.
   * Frames: phone 13:20 (e.g. 780x1200), tablet 3:4 (e.g. 1536x2048),
   * desktop 16:10 (e.g. 1600x1000). Other sizes are cropped from the top.
   */
  screenshots?: { desktop: string; tablet?: string; mobile?: string };
};

/**
 * Add your best 3 to 5 projects here. Once this list has entries, the
 * Projects section moves up to sit right after About, ahead of Experience.
 *
 * Example:
 * {
 *   title: "Project name",
 *   description: "What it does, what you built, and one problem you solved.",
 *   tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
 *   liveUrl: "https://example.com",
 *   repoUrl: "https://github.com/sean-birmingham/project",
 *   screenshots: { desktop: "/projects/project-desktop.jpg", mobile: "/projects/project-mobile.jpg" },
 * },
 */
export const projects: Project[] = [
  {
    title: "Filmpire",
    description:
      "A movie discovery app built on The Movie Database API. Browse popular, top-rated, and upcoming films or filter by genre, search any title, and open a movie to see its trailer, cast, and recommendations. Sign in with a TMDB account to save favorites and a watchlist, switch between light and dark mode, or get around hands-free with an AI voice assistant.",
    tech: ["React", "Redux Toolkit (RTK Query)", "Material UI", "TMDB API", "Alan AI"],
    liveUrl: "https://filmpire-sbirmingham.netlify.app/",
    repoUrl: "https://github.com/sean-birmingham/filmpire_sb",
    credit: "Built by following a JavaScript Mastery course",
    screenshots: {
      desktop: "/projects/filmpire-desktop.jpg",
      tablet: "/projects/filmpire-tablet.jpg",
      mobile: "/projects/filmpire-mobile.jpg",
    },
  },
];
