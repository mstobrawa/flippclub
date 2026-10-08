import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — FLIPPCLUB",
  description:
    "Najczęściej zadawane pytania dotyczące FLIPPCLUB w Siemianowicach Śląskich — rezerwacje, ceny, dzieci, imprezy, wypożyczalnia, bar i lokalizacja.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ — FLIPPCLUB",
    description:
      "Najczęściej zadawane pytania dotyczące wizyty w FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/faq",
    type: "website",
  },
};

export default function FaqLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
