import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Noor Boutique — slow fashion crafted in Lahore since 2019. Meet the artisans and values behind every piece.",
};

const VALUES = [
  {
    title: "Craft First",
    text: "Every seam, motif and hem is finished by hand. We would rather make fewer pieces than compromise on one.",
  },
  {
    title: "Honest Fabric",
    text: "We source premium lawn, nida and silk from mills we trust — and we tell you exactly what you're wearing.",
  },
  {
    title: "Modest & Modern",
    text: "Our designs honor tradition while embracing the contemporary woman's wardrobe, from abayas to evening gowns.",
  },
  {
    title: "Fair Hands",
    text: "Our artisans are paid above market rates and credited for their craft. Good clothing should do good.",
  },
];

const TIMELINE = [
  {
    year: "2019",
    text: "Noor begins at a single stitching table in Lahore with twelve lawn designs and a big dream.",
  },
  {
    year: "2021",
    text: "Our abaya atelier opens. The Noir Gold-Trim Abaya sells out three restocks in a row.",
  },
  {
    year: "2023",
    text: "We launch formal couture and dress over 500 brides and wedding guests in one season.",
  },
  {
    year: "2026",
    text: "12,000+ clients across 48 cities — and every piece still cut in small, careful batches.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl text-charcoal leading-[1.08] mb-6">
              From a Single Stitching Table to{" "}
              <span className="italic text-rosegold-dark">12,000 Wardrobes</span>
            </h1>
            <p className="text-charcoal-soft leading-relaxed mb-5">
              Noor Boutique was founded in Lahore in 2019 by two sisters who
              believed Pakistani craft deserved better than mass production.
              They started with twelve lawn designs, a borrowed cutting table,
              and one stubborn rule: never sell anything they wouldn&apos;t proudly
              wear themselves.
            </p>
            <p className="text-charcoal-soft leading-relaxed">
              Seven years later, that rule still runs the house. Our artisans
              — many with us since day one — cut, embroider and finish every
              piece in small batches, so what reaches you feels personal,
              not produced.
            </p>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_80px_rgba(42,36,33,0.16)]">
              <Image
                src="/hero-boutique.webp"
                alt="Inside the Noor Boutique flagship store"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-ivory border border-linen rounded-2xl px-8 py-6 shadow-xl">
              <p className="font-serif text-4xl text-rosegold-dark">40+</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal-mute mt-1">
                Artisan hands
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="bg-ivory border-y border-linen/60 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Values Stitched Into Every Piece
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full bg-cream border border-linen/70 rounded-2xl p-8 hover:shadow-[0_16px_44px_rgba(183,110,121,0.14)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-11 h-11 rounded-full bg-blush/80 flex items-center justify-center mb-5">
                    <span className="font-serif text-xl text-rosegold-dark">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
              The Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Milestones Along the Way
            </h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-rosegold-light via-goldline to-rosegold-light" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 100}>
                  <div className="relative pl-14 sm:pl-16">
                    <span className="absolute left-2.5 sm:left-4 top-1 w-4 h-4 rounded-full bg-rosegold ring-4 ring-blush" />
                    <p className="font-serif text-2xl text-rosegold-dark mb-1.5">
                      {t.year}
                    </p>
                    <p className="text-charcoal-soft leading-relaxed">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 sm:py-20">
        <Reveal className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-4">
            Come, Be Part of the Story
          </h2>
          <p className="text-ivory/60 mb-8">
            Browse the collection our artisans poured their hearts into.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-rosegold text-ivory text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full hover:bg-rosegold-dark transition-all duration-300"
          >
            Shop the Collection <span>→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
