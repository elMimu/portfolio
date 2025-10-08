import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Google_Sans_Code,
  Yellowtail,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monoton.variable} ${geistMono.variable} ${googleSansCode.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 mx-auto max-w-5xl">{children}</main>
      </body>
    </html>
  );
}
