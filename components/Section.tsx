import type { ReactNode } from "react";

export function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  /** Optional content under the heading in the left column (e.g. a photo) */
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="grid gap-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-10 lg:gap-12">
        <div>
          <h2
            id={`${id}-heading`}
            className="font-stretch-expanded text-[1.625rem] leading-tight font-extrabold tracking-tight sm:text-[1.875rem]"
          >
            {title}
          </h2>
          {aside && <div className="mt-6 mb-6 md:mt-8 md:mb-0">{aside}</div>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
