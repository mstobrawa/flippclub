import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flippery — FLIPPCLUB",
  description:
    "Flippery w FLIPPCLUB w Siemianowicach Śląskich — klasyczne i nowoczesne maszyny, szybka akcja, refleks i rywalizacja.",
  alternates: {
    canonical: "/zones/flippers",
  },
  openGraph: {
    title: "Flippery — FLIPPCLUB",
    description:
      "Zagraj na flipperach w FLIPPCLUB w Siemianowicach Śląskich. Klasyczne maszyny, nowoczesne tytuły i rywalizacja o high score.",
    url: "/zones/flippers",
    type: "website",
  },
};

export default function FlippersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
