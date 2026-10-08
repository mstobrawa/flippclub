import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Killer Queen — FLIPPCLUB",
  description:
    "Zagraj w Killer Queen w FLIPPCLUB w Siemianowicach Śląskich. Drużynowa gra 5 vs 5, szybka rywalizacja i wyjątkowa arcade'owa atrakcja.",
  alternates: {
    canonical: "/killer-queen",
  },
  openGraph: {
    title: "Killer Queen — FLIPPCLUB",
    description:
      "Killer Queen 5 vs 5 w FLIPPCLUB w Siemianowicach Śląskich. Sprawdź atrakcję i zobacz galerię.",
    url: "/killer-queen",
    type: "website",
  },
};

export default function KillerQueenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
