import type React from "react";
import "./globals.css";
import type { Metadata } from "next";

// Import fonts from local /fonts directory
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

// Define Montserrat with Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Define Moderniz as local font (assuming font files are in /fonts directory)
const moderniz = localFont({
  src: [
    {
      path: "../public/fonts/Moderniz.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-moderniz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Backline Studios - Tu espacio de ensayo 24/7",
  description:
    "Estudio de ensayo musical profesional disponible 24/7 con el mejor equipamiento para músicos exigentes.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${moderniz.variable} ${montserrat.variable} font-moderniz`}
      >
        {children}
      </body>
    </html>
  );
}
