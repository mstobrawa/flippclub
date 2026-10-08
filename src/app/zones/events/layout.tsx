import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprezy — FLIPPCLUB",
  description:
    "Organizuj urodziny, integracje, wieczory kawalerskie i inne imprezy w prywatnym roomie FLIPPCLUB w Siemianowicach Śląskich.",
  alternates: {
    canonical: "/zones/events",
  },
  openGraph: {
    title: "Imprezy — FLIPPCLUB",
    description:
      "Prywatny room w FLIPPCLUB w Siemianowicach Śląskich — idealne miejsce na urodziny, integracje i wieczory ze znajomymi.",
    url: "/zones/events",
    type: "website",
  },
};

export default function EventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
