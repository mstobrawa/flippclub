import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas — FLIPPCLUB",
  description:
    "Poznaj FLIPPCLUB w Siemianowicach Śląskich — miejsce pełne flipperów, retro arcade, rywalizacji i dobrej zabawy.",
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    title: "O nas — FLIPPCLUB",
    description:
      "Poznaj FLIPPCLUB w Siemianowicach Śląskich — flippery, retro arcade, rywalizacja i dobra zabawa.",
    url: "/o-nas",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
