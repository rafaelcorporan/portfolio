"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])

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

  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center relative">
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* Profile Image centered, large, circular, with white border, no extra background */}
        <img
          src="/profile.png"
          alt="Profile"
          className={`w-60 h-60 mx-auto mb-8 rounded-full object-cover transition-all duration-500 transform ${
            visibleElements[0] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        />

        <h1 className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 transform ${
          visibleElements[1] 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>I'm Rafael.</h1>

        <p className={`text-xl text-gray-300 mb-6 transition-all duration-500 transform ${
          visibleElements[2] 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>I build technical solutions for meaningful impact</p>

        <p className={`text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-500 transform ${
          visibleElements[3] 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          This portfolio showcases my technical expertise, methodologies, and outcomes in crafting exceptional
          infrastructure and AI solutions.
        </p>

        <div className={`transition-all duration-500 transform ${
          visibleElements[4] 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <Link href="/portfolio">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
              Show Portfolio
            </Button>
          </Link>
        </div>
      </div>

      <ChevronDown className="absolute bottom-8 w-6 h-6 text-gray-400 animate-bounce" />
    </section>
  )
}
