import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rafael Corporan | Full-Stack IT & AI Solutions Portfolio",
  description:
    "Full-Stack Engineer specializing in Infrastructure Hardening to AI Integration. 12+ technical projects showcasing expertise from legacy IT to modern AI solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Unicorn background container */}
        <div data-us-project="zQ1A4lUhjBbGT4s7DQ6x" style={{ width: '1440px', height: '900px', position: 'fixed', zIndex: -1, top: 0, left: 0 }} />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
