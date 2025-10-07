import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Petrozin - Tailor-Made Manpower Solutions | Industrial Workforce Experts",
    template: "%s | Petrozin"
  },
  description: "Petrozin provides trusted manpower supply, project support, and technical expertise for industries worldwide. Connect with highly skilled professionals and streamline project execution.",
  keywords: [
    "manpower supply",
    "industrial workforce",
    "project support",
    "technical expertise",
    "oil and gas",
    "construction",
    "manufacturing",
    "energy",
    "utilities",
    "workforce solutions"
  ],
  authors: [{ name: "Petrozin" }],
  creator: "Petrozin",
  publisher: "Petrozin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://petrozin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://petrozin.com",
    title: "Petrozin - Tailor-Made Manpower Solutions | Industrial Workforce Experts",
    description: "Petrozin provides trusted manpower supply, project support, and technical expertise for industries worldwide.",
    siteName: "Petrozin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Petrozin - Industrial Workforce Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petrozin - Tailor-Made Manpower Solutions",
    description: "Trusted manpower supply, project support, and technical expertise for industries worldwide.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
