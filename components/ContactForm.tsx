"use client";

import { useState } from "react";

const inputCls =
  "w-full bg-cream/60 border border-linen rounded-xl px-5 py-3.5 text-sm text-charcoal placeholder:text-charcoal-mute focus:outline-none focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 transition";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 mx-auto rounded-full bg-blush flex items-center justify-center mb-5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rosegold-dark">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-3">
          Message received, {form.name.trim().split(" ")[0]}
        </h3>
        <p className="text-sm text-charcoal-soft leading-relaxed max-w-sm mx-auto">
          Thank you for writing to Noor Boutique. Our team will reply to{" "}
          <span className="font-medium text-charcoal">{form.email.trim()}</span>{" "}
          within one working day.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", email: "", subject: "General Enquiry", message: "" });
          }}
          className="mt-6 text-xs tracking-[0.22em] uppercase text-rosegold-dark border-b border-rosegold/40 pb-1 hover:border-rosegold-dark transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-xs tracking-[0.18em] uppercase text-charcoal-soft mb-2">
            Your Name *
          </label>
          <input id="cf-name" value={form.name} onChange={set("name")} placeholder="Ayesha Khan" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs tracking-[0.18em] uppercase text-charcoal-soft mb-2">
            Email *
          </label>
          <input id="cf-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className="block text-xs tracking-[0.18em] uppercase text-charcoal-soft mb-2">
          Subject
        </label>
        <select id="cf-subject" value={form.subject} onChange={set("subject")} className={`${inputCls} cursor-pointer`}>
          <option>General Enquiry</option>
          <option>Order &amp; Delivery</option>
          <option>Size Guidance</option>
          <option>Custom / Bridal Order</option>
          <option>Feedback</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-xs tracking-[0.18em] uppercase text-charcoal-soft mb-2">
          Message *
        </label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={set("message")}
          rows={5}
          placeholder="How can we help you look elegant today?"
          className={`${inputCls} resize-none`}
        />
      </div>
      {error && <p className="text-sm text-rosegold-dark">{error}</p>}
      <button
        type="submit"
        className="w-full sm:w-auto bg-rosegold text-ivory text-xs tracking-[0.25em] uppercase px-12 py-4 rounded-full hover:bg-rosegold-dark transition-all duration-300 shadow-[0_10px_30px_rgba(183,110,121,0.35)]"
      >
        Send Message
      </button>
    </form>
  );
}
