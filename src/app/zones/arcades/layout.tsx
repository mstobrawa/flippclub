import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade — FLIPPCLUB",
  description:
    "Klasyczne automaty arcade i kultowe gry w FLIPPCLUB w Siemianowicach Śląskich. Sprawdź dostępne maszyny i wybierz swoją grę.",
  alternates: {
    canonical: "/zones/arcades",
  },
  openGraph: {
    title: "Arcade — FLIPPCLUB",
    description:
      "Klasyczne automaty arcade i kultowe gry w FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/zones/arcades",
    type: "website",
  },
};

export default function ArcadesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
