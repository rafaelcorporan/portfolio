import { HeroSection } from "@/components/hero-section"
import { ValueSection } from "@/components/value-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import React from "react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white" style={{ position: 'relative' }}>
      <HeroSection />
      <ValueSection />
      <WorkExperienceSection />
    </main>
  )
}
