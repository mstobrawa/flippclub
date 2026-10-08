import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dostępność — FLIPPCLUB",
  description:
    "Informacje o dostępności FLIPPCLUB w Siemianowicach Śląskich. Sprawdź dostępność parteru, toalety i informacje dla osób z ograniczoną mobilnością.",
  alternates: {
    canonical: "/dostepnosc",
  },
  openGraph: {
    title: "Dostępność — FLIPPCLUB",
    description:
      "Sprawdź informacje o dostępności FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/dostepnosc",
    type: "website",
  },
};

export default function AccessibilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
