import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* brand */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-serif text-3xl text-ivory">Noor</span>
              <span className="text-[11px] tracking-[0.42em] uppercase text-rosegold-light">
                Boutique
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
              Elegant eastern and western wear, crafted in small batches with
              premium fabrics and timeless embroidery. Wear your elegance.
            </p>
          </div>

          {/* shop */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-goldline mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Lawn Collection", "/shop"],
                ["Kurtis", "/shop"],
                ["Abayas", "/shop"],
                ["Formal Wear", "/shop"],
                ["New Arrivals", "/shop"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-ivory/60 hover:text-rosegold-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-goldline mb-5">
              Boutique
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Our Story", "/about"],
                ["Contact Us", "/contact"],
                ["Size Guide", "/contact"],
                ["Shipping & Returns", "/contact"],
                ["Privacy Policy", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-ivory/60 hover:text-rosegold-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-goldline mb-5">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li>14-C, Main Boulevard, Gulberg III, Lahore</li>
              <li>Mon – Sat, 10am – 9pm</li>
              <li>
                <a
                  href="mailto:hello@noorboutique.pk"
                  className="hover:text-rosegold-light transition-colors"
                >
                  hello@noorboutique.pk
                </a>
              </li>
              <li>
                <a
                  href="tel:+924235781234"
                  className="hover:text-rosegold-light transition-colors"
                >
                  +92 42 3578 1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40 tracking-wide">
            © {new Date().getFullYear()} Noor Boutique. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40 tracking-[0.25em] uppercase">
            Wear Your Elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
