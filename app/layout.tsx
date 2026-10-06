import type { Metadata } from "next";
import { Red_Hat_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Red_Hat_Display({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Western Lights | Christmas Light Installation & Outdoor Lighting",
  description:
    "Professional Christmas and holiday light installation, landscape lighting, LED and event lighting by Matt and Stefan. Rated 5.0 on Google. Call (905) 288-7440 to book your install.",
  openGraph: {
    title: "Western Lights | Christmas Light Installation & Outdoor Lighting",
    description:
      "Holiday light installs, landscape and LED lighting. Rated 5.0 on Google. Call (905) 288-7440.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
