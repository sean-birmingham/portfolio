"use client";

import { useRef, useState } from "react";

/** Copies the email address, for visitors whose computer has no mail app set up. */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // Restart the countdown so repeat clicks keep "Copied" up for the full 2 seconds
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access was blocked; the address is still on the page to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-night-ink/20 px-4 py-2 text-sm font-semibold transition-colors hover:border-night-link hover:text-night-link"
    >
      {copied ? (
        <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m4 10.5 4 4 8-9" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        </svg>
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
