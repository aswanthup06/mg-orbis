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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mgorbis.com"),

  title: {
    default: "MG Orbis | Quality Beyond Borders",
    template: "%s | MG Orbis",
  },

  description:
    "Quality Beyond Borders. MG Orbis builds trusted global trade partnerships by sourcing quality products, ensuring seamless logistics, and delivering excellence from origin to destination.",

  applicationName: "MG Orbis",

  keywords: [
    "MG Orbis",
    "mgorbis",
    "MG Orbis export",
    "global trade",
    "export solutions",
    "Indian products",
    "global markets",
    "international trade",
    "product sourcing",
    "logistics",
  ],

  alternates: {
    canonical: "https://www.mgorbis.com/",
  },

  openGraph: {
    type: "website",
    url: "https://www.mgorbis.com/",
    siteName: "MG Orbis",
    title: "MG Orbis | Quality Beyond Borders",
    description:
      "Building trusted global trade partnerships by sourcing quality products, ensuring seamless logistics, and delivering excellence from origin to destination.",
    locale: "en_US",

    images: [
      {
        url: "/images/mgbanner.png",
        width: 1200,
        height: 630,
        alt: "MG Orbis — Quality Beyond Borders",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MG Orbis | Quality Beyond Borders",
    description:
      "Building trusted global trade partnerships by sourcing quality products, ensuring seamless logistics, and delivering excellence from origin to destination.",
    images: ["/images/mgbanner.png"],
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
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
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
