import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiLink Travel | Your Travel Buddies for life.",
  description:
    "A travel agency based in Indonesia that provides tourists local tours and helps locals visit other countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
