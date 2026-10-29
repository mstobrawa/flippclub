import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade — FLIPPCLUB",
  description:
    "Klasyczne automaty arcade i kultowe gry w FLIPPCLUB w Siemianowicach Śląskich. Sprawdź dostępne maszyny i wybierz swoją grę.",
  alternates: {
    canonical: "/arcade",
  },
  openGraph: {
    title: "Arcade — FLIPPCLUB",
    description:
      "Klasyczne automaty arcade i kultowe gry w FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/arcade",
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
