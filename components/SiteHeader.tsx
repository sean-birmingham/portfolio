import { ThemeToggle } from "./ThemeToggle";

// Same order as the sections on the page
const links = [
  { href: "#about", label: "About", wideOnly: true },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/60 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="font-stretch-expanded text-lg font-extrabold tracking-tight"
          aria-label="Sean Birmingham, back to top"
        >
          SB
        </a>
        <div className="flex items-center gap-3 sm:gap-8">
          <nav aria-label="Sections">
            <ul className="flex gap-3.5 text-[0.8125rem] sm:gap-7 sm:text-[0.9375rem]">
              {links.map((link) => (
                <li key={link.href} className={"wideOnly" in link ? "hidden sm:block" : undefined}>
                  <a href={link.href} className="text-muted transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
