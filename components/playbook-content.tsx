"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown, Play, X, Network, Cloud, Shield, TrendingUp, MessageSquare, Eye, BarChart3, DollarSign, Link, Video, Wallet, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const projects = [
  {
    id: "enterprise-network-monitoring",
    title: "Enterprise Network Monitoring Dashboard",
    subtitle: "Real-time VLAN health tracking",
    category: "Infrastructure & Networking",
    description: "Real-time VLAN health tracking with Prometheus and Grafana integration",
    technologies: ["Prometheus", "Grafana", "Python", "Cisco APIs"],
    icon: Network,
    imageUrl: "/1.png",
    videoUrl: "/1.webm"
  },
  {
    id: "cloud-migration-portal",
    title: "Cloud Migration Management Portal", 
    subtitle: "Automated cloud workflows",
    category: "Infrastructure & Networking",
    description: "Automated cloud migration workflows with infrastructure as code",
    technologies: ["AWS", "Terraform", "Docker", "CI/CD"],
    icon: Cloud,
    imageUrl: "/2.png",
    videoUrl: "/2.webm"
  },
  {
    id: "secure-iot-platform",
    title: "Secure IoT Device Management Platform",
    subtitle: "Zero-trust device authentication",
    category: "Infrastructure & Networking", 
    description: "Zero-trust device authentication with TLS/DTLS encryption",
    technologies: ["AWS IoT Core", "TLS/DTLS", "React", "Node.js"],
    icon: Shield,
    imageUrl: "/3.png",
    videoUrl: "/3.webm"
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Network Maintenance System",
    subtitle: "AI-driven predictive analytics",
    category: "Infrastructure & Networking",
    description: "AI-driven predictive analytics reducing downtime by 30%",
    technologies: ["TensorFlow", "ELK Stack", "Grafana", "Python"],
    icon: TrendingUp,
    imageUrl: "/4.png",
    videoUrl: "/4.webm"
  },
  {
    id: "ai-chatbot",
    title: "Intelligent Customer Support Chatbot",
    subtitle: "OpenAI-powered assistance",
    category: "AI & Automation",
    description: "OpenAI-powered chatbot with RAG and real-time processing",
    technologies: ["OpenAI", "RAG", "WebSockets", "Next.js"],
    icon: MessageSquare,
    imageUrl: "/5.png",
    videoUrl: "/5.webm"
  },
  {
    id: "threat-detection",
    title: "AI-Powered Security Threat Detection",
    subtitle: "PyTorch-based anomaly detection",
    category: "AI & Automation",
    description: "PyTorch-based anomaly detection with Wireshark integration",
    technologies: ["PyTorch", "Wireshark", "Python", "Elasticsearch"],
    icon: Eye,
    imageUrl: "/6.png",
    videoUrl: "/6.webm"
  },
  {
    id: "data-graphs-converter",
    title: "Data Graphs Converter",
    subtitle: "Interactive data visualizations",
    category: "AI & Automation",
    description: "Transform CSV data into interactive visualizations",
    technologies: ["D3.js", "Python", "Pandas", "React"],
    icon: BarChart3,
    imageUrl: "/7.png",
    videoUrl: "/7.webm"
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    subtitle: "Real-time balance tracking",
    category: "Web & Utilities",
    description: "Real-time crypto and fiat balance tracking with Plaid integration",
    technologies: ["React", "Plaid API", "Chart.js", "Node.js"],
    icon: DollarSign,
    imageUrl: "/8.png",
    videoUrl: "/8.webm"
  },
  {
    id: "url-shorter-yuupi",
    title: "URL Shorter - Yuupi",
    subtitle: "High-performance shortener",
    category: "Web & Utilities", 
    description: "High-performance URL shortener with 2ms redirect latency",
    technologies: ["Node.js", "Redis", "Rate Limiting", "Docker"],
    icon: Link,
    imageUrl: "/10.png",
    videoUrl: "/10.webm"
  },
  {
    id: "video-converter",
    title: "Online Video Converter",
    subtitle: "Browser-only video processing",
    category: "Web & Utilities",
    description: "Browser-only video processing with WebAssembly FFmpeg",
    technologies: ["FFmpeg", "WebAssembly", "Cloudflare Workers", "React"],
    icon: Video,
    imageUrl: "/11.png",
    videoUrl: "/11.webm"
  },
  {
    id: "wepay-crypto-wallet",
    title: "WePay - Crypto Wallet",
    subtitle: "Multi-signature wallet",
    category: "Blockchain & IoT",
    description: "Multi-signature cryptocurrency wallet with MetaMask integration",
    technologies: ["Solidity", "MetaMask SDK", "Web3.js", "React"],
    icon: Wallet,
    imageUrl: "/12.png",
    videoUrl: "/12.webm"
  },
  {
    id: "iot-dashboard",
    title: "IoT-Dashboard",
    subtitle: "Real-time sensor visualization",
    category: "Blockchain & IoT",
    description: "Real-time sensor data visualization with Three.js rendering",
    technologies: ["MQTT", "WebSockets", "Three.js", "Node.js"],
    icon: Smartphone,
    imageUrl: "/9.png",
    videoUrl: "/9.webm"
  }
]

