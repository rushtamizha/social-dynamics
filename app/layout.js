import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://socialdynamics.cloud'),
  title: {
    default: "Social Dynamics | ROI-Driven Digital Marketing & Growth Agency",
    template: "%s | Social Dynamics"
  },
  description: "Social Dynamics is a premier digital marketing agency specializing in AI-powered lead generation, Meta Ads optimization, and high-conversion SEO for US businesses.",
  keywords: [
    "Digital Marketing Agency US", 
    "AI Lead Generation Services", 
    "High ROI Meta Ads", 
    "Google Business Profile Optimization", 
    "Conversion Rate Optimization (CRO)", 
    "B2B Growth Marketing"
  ],
  authors: [{ name: "Social Dynamics Marketing Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socialdynamics.cloud",
    title: "Scale Your Revenue with Social Dynamics | Digital Marketing Experts",
    description: "We turn clicks into customers using advanced AI automation and data-backed marketing strategies.",
    siteName: "Social Dynamics",
    images: [
      {
        url: "/og-marketing.jpg", 
        width: 1200,
        height: 630,
        alt: "Social Dynamics Digital Marketing Growth Funnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Dynamics | US Digital Marketing & Growth",
    description: "Data-driven lead generation and SEO to scale your business legacy.",
    images: ["/og-marketing.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white selection:bg-slate-900 selection:text-white">
        <Navbar />
        {/* Added a main wrapper for better layout control */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
