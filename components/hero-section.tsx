"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Spline from '@splinetool/react-spline'

export function HeroSection() {
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize all elements as invisible
    setVisibleElements(new Array(5).fill(false))

    // Animate elements appearing one by one
    const elementsCount = 5
    for (let i = 0; i < elementsCount; i++) {
      setTimeout(() => {
        setVisibleElements(prev => {
          const newVisible = [...prev]
          newVisible[i] = true
          return newVisible
        })
      }, i * 200) // 200ms delay between each element
    }
  }, [])

  useEffect(() => {
    // IntersectionObserver for scroll-based reveal (up and down)
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => {
              const newVisible = [...prev]
              for (let i = 0; i < 5; i++) newVisible[i] = true
              return newVisible
            })
          } else {
            setVisibleElements((prev) => {
              const newVisible = [...prev]
              for (let i = 0; i < 5; i++) newVisible[i] = false
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/ugG8WQCaWT1bYeCN/scene.splinecode" />
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 relative z-10 pointer-events-none">
        {/* Profile Image */}
        <div className="pointer-events-auto inline-block">
          <img
            src="/profile.png"
            alt="Profile"
            className={`w-44 h-44 mx-auto mb-8 rounded-full object-cover transition-all duration-500 transform ${visibleElements[0]
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
              }`}
          />
        </div>

        <h1 className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 transform ${visibleElements[1]
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
          }`}>I'm Rafael.</h1>

        <h2 className={`text-2xl md:text-3xl font-semibold text-gray-200 mb-6 transition-all duration-500 transform ${visibleElements[2]
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
          }`}>Full Stack Developer & AI Integration Specialist</h2>

        <p className={`text-lg text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-500 transform ${visibleElements[3]
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
          }`}>
          Building complete solutions: APIs, databases, cloud infrastructure, AI features, and intuitive frontends.
          Expert in modern frameworks and AI/automation (n8n). Bridging complex challenges and business outcomes.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500 transform pointer-events-auto ${visibleElements[4]
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
          }`}>
          <Link href="/skills">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
              Explore My Skills
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent px-8 py-3 rounded-full font-medium">
              Portfolio
            </Button>
          </Link>
        </div>
      </div>

      <ChevronDown className="absolute bottom-8 w-6 h-6 text-gray-400 animate-bounce z-10" />
    </section>
  )
}
