import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wypożyczalnia — FLIPPCLUB",
  description:
    "Wypożyczalnia flipperów i automatów FLIPPCLUB. Oferta jest obecnie w przygotowaniu.",
  alternates: {
    canonical: "/wypozyczalnia",
  },
  openGraph: {
    title: "Wypożyczalnia — FLIPPCLUB",
    description:
      "Oferta wypożyczalni flipperów i automatów FLIPPCLUB jest obecnie w przygotowaniu.",
    url: "/wypozyczalnia",
    type: "website",
  },
};

export default function RentalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
