import type { Metadata } from "next";
import { Nunito_Sans, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteUrl } from "@/content/site";
import { seo } from "@/content/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Rajdhani: títulos condensados en mayúsculas, como en la referencia del cliente.
const display = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo["/"].title,
  description: seo["/"].description,
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="overflow-x-hidden font-sans text-slate-600 antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
