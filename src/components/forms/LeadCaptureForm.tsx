"use client";

import { FormEvent, useState } from "react";

const serviceOptions = ["Website", "Landing Page", "SEO", "Ads", "Automation", "Other"] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: serviceOptions[0],
  budget: "",
  message: "",
};

export function LeadCaptureForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setStatus({ ok: false, message: result.error ?? "Request failed. Please try again." });
        return;
      }

      setStatus({ ok: true, message: "Thanks! Your request has been submitted." });
      setForm(initialState);
    } catch {
      setStatus({ ok: false, message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[var(--background-elevated)] p-5 sm:p-6 md:p-8">
        {status ? (
          <div
            role={status.ok ? "status" : "alert"}
            aria-live="polite"
            className={[
              "mb-5 rounded-lg border px-4 py-3 text-sm",
              status.ok
                ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400",
            ].join(" ")}
          >
            {status.message}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
            <label className="grid gap-2 text-sm text-fg">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Name *</span>
              <input
                required
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="focus-ring w-full min-h-11 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-3 py-2 text-sm"
                placeholder="Rahul"
              />
            </label>

            <label className="grid gap-2 text-sm text-fg">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Phone *</span>
              <input
                required
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                className="focus-ring w-full min-h-11 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-3 py-2 text-sm"
                placeholder="9876543210"
              />
            </label>

            <label className="grid gap-2 text-sm text-fg">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Email</span>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="focus-ring w-full min-h-11 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-3 py-2 text-sm"
                placeholder="rahul@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm text-fg">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Service Needed *</span>
              <select
                required
                value={form.service}
                onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                className="focus-ring w-full min-h-11 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-3 py-2 text-sm"
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-[var(--background)] text-fg">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm text-fg sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Budget</span>
              <input
                type="text"
                inputMode="numeric"
                value={form.budget}
                onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                className="focus-ring w-full min-h-11 rounded-md border border-[color:var(--border-subtle)] bg-transparent px-3 py-2 text-sm"
                placeholder="20000"
              />
            </label>

            <label className="grid gap-2 text-sm text-fg sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="focus-ring w-full rounded-md border border-[color:var(--border-subtle)] bg-transparent px-3 py-2 text-sm"
                placeholder="Tell us your requirement and timeline."
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </button>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">
              By submitting, you agree to be contacted about your inquiry.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
