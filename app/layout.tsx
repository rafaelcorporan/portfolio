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
        <Navigation />
        {children}
      </body>
    </html>
  )
}
