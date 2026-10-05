"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function ShopClient() {
  const [category, setCategory] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"featured" | "low" | "high" | "rating">(
    "featured"
  );

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (query.trim() === "" ||
          `${p.name} ${p.description} ${p.fabric}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()))
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, query, sort]);

  return (
    <div className="bg-cream">
      {/* page hero */}
      <section className="bg-sand/60 border-b border-linen/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-rosegold mb-4">
            The Catalog
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal leading-tight mb-4">
            Shop Every Piece
          </h1>
          <p className="text-charcoal-soft max-w-xl mx-auto leading-relaxed">
            Twelve signature designs across lawn, kurtis, abayas and formals —
            each cut in limited batches.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* filters */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 mb-10">
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  category === c
                    ? "bg-charcoal text-ivory border-charcoal shadow-md"
                    : "bg-ivory text-charcoal-soft border-linen hover:border-rosegold hover:text-rosegold-dark"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pieces…"
                className="w-full bg-ivory border border-linen rounded-full pl-11 pr-5 py-2.5 text-sm text-charcoal placeholder:text-charcoal-mute focus:outline-none focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 transition"
              />
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-mute"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-ivory border border-linen rounded-full px-5 py-2.5 text-sm text-charcoal-soft focus:outline-none focus:border-rosegold cursor-pointer"
              aria-label="Sort products"
            >
              <option value="featured">Sort: Featured</option>
              <option value="rating">Top Rated</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* count */}
        <p className="text-xs tracking-[0.22em] uppercase text-charcoal-mute mb-7">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          {category !== "All" && ` in ${category}`}
        </p>

        {/* grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-7">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 7) * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-3xl text-charcoal mb-3">
              No pieces found
            </p>
            <p className="text-charcoal-soft text-sm mb-6">
              Try a different search or category.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="bg-charcoal text-ivory text-xs tracking-[0.22em] uppercase px-8 py-3.5 rounded-full hover:bg-rosegold-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
