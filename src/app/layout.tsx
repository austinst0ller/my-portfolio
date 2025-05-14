import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Austin Stoller",
  description: "Austin Stoller — Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load FontAwesome early so icons are available immediately */}
        <Script
          src="https://kit.fontawesome.com/c8e4d183c2.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
