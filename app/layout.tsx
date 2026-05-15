import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://klini.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Klini — Asistente de WhatsApp para clínicas médicas",
  description:
    "Atendé las consultas repetidas de tus pacientes 24/7. Derivá a tu equipo cuando hace falta. Pensado para clínicas medianas y grandes en LATAM.",
  openGraph: {
    title: "Klini — Asistente de WhatsApp para clínicas médicas",
    description:
      "Atendé las consultas repetidas de tus pacientes 24/7. Pensado para clínicas medianas y grandes en LATAM.",
    url: SITE_URL,
    siteName: "Klini",
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
