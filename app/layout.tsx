import type { Metadata } from "next";
import { Anton, Roboto } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export const metadata: Metadata = {
  title: "Shiho Kazama Portfolio",
  description: "A Front-end developer based in Vancouver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
