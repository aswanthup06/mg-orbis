import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Footer from "./components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import SmoothScroll from "./components/ui/SmoothScroll";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.mgorbis.com";
const ogImage = `${siteUrl}/images/mgbanner.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "MG Orbis | Apparel Export & T-Shirt Sourcing from India",
    template: "%s | MG Orbis",
  },

  description:
    "MG Orbis is an India-based apparel export and sourcing company specializing in premium cotton T-shirts, oversized fits, and private label/OEM manufacturing from Tiruppur — serving buyers across the UAE, Maldives, and GCC.",

  applicationName: "MG Orbis",

  keywords: [
    "MG Orbis",
    "mgorbis",
    "MG Orbis export",
    "apparel export India",
    "T-shirt manufacturer India",
    "cotton T-shirt supplier India",
    "oversized T-shirt manufacturer",
    "private label T-shirt supplier",
    "OEM T-shirt manufacturer India",
    "ODM apparel sourcing India",
    "Tiruppur T-shirt exporter",
    "Tiruppur garment manufacturer",
    "bulk T-shirt supplier",
    "custom T-shirt manufacturer India",
    "240 GSM T-shirt supplier",
    "French Terry T-shirt manufacturer",
    "knitwear exporter India",
    "blank T-shirt supplier India",
    "DTF printing T-shirt supplier",
    "apparel sourcing company India",
    "garment export company India",
    "T-shirt supplier UAE",
    "T-shirt supplier Dubai",
    "apparel sourcing Maldives",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MG Orbis",
    title: "MG Orbis | Apparel Export & T-Shirt Sourcing from India",
    description:
      "MG Orbis is an India-based apparel export and sourcing company specializing in premium cotton T-shirts, oversized fits, and private label/OEM manufacturing from Tiruppur — serving buyers across the UAE, Maldives, and GCC.",
    locale: "en_US",

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "MG Orbis — Apparel Export & T-Shirt Sourcing from India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MG Orbis | Apparel Export & T-Shirt Sourcing from India",
    description:
      "MG Orbis is an India-based apparel export and sourcing company specializing in premium cotton T-shirts, oversized fits, and private label/OEM manufacturing from Tiruppur — serving buyers across the UAE, Maldives, and GCC.",
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className={manrope.className}>
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />

        {children}

        <Footer />
      </body>
    </html>
  );
}