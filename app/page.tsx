import { HeroSection } from "@/components/hero-section"
import { ValueSection } from "@/components/value-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import React from "react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white" style={{ position: 'relative' }}>
      {/* Unicorn background for home page only */}
      <div data-us-project="zQ1A4lUhjBbGT4s7DQ6x" style={{ width: '1440px', height: '900px', position: 'fixed', zIndex: -1, top: 0, left: 0 }}></div>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.28/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`
        }}
      />
      <HeroSection />
      <ValueSection />
      <WorkExperienceSection />
    </main>
  )
}
