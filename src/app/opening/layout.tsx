import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godziny otwarcia — FLIPPCLUB",
  description:
    "Sprawdź godziny otwarcia FLIPPCLUB w Siemianowicach Śląskich. Piątek 16:00–21:00, sobota 12:00–21:00, niedziela 12:00–21:00.",
  alternates: {
    canonical: "/opening",
  },
  openGraph: {
    title: "Godziny otwarcia — FLIPPCLUB",
    description:
      "Sprawdź godziny otwarcia FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/opening",
    type: "website",
  },
};

export default function OpeningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
