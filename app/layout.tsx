import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bubbleteamagics.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Bubble Tea Magic | Premium Bubble Tea in Euless, TX",
    template: "%s | Bubble Tea Magic",
  },
  description:
    "Freshly crafted bubble tea, fruit teas, Vietnamese iced coffee, bubble waffles, shaved ice, fresh juices, momo & ramen in Euless, TX. Daily Happy Hour 12-3pm. Order online or visit us — serving Euless, Bedford, Irving, Grapevine & Hurst.",
  keywords: [
    "bubble tea Euless",
    "boba tea Euless TX",
    "Vietnamese coffee Euless",
    "bubble waffles DFW",
    "fresh juice Euless",
    "shaved ice Euless",
    "Himalayan momo Euless",
    "bubble tea catering",
  ],
  openGraph: {
    title: "Bubble Tea Magic | Premium Bubble Tea in Euless, TX",
    description:
      "Freshly crafted bubble tea, fruit teas, Vietnamese iced coffee, bubble waffles, shaved ice, fresh juices, momo & ramen. Daily Happy Hour 12-3pm.",
    url: "https://bubbleteamagics.com",
    siteName: "Bubble Tea Magic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bubbleteamagics.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Bubble Tea Magic | Premium Bubble Tea in Euless, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubble Tea Magic | Premium Bubble Tea in Euless, TX",
    description:
      "Freshly crafted bubble tea, fruit teas, Vietnamese iced coffee, bubble waffles & more. Daily Happy Hour 12-3pm in Euless, TX.",
    images: ["https://www.bubbleteamagics.com/images/logo.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Bubble Tea Magic",
  image: "https://www.bubbleteamagics.com/images/logo.png",
  "@id": "https://bubbleteamagics.com",
  url: "https://bubbleteamagics.com",
  telephone: "+1-817-555-0123",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1201 N Main St #300",
    addressLocality: "Euless",
    addressRegion: "TX",
    postalCode: "76039",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.8371,
    longitude: -97.0819,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  servesCuisine: [
    "Bubble Tea",
    "Vietnamese Coffee",
    "Desserts",
    "Fresh Juice",
    "Himalayan Momo",
    "Ramen",
  ],
  areaServed: ["Euless", "Bedford", "Irving", "Grapevine", "Hurst", "DFW Airport"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
