import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/data";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#101211",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brasporto.com.pt"),
  title: {
    default: "BRASPORTO — Reparos e Remodelações no Porto",
    template: "%s | BRASPORTO",
  },
  description:
    "Estúdio de remodelações, carpintaria, telhados, canalização e pintura de excelência no Porto. Rigor técnico e acabamentos nobres chave-na-mão.",
  keywords: [
    "remodelações porto",
    "reparos porto",
    "obras porto",
    "canalização picheleiro porto",
    "pintura interiores porto",
    "remodelação de cozinhas porto",
    "reparação telhados porto",
    "carpintaria porto",
    "eletricidade porto",
  ],
  authors: [{ name: "BRASPORTO — Reparos e Remodelações" }],
  creator: "BRASPORTO",
  publisher: "BRASPORTO",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://brasporto.com.pt",
  },
  openGraph: {
    title: "BRASPORTO — Reparos e Remodelações no Porto",
    description:
      "Transformamos espaços. Construímos confiança. Soluções completas de remodelação com atenção a cada detalhe no Porto.",
    url: "https://brasporto.com.pt",
    siteName: "BRASPORTO",
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: "https://brasporto.com.pt",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Porto",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.toString(),
      reviewCount: BUSINESS_INFO.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "€€",
  };

  return (
    <html lang="pt-PT" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas-bg text-text-primary antialiased selection:bg-brand-gold/30">
        {/* WCAG 2.2 Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-[#101211] focus:rounded-md focus:font-bold focus:shadow-2xl focus:outline-none"
        >
          Saltar para o conteúdo principal
        </a>

        <ScrollProgress />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
