import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności i cookies — FLIPPCLUB",
  description:
    "Polityka prywatności i cookies FLIPPCLUB. Informacje o przetwarzaniu danych, plikach cookies, usługach zewnętrznych i prawach użytkowników.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
  openGraph: {
    title: "Polityka prywatności i cookies — FLIPPCLUB",
    description:
      "Informacje o prywatności, cookies i przetwarzaniu danych na stronie FLIPPCLUB.",
    url: "/polityka-prywatnosci",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
