import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koparki RC — FLIPPCLUB",
  description:
    "Koparki RC, spychacze i ciężarówki w FLIPPCLUB w Siemianowicach Śląskich. Sprawdź strefę zdalnie sterowanych maszyn i zobacz galerię.",
  alternates: {
    canonical: "/excavators",
  },
  openGraph: {
    title: "Koparki RC — FLIPPCLUB",
    description:
      "Sprawdź strefę koparek RC, spychaczy i ciężarówek w FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/excavators",
    type: "website",
  },
};

export default function ExcavatorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
