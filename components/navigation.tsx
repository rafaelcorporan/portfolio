"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const projects = [
    { name: "Enterprise Network Monitoring", subtitle: "Real-time VLAN health tracking", href: "#" },
    { name: "Cloud Migration Portal", subtitle: "Automated cloud workflows", href: "#" },
    { name: "Secure IoT Platform", subtitle: "Zero-trust device authentication", href: "#" },
    { name: "Predictive Maintenance", subtitle: "AI-driven predictive analytics", href: "#" },
    { name: "AI Customer Support", subtitle: "Intelligent chatbot with RAG", href: "#" },
    { name: "AI Threat Detection", subtitle: "PyTorch-based anomaly detection", href: "#" },
    { name: "Multi-Factor Authentication", subtitle: "Enhanced security system", href: "#" },
    { name: "Financial Analytics", subtitle: "Real-time crypto tracking", href: "#" },
    { name: "URL Shortener - Yuupi", subtitle: "Custom link management", href: "#" },
    { name: "Online Video Converter", subtitle: "Media processing tool", href: "#" },
    { name: "IoT Dashboard", subtitle: "Device management interface", href: "#" },
    { name: "WePay Crypto Wallet", subtitle: "Multi-signature wallet", href: "#" }
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
              className="relative"
              onMouseEnter={() => setIsWorkDropdownOpen(true)}
              onMouseLeave={() => setIsWorkDropdownOpen(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Work
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isWorkDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <Link 
                        key={index}
                        href={project.href}
                        className="group block hover:bg-gray-800/50 p-3 rounded transition-colors"
                      >
                        <h4 className="text-white text-xs font-medium group-hover:text-gray-200 transition-colors">
                          {project.name}
                        </h4>
                        <p className="text-gray-400 mt-1" style={{fontSize: '0.625rem'}}>
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
            
            {/* Contact */}
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
