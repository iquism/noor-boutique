import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Noor Boutique — visit our Lahore flagship, call us, or send a message. We reply within one working day.",
};

const INFO = [
  {
    title: "Visit the Flagship",
    lines: ["14-C, Main Boulevard,", "Gulberg III, Lahore, Pakistan"],
  },
  {
    title: "Call or WhatsApp",
    lines: ["+92 42 3578 1234", "+92 300 123 4567"],
  },
  {
    title: "Write to Us",
    lines: ["hello@noorboutique.pk", "care@noorboutique.pk"],
  },
  {
    title: "Boutique Hours",
    lines: ["Mon – Sat: 10am – 9pm", "Sunday: 12pm – 8pm"],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <section className="bg-sand/60 border-b border-linen/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
            We&apos;d Love to Hear From You
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-charcoal-soft max-w-xl mx-auto leading-relaxed">
            Questions about sizing, orders or custom pieces? Send us a message
            — we reply within one working day.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
        {/* form */}
        <Reveal className="lg:col-span-3">
          <div className="bg-ivory border border-linen/70 rounded-[1.75rem] p-7 sm:p-10 shadow-[0_18px_60px_rgba(42,36,33,0.08)]">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
              Send a Message
            </h2>
            <p className="text-sm text-charcoal-mute mb-8">
              Fields marked * are required.
            </p>
            <ContactForm />
          </div>
        </Reveal>

        {/* info cards */}
        <div className="lg:col-span-2 space-y-5">
          {INFO.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="bg-ivory border border-linen/70 rounded-2xl p-6 sm:p-7 hover:shadow-[0_14px_40px_rgba(183,110,121,0.12)] transition-shadow duration-500">
                <h3 className="text-[11px] tracking-[0.3em] uppercase text-rosegold-dark mb-3">
                  {c.title}
                </h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-charcoal-soft text-[15px] leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal delay={360}>
            <div className="bg-charcoal rounded-2xl p-6 sm:p-7">
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-goldline mb-3">
                Custom &amp; Bridal Orders
              </h3>
              <p className="text-ivory/70 text-sm leading-relaxed">
                Dreaming of a made-to-measure formal or bridal piece? Book a
                private consultation at the flagship — our designers will
                sketch it with you.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
