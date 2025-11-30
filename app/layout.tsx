import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://goalcraft.in'), // Replace with actual domain
  title: {
    default: "GoalCraft – Boost Your Restaurant on Swiggy & Zomato",
    template: "%s | GoalCraft"
  },
  description: "GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies, boosting brand visibility and sales.",
  keywords: ["Restaurant Consulting", "Swiggy Growth", "Zomato Growth", "Menu Engineering", "Food Photography", "Restaurant Marketing", "GoalCraft"],
  authors: [{ name: "GoalCraft" }],
  creator: "GoalCraft",
  publisher: "GoalCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "GoalCraft – Boost Your Restaurant on Swiggy & Zomato",
    description: "GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies.",
    url: 'https://goalcraft.in',
    siteName: 'GoalCraft',
    images: [
      {
        url: '/logo.png', // Should ideally be a larger OG image
        width: 800,
        height: 600,
        alt: 'GoalCraft Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GoalCraft – Boost Your Restaurant on Swiggy & Zomato",
    description: "GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies.",
    images: ['/logo.png'], // Should ideally be a larger OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
