import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — FLIPPCLUB",
  description:
    "Skontaktuj się z FLIPPCLUB w Siemianowicach Śląskich. Sprawdź adres, telefon, e-mail i lokalizację klubu.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontakt — FLIPPCLUB",
    description:
      "Skontaktuj się z FLIPPCLUB w Siemianowicach Śląskich. Sprawdź adres, telefon, e-mail i lokalizację klubu.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
