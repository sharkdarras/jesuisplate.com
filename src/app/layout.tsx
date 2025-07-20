import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Je suis plate!",
  description: "On est plate ou on l'est pas.",
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
