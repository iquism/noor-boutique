import type { Metadata } from "next";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the full Noor Boutique catalog — lawn suits, kurtis, abayas and formal wear with prices in PKR.",
};

export default function ShopPage() {
  return <ShopClient />;
}
