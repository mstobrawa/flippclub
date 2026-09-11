import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { siteConfig } from "@/config/theme";
import "./globals.css";

// Fonts are self-hosted via @fontsource (imported in globals.css) rather
// than next/font/google, so the build never depends on reaching Google
// Fonts over the network. The --font-display / --font-body / --font-mono
// CSS variables are declared in globals.css — swap the @fontsource import
// there to change typefaces later.

export const metadata: Metadata = {
  title: `${siteConfig.name} — Flippery, Retro Arcade & Bar`,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-screen flex-col bg-background font-body text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
