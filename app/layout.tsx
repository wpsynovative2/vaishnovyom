import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Brand guide: Baskervville Medium for headings, Montserrat for everything else.
const baskervville = localFont({
  src: "../public/Fonts/Baskervville-Medium.ttf",
  weight: "500",
  variable: "--font-baskervville",
  display: "swap",
});

const montserrat = localFont({
  src: [
    { path: "../public/Fonts/Montserrat-Regular.ttf", weight: "400" },
    { path: "../public/Fonts/Montserrat-Medium_0.ttf", weight: "500" },
    { path: "../public/Fonts/Montserrat-SemiBold.ttf", weight: "600" },
    { path: "../public/Fonts/Montserrat-Bold.ttf", weight: "700" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

// Avenir is the face used in the logo wordmark; Bebas Neue carries the big numerals.
const avenir = localFont({
  src: "../public/Fonts/Avenir Medium.ttf",
  weight: "500",
  variable: "--font-avenir",
  display: "swap",
});

const bebas = localFont({
  src: [
    { path: "../public/Fonts/Bebas-Regular.ttf", weight: "400" },
    { path: "../public/Fonts/BebasNeue Bold.otf", weight: "700" },
  ],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaishno Sky, Malad (E) | Codename Go Grand",
  description:
    "Vaishno Sky — sky-high residences in Malad (East), Mumbai. Codename Go Grand: grand homes, curated amenities and golden-hour views.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${baskervville.variable} ${montserrat.variable} ${avenir.variable} ${bebas.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
