"use client"

import { useState, useEffect } from "react"

export function WorkExperienceSection() {
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])

  useEffect(() => {
    // Initialize all elements as invisible
    setVisibleElements(new Array(14).fill(false)) // 1 heading + 6 exp cards + 1 heading + 6 industry cards
    
    // Animate elements appearing one by one
    const elementsCount = 14
    for (let i = 0; i < elementsCount; i++) {
      setTimeout(() => {
        setVisibleElements(prev => {
          const newVisible = [...prev]
          newVisible[i] = true
          return newVisible
        })
      }, i * 150) // 150ms delay between each element
    }
  }, [])
  const experiences = [
    {
      company: "CloudTech Solutions",
      role: "Senior Infrastructure Engineer",
      description: "Cloud migration and DevOps automation",
    },
    {
      company: "AI Innovations",
      role: "ML Infrastructure Lead",
      description: "AI model deployment and scaling",
    },
    {
      company: "SecureNet",
      role: "Network Security Architect",
      description: "Enterprise security and monitoring",
    },
    {
      company: "DataFlow",
      role: "Senior DevOps Engineer",
      description: "CI/CD pipeline optimization",
    },
    {
      company: "TechCorp",
      role: "Infrastructure Specialist",
      description: "Server management and automation",
    },
    {
      company: "InnovateLab",
      role: "Technical Lead",
      description: "Team leadership and architecture",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`mb-16 transition-all duration-500 transform ${
          visibleElements[0] 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            I've worked as a <span className="text-white">senior technical engineer</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-400">
            and in <span className="text-white">technical leadership</span> roles for:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className={`text-white transition-all duration-500 transform ${
              visibleElements[index + 1] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}>
              <h4 className="text-xl font-bold mb-2">{exp.company}</h4>
              <p className="text-gray-300 mb-1">{exp.role}</p>
              <p className="text-gray-400 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className={`text-3xl font-bold text-black mb-8 transition-all duration-500 transform ${
            visibleElements[7] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            I've been in various <span className="text-black">industries and domains</span> working with technology:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-gray-200 p-6 rounded-lg transition-all duration-700 transform ${
              visibleElements[8] 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-gray-800">
                <strong>Cloud Infrastructure</strong>, migration, scaling and optimization services in enterprise
                environments.
              </p>
            </div>

            <div className={`bg-gray-200 p-6 rounded-lg transition-all duration-700 transform ${
              visibleElements[9] 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-gray-800">
                <strong>AI/ML solutions</strong> for predictive analytics and intelligent automation systems.
              </p>
            </div>

            <div className={`bg-gray-200 p-6 rounded-lg transition-all duration-700 transform ${
              visibleElements[10] 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-gray-800">
                <strong>Network security</strong> and monitoring infrastructure for enterprise applications.
              </p>
            </div>

            <div className={`bg-gray-200 p-6 rounded-lg transition-all duration-700 transform ${
              visibleElements[11] 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-gray-800">
                <strong>DevOps automation</strong>, CI/CD pipelines and infrastructure as code implementations.
              </p>
            </div>

            <div className={`bg-gray-200 p-6 rounded-lg transition-all duration-700 transform ${
              visibleElements[12] 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-gray-800">
                <strong>IoT platforms</strong> via device management, data processing and real-time analytics.
              </p>
            </div>

            <div className={`bg-gray-200 p-6 rounded-lg transition-all duration-700 transform ${
              visibleElements[13] 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-gray-800">
                <strong>Blockchain solutions</strong> and cryptocurrency wallet development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
