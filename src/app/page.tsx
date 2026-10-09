import type { Metadata } from "next";
import { FeaturedSlider } from "@/components/sections/FeaturedSlider";
import { FacebookFeed } from "@/components/sections/FacebookFeed";

export const metadata: Metadata = {
  title: "FLIPPCLUB — Flippery, Retro Arcade & Bar",
  description:
    "FLIPPCLUB w Siemianowicach Śląskich — flippery, retro arcade, gry, bar i wydarzenia. Odkryj nasze maszyny i sprawdź, co dzieje się w klubie.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FLIPPCLUB — Flippery, Retro Arcade & Bar",
    description:
      "FLIPPCLUB w Siemianowicach Śląskich — flippery, retro arcade, gry, bar i wydarzenia.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/og/flippclub-og.webp",
        width: 1200,
        height: 630,
        alt: "FLIPPCLUB — Flippery, Arcade, Koparki RC i Killer Queen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/flippclub-og.webp"],
  },
};

export default function Home() {
  return (
    <main className="bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]">
      <FeaturedSlider />
      <FacebookFeed />
    </main>
  );
}
