import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { siteConfig } from "@/config/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flippclub.pl"),

  title: {
    default: "FLIPPCLUB — Flippery, Retro Arcade & Bar",
    template: "%s | FLIPPCLUB",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,
  authors: [{ name: "Michał Stobrawa" }],
  creator: "Mike Webworks",
  publisher: "FLIPPCLUB",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://flippclub.pl",
    siteName: "FLIPPCLUB",
    title: "FLIPPCLUB — Flippery, Retro Arcade & Bar",
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: "FLIPPCLUB — Flippery, Retro Arcade & Bar",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full">
      <body className="flex min-h-screen flex-col bg-background font-body text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
