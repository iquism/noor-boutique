import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Noor Boutique — Wear Your Elegance",
  description:
    "Discover Noor Boutique's elegant eastern & western wear — embroidered lawn suits, kurtis, abayas and formal couture crafted in Pakistan.",
};

const COLLECTIONS = [
  {
    name: "The Lawn Edit",
    blurb: "Breathable luxury for sunlit days",
    image: "/products/mustard-lawn.webp",
    href: "/shop",
  },
  {
    name: "Abaya Atelier",
    blurb: "Modern modesty, tailored to you",
    image: "/products/sage-abaya.webp",
    href: "/shop",
  },
  {
    name: "Formal Couture",
    blurb: "Red-carpet moments, made here",
    image: "/products/rose-formal.webp",
    href: "/shop",
  },
];

const MARQUEE = [
  "Hand-Finished Embroidery",
  "Premium Fabrics",
  "Small-Batch Craft",
  "Nationwide Delivery",
  "Easy 7-Day Exchange",
];

const STATS = [
  { value: "12k+", label: "Happy Clients" },
  { value: "350+", label: "Original Designs" },
  { value: "4.9", label: "Average Rating" },
  { value: "48", label: "Cities Served" },
];

export default function Home() {
  const bestSellers = products.filter((p) =>
    ["gulnaar-lawn", "champagne-formal", "sage-abaya", "noir-abaya"].includes(p.id)
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative -mt-[104px] sm:-mt-[120px] min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-boutique.webp"
            alt="Inside the Noor Boutique flagship — rails of elegant eastern wear in warm light"
            fill
            priority
            sizes="100vw"
            className="object-cover animate-hero-drift"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 pt-56 w-full">
          <Reveal>
            <p className="text-[11px] sm:text-xs tracking-[0.42em] uppercase text-goldline mb-5">
              New Season · Festive &amp; Lawn 2026
            </p>
            <h1 className="font-serif text-ivory text-5xl sm:text-7xl lg:text-8xl leading-[1.04] max-w-3xl">
              Wear Your
              <span className="italic text-blush"> Elegance</span>
            </h1>
            <p className="mt-6 text-ivory/85 text-base sm:text-lg leading-relaxed max-w-xl">
              Embroidered lawn suits, graceful kurtis, modern abayas and
              red-carpet formals — crafted in small batches for women who
              dress with intention.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex justify-center items-center bg-rosegold text-ivory text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full hover:bg-rosegold-dark transition-all duration-300 shadow-[0_14px_40px_rgba(183,110,121,0.45)] hover:shadow-[0_18px_50px_rgba(183,110,121,0.6)] hover:-translate-y-0.5"
              >
                Shop New Arrivals
              </Link>
              <Link
                href="/about"
                className="inline-flex justify-center items-center border border-ivory/50 text-ivory text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full hover:bg-ivory hover:text-charcoal transition-all duration-300 backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="bg-charcoal py-4 overflow-hidden border-y border-goldline/20">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="mx-6 text-[11px] tracking-[0.32em] uppercase text-ivory/70 flex items-center gap-6"
            >
              {m}
              <span className="text-goldline text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ COLLECTIONS ============ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
                Curated For You
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal leading-tight">
                Shop by Collection
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs tracking-[0.25em] uppercase text-rosegold-dark border-b border-rosegold/40 pb-1 hover:border-rosegold-dark transition-colors self-start sm:self-auto"
            >
              View All Pieces
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {COLLECTIONS.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <Link
                  href={c.href}
                  className="group relative block rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_10px_36px_rgba(42,36,33,0.10)]"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[10px] tracking-[0.32em] uppercase text-goldline mb-2">
                      {c.blurb}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                      {c.name}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-ivory/90">
                      Explore
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEST SELLERS ============ */}
      <section className="bg-ivory py-20 sm:py-28 border-y border-linen/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal leading-tight mb-4">
              This Season&apos;s Bestsellers
            </h2>
            <p className="text-charcoal-soft leading-relaxed">
              The pieces our clients reorder, gift and rave about — restocked
              in limited quantities.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
            {bestSellers.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-charcoal text-ivory text-xs tracking-[0.25em] uppercase px-10 py-4 rounded-full hover:bg-rosegold-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              Shop the Full Catalog <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ STORY TEASER ============ */}
      <section className="bg-cream py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_80px_rgba(42,36,33,0.16)]">
              <Image
                src="/products/white-chikankari.webp"
                alt="Hand-finished chikankari embroidery on a Noor Boutique kurti"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-charcoal text-ivory rounded-2xl px-8 py-6 shadow-xl">
              <p className="font-serif text-4xl text-goldline">2019</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/70 mt-1">
                Crafting since
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
              Our Craft
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal leading-tight mb-6">
              Slow Fashion, Made with Love in Lahore
            </h2>
            <p className="text-charcoal-soft leading-relaxed mb-5">
              Noor began at a single stitching table with one belief — that
              Pakistani craft deserves a global stage. Every piece is cut,
              embroidered and finished by artisans we know by name, in
              batches small enough to keep quality uncompromised.
            </p>
            <p className="text-charcoal-soft leading-relaxed mb-8">
              No mass production. No shortcuts. Just fabric you can feel and
              detail you can see.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-rosegold-dark border-b-2 border-rosegold/40 pb-1.5 hover:border-rosegold-dark transition-colors"
            >
              Read Our Story <span>→</span>
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-linen">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-rosegold-dark">{s.value}</p>
                  <p className="text-[10px] tracking-[0.24em] uppercase text-charcoal-mute mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <Newsletter />

      {/* ============ CTA BANNER ============ */}
      <section className="relative bg-charcoal py-20 sm:py-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #b76e79 0, transparent 40%), radial-gradient(circle at 80% 70%, #d9be8c 0, transparent 40%)",
          }}
        />
        <Reveal className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-goldline mb-5">
            Festive Edit 2026
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory leading-tight mb-5">
            Your Eid &amp; Wedding Wardrobe Starts Here
          </h2>
          <p className="text-ivory/65 leading-relaxed mb-9 max-w-xl mx-auto">
            Limited festive pieces are cut once and never repeated. Reserve
            yours before the season sells out.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-rosegold text-ivory text-xs tracking-[0.25em] uppercase px-11 py-4 rounded-full hover:bg-rosegold-dark transition-all duration-300 shadow-[0_14px_40px_rgba(183,110,121,0.4)] hover:-translate-y-0.5"
          >
            Shop Festive <span>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
