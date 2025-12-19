import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ulrico Umberto Zampa",
  description: "Full-time reckless opportunist",
  openGraph: {
    title: "Ulrico Umberto Zampa",
    description: "Full-time reckless opportunist",
    images: ["/klogo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulrico Umberto Zampa",
    description: "Full-time reckless opportunist",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
