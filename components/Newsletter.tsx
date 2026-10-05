"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section className="bg-blush/60 py-20 sm:py-24 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rosegold-light/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-goldline/20 blur-3xl"
      />
      <Reveal className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold-dark mb-4">
          The Noor Circle
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal leading-tight mb-4">
          First to Know, First to Shine
        </h2>
        <p className="text-charcoal-soft leading-relaxed mb-8 max-w-lg mx-auto">
          Join our circle for early access to new collections, private sale
          invitations and styling notes — plus 10% off your first order.
        </p>

        {done ? (
          <div className="bg-ivory border border-rosegold/30 rounded-2xl px-8 py-7 shadow-sm">
            <p className="font-serif text-2xl text-charcoal mb-2">
              Welcome to the circle
            </p>
            <p className="text-sm text-charcoal-soft">
              Your 10% welcome code is on its way to{" "}
              <span className="font-medium text-charcoal">{email.trim()}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-ivory border border-linen rounded-full px-6 py-4 text-sm text-charcoal placeholder:text-charcoal-mute focus:outline-none focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 transition"
            />
            <button
              type="submit"
              className="bg-charcoal text-ivory text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full hover:bg-rosegold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        {error && !done && (
          <p className="mt-3 text-sm text-rosegold-dark">{error}</p>
        )}
      </Reveal>
    </section>
  );
}
