import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MG Orbis",
  description:
    "Quality Beyond Borders. MG Orbis is dedicated to building trusted global trade partnerships by sourcing quality products, ensuring seamless logistics, and delivering excellence from origin to destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className={manrope.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}