import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dentistry at Suburban Square - Modern Dental Care in Philadelphia",
  description: "Experience exceptional dental care at Dentistry at Suburban Square. Modern technology, compassionate care, and a comfortable environment for all your dental needs.",
  keywords: "dentist, dental care, Philadelphia, Suburban Square, cosmetic dentistry, preventive care, emergency dental",
  authors: [{ name: "Dentistry at Suburban Square" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
