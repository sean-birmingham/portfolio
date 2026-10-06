"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Sends messages to your inbox through Web3Forms (free, 250 messages a month).
 * Works without JavaScript too: the form then posts straight to Web3Forms,
 * which shows its own confirmation page.
 */
export function ContactForm({ accessKey, email }: { accessKey: string; email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = (await response.json().catch(() => ({}))) as { success?: boolean };
      if (response.ok && result.success !== false) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-night-ink/15 bg-night-ink/[0.04] p-6 sm:p-8">
        <svg viewBox="0 0 24 24" className="size-8 text-available" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m7.5 12.5 3 3 6-7" />
        </svg>
        <p className="mt-4 font-stretch-semi-expanded text-xl font-bold">Message sent</p>
        <p className="mt-2 text-night-muted">Thanks for reaching out. I&apos;ll reply to the email address you gave.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold underline decoration-night-ink/30 decoration-2 underline-offset-4 hover:decoration-night-link"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-xl border border-night-ink/15 bg-night-ink/[0.05] px-4 py-3 text-night-ink placeholder:text-night-muted/70 transition-colors focus:border-night-link focus:bg-night-ink/[0.08] focus:outline-none";

  return (
    <form action={ENDPOINT} method="POST" onSubmit={onSubmit} className="grid gap-5">
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="New message from your portfolio" />
      <input type="hidden" name="from_name" value="Portfolio contact form" />
      {/* Spam trap: hidden from people, bots tend to tick it */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name
          <input name="name" type="text" required autoComplete="name" maxLength={120} className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input name="email" type="email" required autoComplete="email" maxLength={200} className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Message
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Tell me about the role or project."
          className={`${field} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink shadow-[0_8px_30px_-8px_var(--accent)] transition-[transform,opacity] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-night-ink">
            Your message didn&apos;t go through. Try again, or email me at{" "}
            <a href={`mailto:${email}`} className="font-semibold underline decoration-night-link decoration-2 underline-offset-4">
              {email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
