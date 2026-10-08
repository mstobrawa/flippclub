import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik — FLIPPCLUB",
  description:
    "Sprawdź cennik FLIPPCLUB w Siemianowicach Śląskich. Godzina gry od 22 zł, pakiety 2 i 3 godzin oraz karnet na 3 wejścia.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Cennik — FLIPPCLUB",
    description:
      "Sprawdź ceny gry w FLIPPCLUB w Siemianowicach Śląskich — godziny, pakiety i karnet.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
