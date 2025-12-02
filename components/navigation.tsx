"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false)
  const [isDiplomaDropdownOpen, setIsDiplomaDropdownOpen] = useState(false)
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false)
  const [isMobileDiplomaOpen, setIsMobileDiplomaOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const diplomaDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWorkDropdownOpen(false)
      }
      if (diplomaDropdownRef.current && !diplomaDropdownRef.current.contains(event.target as Node)) {
        setIsDiplomaDropdownOpen(false)
      }
    }

    if (isWorkDropdownOpen || isDiplomaDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isWorkDropdownOpen, isDiplomaDropdownOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const projects = [
    { name: "Enterprise Network Monitoring", subtitle: "Real-time VLAN health tracking", href: "https://network-dashboard.pages.dev/#/login" },
    { name: "Cloud Migration Portal", subtitle: "Automated cloud workflows", href: "https://f52b449c.cloud-migration.pages.dev/" },
    { name: "Secure IoT Platform", subtitle: "Zero-trust device authentication", href: "https://2cfce982.iotmanager.pages.dev/login/" },
    { name: "Predictive Maintenance", subtitle: "AI-driven predictive analytics", href: "https://predictive-maintenance.pages.dev/" },
    { name: "AI Customer Support", subtitle: "Intelligent chatbot with RAG", href: "https://aisupport.pages.dev/" },
    { name: "AI Threat Detection", subtitle: "PyTorch-based anomaly detection", href: "https://security-threat-detection.pages.dev/" },
    { name: "Data Graphs Converter", subtitle: "CSV to interactive visualizations", href: "https://data-graphs.pages.dev/" },
    { name: "Financial Analytics", subtitle: "Real-time crypto tracking", href: "https://financial-dash.pages.dev/" },
    { name: "URL Shortener - Yuupi", subtitle: "Custom link management", href: "https://url-shorter-3ct.pages.dev/login/" },
    { name: "Online Video Converter", subtitle: "Media processing tool", href: "https://video-converter-bg8.pages.dev/" },
    { name: "IoT Dashboard", subtitle: "Device management interface", href: "https://iot-dash.pages.dev/" },
    { name: "WePay Crypto Wallet", subtitle: "Multi-signature wallet", href: "https://wepay-crypto.pages.dev/" }
  ]

  const diplomaGroups = [
    { name: "AI", subtitle: "8 certificates", href: "/diploma?group=ai", count: 8 },
    { name: "Mix", subtitle: "6 certificates", href: "/diploma?group=mix", count: 6 },
    { name: "IT Trainings", subtitle: "11 certificates", href: "/diploma?group=it-trainings", count: 11 },
    { name: "Industrial Mechanic", subtitle: "5 certificates", href: "/diploma?group=industrial-mechanic", count: 5 }
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

            {/* Work Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsWorkDropdownOpen(true)}
            >
              <button
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
              >
                Work
                <ChevronDown className={`w-4 h-4 transition-transform ${isWorkDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isWorkDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-2xl z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <Link
                        key={index}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block hover:bg-gray-800/50 p-3 rounded transition-colors"
                        onClick={() => setIsWorkDropdownOpen(false)}
                      >
                        <h4 className="text-white text-xs font-medium group-hover:text-gray-200 transition-colors">
                          {project.name}
                        </h4>
                        <p className="text-gray-400 mt-1" style={{ fontSize: '0.625rem' }}>
                          {project.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
            if (isOpen) {
              setIsMobileWorkOpen(false)
            }
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

            {/* Work Dropdown for Mobile */}
            <div className="py-2">
              <button
                className="w-full text-left text-gray-300 hover:text-white transition-colors flex items-center justify-between"
                onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
              >
                Work
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileWorkOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileWorkOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {projects.map((project, index) => (
                    <Link
                      key={index}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-400 hover:text-white transition-colors py-2 text-sm"
                      onClick={() => {
                        setIsOpen(false)
                        setIsMobileWorkOpen(false)
                      }}
                    >
                      <div className="font-medium">{project.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{project.subtitle}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
