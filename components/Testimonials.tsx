import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The Gulnaar lawn suit I ordered felt straight out of a designer studio. The embroidery is even finer in person — I have never received so many compliments.",
    name: "Mahnoor S.",
    detail: "Verified buyer · Lahore",
  },
  {
    quote:
      "Finally, abayas that understand modern modesty. The Sage Stone abaya drapes beautifully and the finishing is immaculate. Noor is now my go-to.",
    name: "Areeba K.",
    detail: "Verified buyer · Karachi",
  },
  {
    quote:
      "Ordered the Champagne formal for my sister's nikkah and the whole family asked where it was from. Packaging felt like opening a gift to myself.",
    name: "Hira A.",
    detail: "Verified buyer · Islamabad",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
            Client Love
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal leading-tight">
            Worn &amp; Adored Across Pakistan
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="h-full bg-cream border border-linen/70 rounded-2xl p-8 flex flex-col shadow-[0_4px_24px_rgba(42,36,33,0.05)] hover:shadow-[0_16px_44px_rgba(183,110,121,0.14)] hover:-translate-y-1 transition-all duration-500">
                <div className="font-serif text-5xl text-rosegold-light leading-none mb-4">
                  &ldquo;
                </div>
                <blockquote className="text-[15px] leading-relaxed text-charcoal-soft flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-linen/70">
                  <p className="font-serif text-lg text-charcoal">{t.name}</p>
                  <p className="text-xs tracking-[0.18em] uppercase text-charcoal-mute mt-1">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
