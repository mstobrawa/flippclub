import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flipper do Pubu — FLIPPCLUB",
  description:
    "Wypożycz flipper do Twojego pubu w FLIPPCLUB. Oferta jest obecnie w przygotowaniu.",
  alternates: {
    canonical: "/flipper-do-pubu",
  },
  openGraph: {
    title: "Flipper do Pubu — FLIPPCLUB",
    description:
      "Wypożycz flipper do Twojego pubu w FLIPPCLUB jest obecnie w przygotowaniu.",
    url: "/flipper-do-pubu",
    type: "website",
  },
};

export default function BuyExchangeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
