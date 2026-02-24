import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aarongeorge.dev'),
  title: {
    default: "Aaron George — AI & Computer Science Portfolio",
    template: "%s | Aaron George",
  },
  description:
    "Computer Science undergraduate specializing in AI, with hands-on experience in machine learning, computer vision, and full-stack development.",
  keywords: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Python", "React", "FastAPI", "Deep Learning", "CNN", "Cyber Security"],
  authors: [{ name: "Aaron George", url: "https://github.com/aaxonxn" }],
  creator: "Aaron George",
  publisher: "Aaron George",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Aaron George — AI & Computer Science Portfolio",
    description: "Computer Science undergraduate specializing in AI, with hands-on experience in machine learning, computer vision, and full-stack development.",
    siteName: "Aaron George",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aaron George — AI & Computer Science Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron George — AI & Computer Science Portfolio",
    description: "Computer Science undergraduate specializing in AI, with hands-on experience in machine learning, computer vision, and full-stack development.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
