"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* announcement bar */}
      <div className="bg-charcoal text-ivory/90 text-[11px] sm:text-xs tracking-[0.22em] uppercase text-center py-2.5 px-4">
        Complimentary nationwide delivery on orders over PKR 5,000
      </div>

      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-[0_8px_30px_rgba(42,36,33,0.08)] border-linen"
            : "bg-ivory/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
          {/* logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl sm:text-3xl text-charcoal tracking-wide">
              Noor
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.42em] uppercase text-rosegold">
              Boutique
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative text-[13px] tracking-[0.18em] uppercase transition-colors ${
                  pathname === n.href
                    ? "text-rosegold-dark"
                    : "text-charcoal-soft hover:text-rosegold-dark"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-rosegold transition-all duration-300 ${
                    pathname === n.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* cart */}
            <button
              onClick={openCart}
              aria-label="Open shopping bag"
              className="relative p-2 rounded-full hover:bg-blush/60 transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="text-charcoal"
              >
                <path d="M6 8h15l-1.5 9h-12z" strokeLinejoin="round" />
                <path
                  d="M9 8V6a3 3 0 0 1 6 0v2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-rosegold text-ivory text-[11px] font-semibold flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* mobile menu button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full hover:bg-blush/60 transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="text-charcoal"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-ivory border-linen ${
            menuOpen ? "max-h-64 border-t" : "max-h-0"
          }`}
        >
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-sm tracking-[0.18em] uppercase border-b border-linen/60 last:border-0 ${
                  pathname === n.href
                    ? "text-rosegold-dark"
                    : "text-charcoal-soft"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
