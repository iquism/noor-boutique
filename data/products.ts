export type Category = "Lawn" | "Kurtis" | "Abayas" | "Formals";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "New" | "Sale" | "Bestseller" | "Limited";
  description: string;
  fabric: string;
}

export const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Lawn",
  "Kurtis",
  "Abayas",
  "Formals",
];

export const products: Product[] = [
  {
    id: "gulnaar-lawn",
    name: "Gulnaar Embroidered Lawn",
    category: "Lawn",
    price: 4850,
    rating: 4.9,
    reviews: 214,
    image: "/products/embroidered-lawn.webp",
    badge: "Bestseller",
    description:
      "Three-piece blush lawn suit with delicate floral thread embroidery on the neckline and hem, paired with a soft woven dupatta.",
    fabric: "Premium Swiss Lawn",
  },
  {
    id: "mint-kurti",
    name: "Pastel Mint Kurti",
    category: "Kurtis",
    price: 2950,
    rating: 4.7,
    reviews: 96,
    image: "/products/pastel-kurti.webp",
    badge: "New",
    description:
      "Breezy pastel mint kurti with white lace trim and side slits — an everyday essential with a polished finish.",
    fabric: "Soft Cambric Cotton",
  },
  {
    id: "noir-abaya",
    name: "Noir Gold-Trim Abaya",
    category: "Abayas",
    price: 7500,
    rating: 4.8,
    reviews: 143,
    image: "/products/black-abaya.webp",
    description:
      "Flowing black abaya in Korean georgette with hand-finished gold trim on the sleeves. Effortless, modest, unforgettable.",
    fabric: "Korean Georgette",
  },
  {
    id: "champagne-formal",
    name: "Champagne Sequin Formal",
    category: "Formals",
    price: 12900,
    rating: 5.0,
    reviews: 78,
    image: "/products/champagne-formal.webp",
    badge: "Limited",
    description:
      "Show-stopping champagne formal with all-over sequin work and a flared silhouette — made for wedding season.",
    fabric: "Net over Raw Silk",
  },
  {
    id: "chikankari-kurti",
    name: "White Chikankari Kurti",
    category: "Kurtis",
    price: 3400,
    rating: 4.6,
    reviews: 121,
    image: "/products/white-chikankari.webp",
    description:
      "Classic white kurti with fine hand shadow-work chikankari — timeless craft you can wear every day.",
    fabric: "Fine Lawn Cotton",
  },
  {
    id: "marigold-lawn",
    name: "Marigold Printed Lawn",
    category: "Lawn",
    price: 3950,
    oldPrice: 4950,
    rating: 4.7,
    reviews: 187,
    image: "/products/mustard-lawn.webp",
    badge: "Sale",
    description:
      "Sunshine-mustard three-piece with a vibrant floral print and a feather-light chiffon dupatta.",
    fabric: "90/70 Premium Lawn",
  },
  {
    id: "sage-abaya",
    name: "Sage Stone Abaya",
    category: "Abayas",
    price: 8200,
    rating: 4.9,
    reviews: 88,
    image: "/products/sage-abaya.webp",
    badge: "New",
    description:
      "Muted sage abaya with minimal stone embellishment on the cuffs — modern modesty in a serene tone.",
    fabric: "Saudi Nida Fabric",
  },
  {
    id: "rose-gown",
    name: "Rose Beadwork Gown",
    category: "Formals",
    price: 14500,
    rating: 4.8,
    reviews: 64,
    image: "/products/rose-formal.webp",
    description:
      "Rose-gold evening gown with a hand-beaded bodice and a dreamy flowing skirt. Pure red-carpet energy.",
    fabric: "Bridal Net & Satin",
  },
  {
    id: "gulnaar-deluxe",
    name: "Gulnaar Deluxe Edition",
    category: "Lawn",
    price: 5600,
    rating: 4.8,
    reviews: 132,
    image: "/products/embroidered-lawn.webp",
    description:
      "Our bestselling Gulnaar, elevated — denser embroidery, silk-finish buttons and a premium dyed dupatta.",
    fabric: "Swiss Lawn Deluxe",
  },
  {
    id: "ivory-kurti",
    name: "Ivory Lace Kurti",
    category: "Kurtis",
    price: 3150,
    rating: 4.5,
    reviews: 74,
    image: "/products/pastel-kurti.webp",
    description:
      "Soft ivory kurti with tonal lace panels — understated elegance for workdays and dinners alike.",
    fabric: "Cambric Cotton",
  },
  {
    id: "onyx-abaya",
    name: "Onyx Classic Abaya",
    category: "Abayas",
    price: 6900,
    oldPrice: 7900,
    rating: 4.7,
    reviews: 159,
    image: "/products/black-abaya.webp",
    badge: "Sale",
    description:
      "The everyday classic — jet-black abaya in breathable nida with clean tailored lines and deep pockets.",
    fabric: "Saudi Nida Fabric",
  },
  {
    id: "golden-formal",
    name: "Golden Hour Formal",
    category: "Formals",
    price: 11900,
    rating: 4.9,
    reviews: 91,
    image: "/products/champagne-formal.webp",
    description:
      "Warm champagne formal with scattered sequin spray and a regal train — made to catch the light.",
    fabric: "Net over Raw Silk",
  },
];

export const formatPKR = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;
