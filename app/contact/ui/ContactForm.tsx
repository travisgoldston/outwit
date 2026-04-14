"use client";

import { useMemo, useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const painOptions = [
  "Not enough leads",
  "Leads are the wrong fit",
  "Marketing feels like a black box",
  "Website feels outdated",
  "I'm tired of guessing",
  "Other",
] as const;

type ContactPref = "Call" | "Text" | "Email";

export default function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [pain, setPain] = useState<(typeof painOptions)[number] | "">("");
  const [pref, setPref] = useState<ContactPref>("Email");
  const [contactValue, setContactValue] = useState("");
  const [notes, setNotes] = useState("");

  const canNext = useMemo(() => {
    if (step === 1) return name.trim().length > 0;
    if (step === 2) return business.trim().length > 0;
    if (step === 3) return pain !== "";
    if (step === 4) return contactValue.trim().length > 0;
    if (step === 5) return true;
    return true;
  }, [step, name, business, pain, contactValue]);

  const progress = (step / 5) * 100;

  if (submitted) {
    return (
      <div className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm">
        <p className="ow-label">Submitted</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Got it.</h2>
        <p className="mt-4 text-ow-mid">
          I&apos;ll review how you show up online and get back to you within one business day.
        </p>
        <div className="mt-6 text-sm text-ow-mid">
          <p>
            <span className="font-semibold text-ow-charcoal">Name:</span> {name}
          </p>
          <p className="mt-1">
            <span className="font-semibold text-ow-charcoal">Business:</span> {business}
          </p>
          <p className="mt-1">
            <span className="font-semibold text-ow-charcoal">Hardest part:</span> {pain}
          </p>
          <p className="mt-1">
            <span className="font-semibold text-ow-charcoal">Contact:</span> {pref} — {contactValue}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="rounded-ow border border-[rgba(20,40,60,0.18)] bg-white p-8 shadow-ow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ow-mid">
            Step {Math.min(step, 5)} of 5
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ow-mid">
            {Math.round(progress)}%
          </p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[rgba(20,40,60,0.08)]">
          <div className="h-full bg-ow-orange" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 1 && (
        <Field
          label="What should I call you?"
          help="First name is fine."
          value={name}
          onChange={setName}
          placeholder="Your name"
          autoFocus
        />
      )}

      {step === 2 && (
        <Field
          label="What kind of business do you run?"
          help="Ex: plumber, law firm, med spa, contractor, etc."
          value={business}
          onChange={setBusiness}
          placeholder="Business type"
          autoFocus
        />
      )}

      {step === 3 && (
        <div>
          <Label>What feels hardest about marketing right now?</Label>
          <div className="mt-4 grid gap-2">
            {painOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setPain(opt)}
                className={[
                  "flex items-center justify-between rounded-ow-sm border px-4 py-3 text-left text-sm transition",
                  pain === opt
                    ? "border-[rgba(240,100,0,0.45)] bg-[rgba(240,100,0,0.08)] text-ow-charcoal"
                    : "border-[rgba(20,40,60,0.18)] bg-white text-ow-mid hover:border-[rgba(20,40,60,0.25)]",
                ].join(" ")}
              >
                <span className="font-medium">{opt}</span>
                {pain === opt ? <span className="text-ow-orange">✓</span> : null}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <Label>How do you prefer I get back to you?</Label>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["Call", "Text", "Email"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPref(p)}
                className={[
                  "rounded-full border px-4 py-2 text-xs font-semibold transition",
                  pref === p
                    ? "border-[rgba(240,100,0,0.45)] bg-[rgba(240,100,0,0.08)] text-ow-charcoal"
                    : "border-[rgba(20,40,60,0.18)] bg-white text-ow-slate hover:border-[rgba(20,40,60,0.25)]",
                ].join(" ")}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <Field
              label={pref === "Email" ? "Email" : "Phone number"}
              value={contactValue}
              onChange={setContactValue}
              placeholder={pref === "Email" ? "you@company.com" : "(469) 555-1234"}
              autoFocus
            />
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <Label>Anything else you want me to know?</Label>
          <p className="mt-2 text-sm text-ow-mid">
            Optional. A URL is helpful.
          </p>
          <textarea
            className="mt-4 min-h-[140px] w-full rounded-ow-sm border border-[rgba(20,40,60,0.18)] bg-white px-3 py-2 text-sm text-ow-charcoal outline-none transition focus:border-[rgba(240,100,0,0.45)]"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anything that helps me understand the situation..."
          />
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s))}
          className="rounded-ow-sm border border-[rgba(20,40,60,0.18)] bg-white px-5 py-2.5 text-sm font-semibold text-ow-slate transition hover:border-ow-charcoal hover:text-ow-charcoal"
          disabled={step === 1}
        >
          Back
        </button>

        {step < 5 ? (
          <button
            type="button"
            onClick={() => {
              if (!canNext) return;
              setStep((s) => ((s + 1) as Step));
            }}
            className="rounded-ow-sm bg-ow-charcoal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ow-slate disabled:opacity-50"
            disabled={!canNext}
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-ow-sm bg-ow-orange px-6 py-2.5 text-sm font-bold text-white transition hover:bg-ow-ember hover:shadow-[0_8px_28px_rgba(240,100,0,0.35)]"
          >
            Book a Strategy Call
          </button>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ow-mid">
        No pressure. No pitch deck. Just a real look at how you show up online.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-ow-charcoal">
      {children}
    </p>
  );
}

function Field(props: {
  label: string;
  help?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <div>
      <Label>{props.label}</Label>
      {props.help ? <p className="mt-2 text-sm text-ow-mid">{props.help}</p> : null}
      <input
        autoFocus={props.autoFocus}
        className="mt-4 w-full rounded-ow-sm border border-[rgba(20,40,60,0.18)] bg-white px-3 py-2 text-sm text-ow-charcoal outline-none transition focus:border-[rgba(240,100,0,0.45)]"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
      />
    </div>
  );
}

