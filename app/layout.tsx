import type { Metadata } from "next";
import { Lora, Gilda_Display } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const gildaDisplay = Gilda_Display({
  variable: "--font-gilda-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Smile Makeover Consultations | Dr. Alka Bulchandani",
  description:
    "Book your free smile makeover consultation with Dr. Alka Bulchandani and explore personalized cosmetic dentistry options to transform your smile.",
  keywords:
    "cosmetic dentistry, smile makeover, dental veneers, Invisalign, teeth whitening, free consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${gildaDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
