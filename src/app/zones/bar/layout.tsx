import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bar — FLIPPCLUB",
  description:
    "Bar w FLIPPCLUB w Siemianowicach Śląskich — retro przekąski, napoje, oranżada i chwila odpoczynku między kolejnymi rundami.",
  alternates: {
    canonical: "/zones/bar",
  },
  openGraph: {
    title: "Bar — FLIPPCLUB",
    description:
      "Bar w FLIPPCLUB w Siemianowicach Śląskich — retro przekąski, napoje i chwila odpoczynku między grami.",
    url: "/zones/bar",
    type: "website",
  },
};

export default function BarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
