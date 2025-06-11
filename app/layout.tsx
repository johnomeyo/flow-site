import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  // 1. Basic Metadata: Essential for search engines and social sharing
  title: {
    default: "Flow | Connecting Startups with Investors for Success", // Default title for pages that don't specify their own
    template: "%s | Flow", // Template for pages that set a dynamic title (e.g., "About Us | Flow")
  },
  description: "Flow is the leading platform connecting visionary startups with strategic investors. We bridge the gap between groundbreaking ideas and the capital needed to transform them into successful ventures. Discover funding opportunities or invest in the next big innovation.",
  keywords: [
    "startup funding",
    "venture capital",
    "investors",
    "startups",
    "seed funding",
    "angel investors",
    "raise capital",
    "investment platform",
    "entrepreneurship",
    "tech startups",
    "fintech investment",
    "sustainability investment",
    "healthcare startups",
    "business funding",
    "africa startups", 
    "kenya startups",
    "nairobi venture capital",
    "flow app", 
    "flow ventures" ,
    "flow funds app",
    "flow funds",
    "flow funds kenya",
    "flow funds app kenya",
    "flow funds app nairobi",
    "flow funds app africa",
    "flow funds app investors",
    "flow funds app startups",
    "flow funds app funding",
    "flow funds app venture capital",
    "flow funds app entrepreneurship",
    "flow funds app business funding",
    "flow funds app tech startups",
    "flow funds app fintech investment",
    "flow funds app sustainability investment",
  ],
  authors: [{ name: "Flow Team", url: "https://www.flowfundsapp.co.ke" }],
  creator: "Flow Team", 
  publisher: "Flow Inc.", 

  // 2. Open Graph (OG) Metadata: For rich social media previews (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Flow | Connecting Startups with Investors for Success", // Specific title for OG, can be slightly different from default
    description: "Flow is the leading platform connecting visionary startups with strategic investors. We bridge the gap between groundbreaking ideas and the capital needed to transform them into successful ventures.", // Specific description for OG
    url: "https://www.flowfundsapp.co.ke", // Canonical URL of your site
    siteName: "Flow",
    images: [
      {
        url: "https://www.flowfundsapp.co.ke/logo.jpeg", // A high-quality image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Flow: Connecting Startups & Investors",
      },
      // You can add more images if you have variations, e.g., for different sections
      // {
      //   url: "https://www.flowfundsapp.co.ke/og-image-square.jpg",
      //   width: 400,
      //   height: 400,
      //   alt: "Flow Logo",
      // }
    ],
    locale: "en_US",
    type: "website", 
  },

  // 3. Twitter Card Metadata: For rich Twitter previews
  twitter: {
    card: "summary_large_image", // Or "summary" if no large image
    site: "@yourFlowTwitterHandle", // Your Twitter handle
    creator: "@yourFlowTwitterHandle", // Creator's Twitter handle
    title: "Flow | Connecting Startups with Investors for Success", // Title for Twitter
    description: "Flow is the leading platform connecting visionary startups with strategic investors. We bridge the gap between groundbreaking ideas and the capital needed to transform them into successful ventures.", // Description for Twitter
    images: ["https://www.flowfundsapp.co.ke/logo.jpeg"], // A high-quality image (at least 600x314px, 1200x675px recommended for large)
  },

  // 4. Viewport: Ensures proper responsiveness
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    // Add other properties if needed for specific mobile behaviors, e.g., userScalable: false
  },

  // 5. Robots: Instructs search engine crawlers (important!)
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
    nocache: true, // Don't cache this page (useful if content changes frequently)
    googleBot: { // Specific instructions for Google's bot
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1, // Allow full video preview
      "max-snippet": -1, // Allow full snippet
      "max-image-preview": "large", // Allow large image preview
    },
  },

  // 6. Favicons and Icons: Essential for browser tabs and mobile homescreens
  icons: {
    icon: "/favicon.ico", // Main favicon
    shortcut: "/favicon-16x16.png", // Smaller shortcut icon
    apple: "/apple-touch-icon.png", // Apple touch icon for iOS devices
    other: [
      {
        rel: "mask-icon", // For Safari pinned tabs
        url: "/safari-pinned-tab.svg",
        color: "#0674B4", // Your brand color
      },
    ],
  },

  // 7. Canonical URL: Prevents duplicate content issues
  alternates: {
    canonical: "https://www.flowfundsapp.co.ke", // The primary URL for this page
  },

  // 8. Theme Color: For browser UI (especially on mobile)
  // themeColor: "#0674B4", // Your brand's primary color

  // 9. Apple Web App Metadata (for iOS Add to Home Screen)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default", // or "black-translucent"
    title: "Flow", // Name displayed on homescreen
    // startUpImage: [], // Can specify images for different screen sizes
  },

  // 10. Verification (Optional, for search console ownership verification)
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-site-verification-code",
  //   yahoo: "your-yahoo-site-verification-code",
  //   other: {
  //     me: ["your-email@example.com", "your-other-verification-methods"],
  //   },
  // },

  // 11. Custom metadata (if you have specific needs for your app)
  // Some custom property for internal use or niche SEO factors
  // customProperty: 'value',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
