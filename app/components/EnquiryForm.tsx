"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full bg-transparent text-sm font-semibold text-brown placeholder:font-medium placeholder:text-brown/35 focus:outline-none";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send the enquiry to your CRM / email service. Nothing is submitted yet.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="animate-fade-up flex flex-col items-center gap-2 py-3 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
        <span className="grid size-12 place-items-center rounded-full bg-gold text-xl text-brown">
          ✓
        </span>
        <div>
          <p className="font-display text-xl text-brown">
            Thank you — your enquiry is noted.
          </p>
          <p className="text-sm text-muted">
            Our team will reach out to schedule your private preview.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:gap-0"
    >
      <Field label="Your name" icon="user">
        <input name="name" required placeholder="Full name" className={fieldClass} />
      </Field>
      <Field label="Phone" icon="phone">
        <input
          name="phone"
          type="tel"
          required
          pattern="[0-9+ ]{10,14}"
          placeholder="+91 00000 00000"
          className={fieldClass}
        />
      </Field>
      <Field label="Residence" icon="home">
        <select name="residence" defaultValue="2 BHK" className={fieldClass}>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>Not sure yet</option>
        </select>
      </Field>
      <Field label="Site visit" icon="calendar">
        <input name="date" type="date" className={fieldClass} />
      </Field>
      <button type="submit" className="btn btn-dark sm:col-span-2 lg:col-span-1 lg:ml-4">
        Enquire
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

const icons = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  phone:
    "M5 4h3l2 5-2.500 1.500a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z",
  home: "M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z",
  calendar: "M5 6h14v14H5V6Zm0 4h14M9 3v4m6-4v4",
};

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: keyof typeof icons;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-3 lg:border-r lg:border-gold/25 lg:px-5 lg:first:pl-1">
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-cream/60">
        <svg
          viewBox="0 0 24 24"
          className="size-[18px] fill-none stroke-gold-deep"
          strokeWidth="1.600"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d={icons[icon]} />
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-medium text-muted">{label}</span>
        {children}
      </span>
    </label>
  );
}