export function PlaybookContent() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({})
  
  const infrastructureRef = useRef<HTMLDivElement>(null)
  const aiRef = useRef<HTMLDivElement>(null)
  const webRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize hero elements as invisible
    setVisibleElements(new Array(3).fill(false))
    
    // Animate hero elements appearing one by one
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        setVisibleElements(prev => {
          const newVisible = [...prev]
          newVisible[i] = true
          return newVisible
        })
      }, i * 200)
    }

    // Set up intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section')
            if (sectionId) {
              setVisibleSections(prev => ({...prev, [sectionId]: true}))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    // Observe sections when they're mounted
    const sections = [infrastructureRef.current, aiRef.current, webRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          <div className={`mb-8 transition-all duration-500 transform ${
            visibleElements[0] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-gray-400 text-sm font-medium tracking-wider uppercase border border-gray-600 px-4 py-2 rounded">
              PORTFOLIO
            </span>
          </div>

          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-500 transform ${
            visibleElements[1] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            Portfolio Projects
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Interactive Showcase
            </span>
          </h1>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed transition-all duration-500 transform ${
            visibleElements[2] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            Explore 12 comprehensive projects showcasing expertise across networking, cloud infrastructure, 
            AI integration, and full-stack development. Click any project to view a detailed demonstration.
          </p>
        </div>

        <ChevronDown className="absolute bottom-8 w-6 h-6 text-gray-400 animate-bounce" />
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Infrastructure & Networking Projects */}
          <div className="mb-16" ref={infrastructureRef} data-section="infrastructure">
            <h2 className={`text-3xl font-bold text-white mb-8 text-center transition-all duration-700 transform ${
              visibleSections.infrastructure 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Infrastructure & Networking
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .filter(project => project.category === "Infrastructure & Networking")
                .map((project, index) => (
                <Card 
                  key={project.id}
                  className={`bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-700 cursor-pointer group hover:bg-gray-900/80 backdrop-blur-sm transform ${
                    visibleSections.infrastructure 
                      ? (index < 2 ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100')
                      : (index < 2 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0')
                  }`}
                  style={{ transitionDelay: visibleSections.infrastructure ? `${index * 200}ms` : '0ms' }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-10 flex flex-col items-start justify-center min-h-[350px] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/25 transition-colors duration-500" />
                    
                    <div className="relative z-10 mb-8">
                      <project.icon className="w-16 h-16 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="relative z-10 space-y-4 flex-1">
                      <h3 className="text-3xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-500 text-lg group-hover:text-gray-400 transition-colors">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Play className="w-8 h-8 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI & Automation Projects */}
          <div className="mb-16" ref={aiRef} data-section="ai">
            <h2 className={`text-3xl font-bold text-white mb-8 text-center transition-all duration-700 transform ${
              visibleSections.ai 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI & Automation
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === "AI & Automation")
                .map((project, index) => (
                <Card 
                  key={project.id}
                  className={`bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-700 cursor-pointer group hover:bg-gray-900/80 backdrop-blur-sm transform ${
                    visibleSections.ai 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: visibleSections.ai ? `${index * 200}ms` : '0ms' }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-8 flex flex-col items-start justify-center min-h-[320px] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/25 transition-colors duration-500" />
                    
                    <div className="relative z-10 mb-6">
                      <project.icon className="w-14 h-14 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="relative z-10 space-y-3 flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-500 text-base group-hover:text-gray-400 transition-colors">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Play className="w-7 h-7 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Web & Utilities + Blockchain & IoT Projects */}
          <div className="mb-16" ref={webRef} data-section="web">
            <h2 className={`text-3xl font-bold text-white mb-8 text-center transition-all duration-700 transform ${
              visibleSections.web 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Web & Utilities + Blockchain & IoT
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {projects
                .filter(project => project.category === "Web & Utilities" || project.category === "Blockchain & IoT")
                .map((project, index) => {
                  // Define animation direction based on card position
                  let animationClass = ''
                  if (index < 3) { // First row (cards 0-2) - from left
                    animationClass = visibleSections.web ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } else { // Second row (cards 3+) - from right  
                    animationClass = visibleSections.web ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }
                  
                  return (
                <Card 
                  key={project.id}
                  className={`bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-700 cursor-pointer group hover:bg-gray-900/80 backdrop-blur-sm transform ${animationClass} ${
                    project.id === "financial-dashboard" || project.id === "url-shorter-yuupi" || project.id === "video-converter" ? "lg:col-span-2" : ""
                  } ${
                    project.id === "wepay-crypto-wallet" || project.id === "iot-dashboard" ? "lg:col-span-3" : ""
                  }`}
                  style={{ transitionDelay: visibleSections.web ? `${index * 150}ms` : '0ms' }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-8 flex flex-col items-start justify-center min-h-[300px] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/25 transition-colors duration-500" />
                    
                    <div className="relative z-10 mb-6">
                      <project.icon className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="relative z-10 space-y-3 flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-500 text-base group-hover:text-gray-400 transition-colors">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Play className="w-6 h-6 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
                  )
                })}
            </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl bg-gray-900 border-gray-700 p-0">
          {selectedProject && (
            <div className="relative">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-gray-400 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-blue-500 text-blue-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative bg-black flex items-center justify-center">
                <video
                  className="w-full h-[400px] object-contain"
                  autoPlay
                  controls
                  muted
                  loop
                >
                  <source src={selectedProject.videoUrl} type="video/webm" />
                  <source src={selectedProject.videoUrl.replace('.webm', '.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
