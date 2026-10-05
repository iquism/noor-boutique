"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

export interface CartLine {
  product: Product;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (p: Product) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("noor-cart");
      if (raw) {
        const parsed = JSON.parse(raw) as { id: string; qty: number }[];
        import("@/data/products").then(({ products }) => {
          const restored: CartLine[] = [];
          for (const { id, qty } of parsed) {
            const product = products.find((p) => p.id === id);
            if (product && qty > 0) restored.push({ product, qty });
          }
          setLines(restored);
        });
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "noor-cart",
        JSON.stringify(lines.map((l) => ({ id: l.product.id, qty: l.qty })))
      );
    } catch {
      /* ignore */
    }
  }, [lines]);

  const addItem = useCallback((p: Product) => {
    setLines((prev) => {
      const found = prev.find((l) => l.product.id === p.id);
      if (found)
        return prev.map((l) =>
          l.product.id === p.id ? { ...l, qty: l.qty + 1 } : l
        );
      return [...prev, { product: p, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, qty } : l))
    );
  }, []);

  const { count, subtotal } = useMemo(() => {
    return {
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.qty * l.product.price, 0),
    };
  }, [lines]);

  const value = useMemo(
    () => ({
      lines,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      setQty,
    }),
    [lines, count, subtotal, isOpen, addItem, removeItem, setQty]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
