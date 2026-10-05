"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 5000;

export default function CartDrawer() {
  const { lines, subtotal, isOpen, closeCart, setQty, removeItem } = useCart();
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  const progress = Math.min(1, subtotal / FREE_SHIPPING_THRESHOLD);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-charcoal/50 backdrop-blur-[2px] transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <h2 className="font-serif text-2xl text-charcoal">
            Shopping Bag{" "}
            <span className="text-sm font-sans text-charcoal-mute">
              ({lines.reduce((s, l) => s + l.qty, 0)})
            </span>
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="p-2 rounded-full hover:bg-blush/70 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-charcoal">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* free shipping meter */}
        <div className="px-6 py-4 bg-cream border-b border-linen">
          <p className="text-xs text-charcoal-soft mb-2 tracking-wide">
            {subtotal >= FREE_SHIPPING_THRESHOLD ? (
              <span className="text-rosegold-dark font-semibold">
                You have unlocked complimentary delivery
              </span>
            ) : (
              <>
                Add{" "}
                <span className="font-semibold text-charcoal">
                  {formatPKR(FREE_SHIPPING_THRESHOLD - subtotal)}
                </span>{" "}
                more for complimentary delivery
              </>
            )}
          </p>
          <div className="h-1.5 rounded-full bg-linen overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rosegold-light to-rosegold-dark transition-all duration-700"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* lines */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
              <div className="w-16 h-16 rounded-full bg-blush/70 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rosegold-dark">
                  <path d="M6 8h15l-1.5 9h-12z" strokeLinejoin="round" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-serif text-xl text-charcoal">Your bag is empty</p>
              <p className="text-sm text-charcoal-mute max-w-[240px]">
                Discover pieces crafted to make every day feel elegant.
              </p>
              <button
                onClick={closeCart}
                className="mt-2 bg-charcoal text-ivory text-xs tracking-[0.22em] uppercase px-8 py-3.5 rounded-full hover:bg-rosegold-dark transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            lines.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-4">
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-sand shrink-0">
                  <Image src={product.image} alt={product.name} fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-serif text-[15px] text-charcoal leading-tight">{product.name}</p>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-mute mt-1">{product.category}</p>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="text-charcoal-mute hover:text-rosegold-dark transition-colors p-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-linen rounded-full">
                      <button onClick={() => setQty(product.id, qty - 1)} className="w-8 h-8 flex items-center justify-center text-charcoal-soft hover:text-rosegold-dark" aria-label="Decrease quantity">−</button>
                      <span className="w-7 text-center text-sm font-medium">{qty}</span>
                      <button onClick={() => setQty(product.id, qty + 1)} className="w-8 h-8 flex items-center justify-center text-charcoal-soft hover:text-rosegold-dark" aria-label="Increase quantity">+</button>
                    </div>
                    <p className="text-sm font-semibold text-charcoal">{formatPKR(product.price * qty)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        {lines.length > 0 && (
          <div className="border-t border-linen px-6 py-5 bg-cream/60">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-charcoal-soft">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPKR(subtotal)}</span>
            </div>
            <p className="text-xs text-charcoal-mute mb-4">Delivery calculated at checkout.</p>
            <button
              onClick={() => setNotice(true)}
              className="w-full bg-rosegold text-ivory text-xs tracking-[0.25em] uppercase py-4 rounded-full hover:bg-rosegold-dark transition-colors shadow-[0_10px_30px_rgba(183,110,121,0.35)]"
            >
              Proceed to Checkout
            </button>
            {notice && (
              <p className="mt-3 text-center text-xs text-rosegold-dark bg-blush/60 rounded-xl px-4 py-3">
                This is a design demo — checkout is not connected yet. Thank you for visiting Noor Boutique.
              </p>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
