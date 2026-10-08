import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kup / Wymień — FLIPPCLUB",
  description:
    "Kup lub wymień flippery i automaty w FLIPPCLUB. Oferta jest obecnie w przygotowaniu.",
  alternates: {
    canonical: "/kup-wymien",
  },
  openGraph: {
    title: "Kup / Wymień — FLIPPCLUB",
    description:
      "Oferta kupna i wymiany flipperów oraz automatów w FLIPPCLUB jest obecnie w przygotowaniu.",
    url: "/kup-wymien",
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
