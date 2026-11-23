import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | React Native Developer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Deepak Malakar",
    "React Native Developer",
    "Frontend Developer",
    "TypeScript",
    "React.js",
    "Vue.js",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  openGraph: {
    title: `${profile.name} | React Native Developer`,
    description: profile.summary,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | React Native Developer`,
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#07050f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Background />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
