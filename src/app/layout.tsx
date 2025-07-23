import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import GoogleAnalytics from "./google-analytics";
import { Countdown } from "./countdown";

export const metadata: Metadata = {
  title: "Je suis plate!",
  description: "On est plate ou on l'est pas.",
  openGraph: {
    title: "Je suis plate!",
    description: "On est plate ou on l'est pas.",
    images: [
      {
        url: "https://jesuisplate.com/imgs/the-photo.png",
      },
    ],
    url: "https://jesuisplate.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="flex flex-col">
        <Header />
        {children}
        <Countdown />
      </body>
    </html>
  );
}
