import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria — FLIPPCLUB",
  description:
    "Zobacz galerię FLIPPCLUB w Siemianowicach Śląskich — flippery, retro arcade, klubowe wnętrza i najważniejsze atrakcje.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galeria — FLIPPCLUB",
    description:
      "Zobacz zdjęcia FLIPPCLUB w Siemianowicach Śląskich — flippery, retro arcade i klubowe wnętrza.",
    url: "/galeria",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
