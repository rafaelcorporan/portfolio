"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDiplomaDropdownOpen, setIsDiplomaDropdownOpen] = useState(false)
  const [isMobileDiplomaOpen, setIsMobileDiplomaOpen] = useState(false)
  const diplomaDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (diplomaDropdownRef.current && !diplomaDropdownRef.current.contains(event.target as Node)) {
        setIsDiplomaDropdownOpen(false)
      }
    }

    if (isDiplomaDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDiplomaDropdownOpen])

  const diplomaGroups = [
    { name: "AI", subtitle: "8 certificates", href: "/diploma?group=ai", count: 8 },
    { name: "IT Trainings", subtitle: "11 certificates", href: "/diploma?group=it-trainings", count: 11 },
    { name: "Others", subtitle: "11 certificates", href: "/diploma?group=others", count: 11 }
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-semibold text-lg">

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home */}
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>

            {/* Resume */}
            <Link href="/resume" className="text-gray-300 hover:text-white transition-colors">
              Resume
            </Link>

            {/* Portfolio */}
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </Link>

            {/* Diploma Dropdown */}
            <div
              ref={diplomaDropdownRef}
              className="relative"
              onMouseEnter={() => setIsDiplomaDropdownOpen(true)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/diploma"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    setIsDiplomaDropdownOpen(false)
                    // Ensure navigation happens
                    e.stopPropagation()
                  }}
                >
                  Diploma
                </Link>
                <button
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsDiplomaDropdownOpen(!isDiplomaDropdownOpen)
                  }}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDiplomaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isDiplomaDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-2xl z-50">
                  <div className="grid grid-cols-2 gap-1.5">
                    {diplomaGroups.map((group, index) => (
                      <Link
                        key={index}
                        href={group.href}
                        className="group block hover:bg-gray-800/50 p-3 rounded transition-colors"
                        onClick={() => setIsDiplomaDropdownOpen(false)}
                      >
                        <h4 className="text-white text-xs font-medium group-hover:text-gray-200 transition-colors">
                          {group.name}
                        </h4>
                        <p className="text-gray-400 mt-1" style={{ fontSize: '0.625rem' }}>
                          {group.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => {
            setIsOpen(!isOpen)
          }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            {/* Home Link */}
            <Link
              href="/"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Resume Link */}
            <Link
              href="/resume"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>

            {/* Diploma Dropdown for Mobile */}
            <div className="py-2">
              <button
                className="w-full text-left text-gray-300 hover:text-white transition-colors flex items-center justify-between"
                onClick={() => setIsMobileDiplomaOpen(!isMobileDiplomaOpen)}
              >
                Diploma
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileDiplomaOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileDiplomaOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {diplomaGroups.map((group, index) => (
                    <Link
                      key={index}
                      href={group.href}
                      className="block text-gray-400 hover:text-white transition-colors py-2 text-sm"
                      onClick={() => {
                        setIsOpen(false)
                        setIsMobileDiplomaOpen(false)
                      }}
                    >
                      <div className="font-medium">{group.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{group.subtitle}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
