import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/content/profile";
import { siteUrl } from "./site-url";

const description = `${profile.name} is a ${profile.role.toLowerCase()} in ${profile.location} working in React, Next.js, and Tailwind CSS, with a full-stack background.`;

export const metadata: Metadata = {
  // Used to build full links to the link-preview image (see app/site-url.ts)
  metadataBase: new URL(siteUrl()),
  title: `${profile.name} | ${profile.role}`,
  description,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#05070b" },
  ],
};

// Runs before the page paints so the saved theme never flashes the wrong colors.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-ink">
        {children}
        {/* Visitor counts in the Vercel dashboard (turn on under the project's Analytics tab) */}
        <Analytics />
      </body>
    </html>
  );
}
