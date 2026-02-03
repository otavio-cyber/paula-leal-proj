import React from "react"
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dra. Paula Leal | Endocrinologista",
  description:
    "Cuidado especializado em endocrinologia. Focado na sua saúde, qualidade de vida e longevidade.",
  keywords: [
    "endocrinologista",
    "endocrinologia",
    "saúde",
    "longevidade",
    "hormônios",
    "metabolismo",
  ],
  authors: [{ name: "Dra. Paula Leal" }],
  openGraph: {
    title: "Dra. Paula Leal | Endocrinologista",
    description:
      "Cuidado especializado em endocrinologia. Focado na sua saúde, qualidade de vida e longevidade.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#402617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
