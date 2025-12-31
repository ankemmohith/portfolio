import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ParticleBackground } from "@/components/ui/particle-background"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mohith Sai Venkat Ankem - Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with MSCS from San José State University. 3+ years building scalable distributed systems, microservices architectures, and cloud-native applications.",
  keywords: [
    "software engineer",
    "full stack",
    "distributed systems",
    "microservices",
    "backend engineering",
    "cloud native",
    "java",
    "python",
    "typescript",
    "react",
    "spring boot",
    "aws",
    "kubernetes",
    "machine learning"
  ],
  authors: [{ name: "Mohith Sai Venkat Ankem" }],
  creator: "Mohith Sai Venkat Ankem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohith-ankem-portfolio.vercel.app",
    title: "Mohith Sai Venkat Ankem - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with MSCS from San José State University. 3+ years building scalable distributed systems, microservices architectures, and cloud-native applications.",
    siteName: "Mohith Sai Venkat Ankem's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohith Sai Venkat Ankem - Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with MSCS from San José State University. 3+ years building scalable distributed systems, microservices architectures, and cloud-native applications.",
    creator: "@MohithAnkem",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${firaCode.variable} font-mono bg-gray-900 text-gray-100 antialiased`}>
        <ParticleBackground />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
