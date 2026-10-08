import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista maszyn — FLIPPCLUB",
  description:
    "Sprawdź pełną listę flipperów, automatów arcade i pozostałych atrakcji dostępnych w FLIPPCLUB w Siemianowicach Śląskich.",
  alternates: {
    canonical: "/machine-list",
  },
  openGraph: {
    title: "Lista maszyn — FLIPPCLUB",
    description:
      "Pełna lista flipperów, automatów arcade i pozostałych atrakcji w FLIPPCLUB w Siemianowicach Śląskich.",
    url: "/machine-list",
    type: "website",
  },
};

export default function MachineListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
