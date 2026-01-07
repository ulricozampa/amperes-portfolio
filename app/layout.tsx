import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://amperes.work'),
  title: "Ulrico Umberto Zampa",
  description: "--",
  openGraph: {
    title: "Ulrico Umberto Zampa",
    description: "--",
    images: ["/klogo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulrico Umberto Zampa",
    description: "--",
    images: ["/klogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
