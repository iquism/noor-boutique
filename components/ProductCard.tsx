"use client";

import Image from "next/image";
import { formatPKR, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const badgeStyles: Record<string, string> = {
  New: "bg-charcoal text-ivory",
  Sale: "bg-rosegold text-ivory",
  Bestseller: "bg-goldline text-charcoal",
  Limited: "bg-blush text-rosegold-dark",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          className={i <= Math.round(rating) ? "fill-goldline" : "fill-linen"}
        >
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative bg-ivory rounded-2xl overflow-hidden border border-linen/70 shadow-[0_2px_18px_rgba(42,36,33,0.05)] hover:shadow-[0_18px_50px_rgba(183,110,121,0.18)] hover:-translate-y-1.5 transition-all duration-500">
      {/* image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        {product.badge && (
          <span
            className={`absolute top-3.5 left-3.5 text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow-sm ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
        {/* quick add slides up on hover */}
        <div className="absolute inset-x-3.5 bottom-3.5 translate-y-[130%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-charcoal/95 backdrop-blur text-ivory text-xs tracking-[0.22em] uppercase py-3.5 rounded-xl hover:bg-rosegold-dark transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* details */}
      <div className="p-5">
        <p className="text-[10px] tracking-[0.28em] uppercase text-rosegold mb-1.5">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-charcoal leading-snug mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <Stars rating={product.rating} />
          <span className="text-xs text-charcoal-mute">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <div className="flex items-baseline gap-2.5">
          <span className="text-[17px] font-semibold text-charcoal">
            {formatPKR(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-charcoal-mute line-through">
              {formatPKR(product.oldPrice)}
            </span>
          )}
        </div>
        {/* mobile: always-visible add button */}
        <button
          onClick={() => addItem(product)}
          className="sm:hidden mt-4 w-full border border-rosegold/40 text-rosegold-dark text-xs tracking-[0.22em] uppercase py-3 rounded-xl hover:bg-rosegold hover:text-ivory transition-colors"
        >
          Add to Bag
        </button>
      </div>
    </article>
  );
}
