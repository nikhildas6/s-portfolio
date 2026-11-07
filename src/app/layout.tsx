import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sneha-portfolio.vercel.app"),
  title: "Sneha S | Digital Marketing Executive | Portfolio",
  description:
    "Personal portfolio of Sneha S — Digital Marketing Executive passionate about performance marketing, SEO, creative storytelling, and data-driven growth.",
  keywords: [
    "Sneha S",
    "Digital Marketing Executive",
    "Performance Marketing",
    "SEO Specialist",
    "Kerala Digital Marketer",
    "Meta Ads",
    "Google Ads",
  ],
  authors: [{ name: "Sneha S" }],
  openGraph: {
    title: "Sneha S | Digital Marketing Executive",
    description: "Turning Creative Ideas Into Digital Growth",
    url: "https://sneha-portfolio.vercel.app",
    siteName: "Sneha S Portfolio",
    images: [
      {
        url: "/images/character-hero.jpg",
        width: 1024,
        height: 1024,
        alt: "Sneha S - Pastel Blue Animated Portfolio",
      },
    ],
    locale: "en_US",
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
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#EAF6FF] text-[#243B53] antialiased selection:bg-[#A8D8F0] selection:text-[#243B53] min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
