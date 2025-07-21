"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Play, TrendingUp, Shield, Bot, Smartphone, Terminal } from "lucide-react"

const projects = {
  infrastructure: [
    {
      id: 1,
      title: "Enterprise Network Monitoring Dashboard",
      description: "Real-time VLAN health tracking with Prometheus/Grafana integration",
      stack: ["Prometheus", "Grafana", "Python", "Cisco APIs"],
      features: ["Real-time monitoring", "Alert system", "Custom dashboards"],
      outcome: "Reduced network downtime by 40%",
      demoUrl: "#",
      githubUrl: "#",
      icon: TrendingUp,
    },
    {
      id: 2,
      title: "Secure IoT Device Management Platform",
      description: "Zero-trust device authentication with AWS IoT Core",
      stack: ["AWS IoT Core", "TLS/DTLS", "React", "Node.js"],
      features: ["Zero-trust auth", "Device lifecycle", "Security monitoring"],
      outcome: "99.9% device security compliance",
      demoUrl: "#",
      githubUrl: "#",
      icon: Shield,
    },
    {
      id: 3,
      title: "Predictive Network Maintenance System",
      description: "ML-powered predictive analytics for network infrastructure",
      stack: ["TensorFlow", "ELK Stack", "Grafana", "Python"],
      features: ["Predictive analytics", "Automated alerts", "Trend analysis"],
      outcome: "30% fewer downtime incidents",
      demoUrl: "#",
      githubUrl: "#",
      icon: TrendingUp,
    },
  ],
  ai: [
    {
      id: 4,
      title: "Intelligent Customer Support Chatbot",
      description: "OpenAI + RAG integration with real-time WebSocket communication",
      stack: ["OpenAI", "RAG", "WebSockets", "Next.js"],
      features: ["Live chat interface", "IT FAQ training", "Context awareness"],
      outcome: "85% query resolution rate",
      demoUrl: "#",
      githubUrl: "#",
      icon: Bot,
      hasLiveDemo: true,
    },
    {
      id: 5,
      title: "AI-Powered Security Threat Detection",
      description: "PyTorch-based anomaly detection with Wireshark integration",
      stack: ["PyTorch", "Wireshark", "Python", "Elasticsearch"],
      features: ["Anomaly heatmaps", "Real-time detection", "Threat classification"],
      outcome: "95% threat detection accuracy",
      demoUrl: "#",
      githubUrl: "#",
      icon: Shield,
    },
    {
      id: 6,
      title: "Data Graphs Converter",
      description: "Interactive data visualization with D3.js and Python Pandas",
      stack: ["D3.js", "Python", "Pandas", "React"],
      features: ["CSV import", "Interactive charts", "Export options"],
      outcome: "Processed 1M+ data points",
      demoUrl: "#",
      githubUrl: "#",
      icon: TrendingUp,
    },
  ],
  web: [
    {
      id: 7,
      title: "Financial Dashboard",
      description: "Real-time crypto/fiat balance tracking with Plaid API",
      stack: ["React", "Plaid API", "Chart.js", "Node.js"],
      features: ["Real-time balances", "Transaction history", "Portfolio analytics"],
      outcome: "Managing $500K+ in assets",
      demoUrl: "#",
      githubUrl: "#",
      icon: TrendingUp,
    },
    {
      id: 8,
      title: "URL Shortener - Yuupi",
      description: "High-performance URL shortening service with Redis caching",
      stack: ["Node.js", "Redis", "Express", "Rate Limiting"],
      features: ["2ms redirect latency", "Analytics", "Custom domains"],
      outcome: "1M+ URLs shortened",
      demoUrl: "#",
      githubUrl: "#",
      icon: ExternalLink,
    },
    {
      id: 9,
      title: "Online Video Converter",
      description: "Browser-only video processing with WebAssembly FFmpeg",
      stack: ["FFmpeg (Wasm)", "Cloudflare Workers", "React"],
      features: ["Client-side processing", "Multiple formats", "No upload required"],
      outcome: "10K+ conversions processed",
      demoUrl: "#",
      githubUrl: "#",
      icon: Play,
    },
  ],
  blockchain: [
    {
      id: 10,
      title: "WePay - Crypto Wallet",
      description: "Multi-signature crypto wallet with MetaMask SDK integration",
      stack: ["Solidity", "MetaMask SDK", "Web3.js", "React"],
      features: ["Multi-sig approvals", "DeFi integration", "Security audits"],
      outcome: "$100K+ transactions secured",
      demoUrl: "#",
      githubUrl: "#",
      icon: Shield,
    },
    {
      id: 11,
      title: "IoT Dashboard",
      description: "Real-time sensor data visualization with MQTT and Three.js",
      stack: ["MQTT", "WebSockets", "Three.js", "React"],
      features: ["Live sensor data", "3D visualization", "Alert system"],
      outcome: "50+ IoT devices monitored",
      demoUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      hasLiveDemo: true,
    },
  ],
}

export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("infrastructure")

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-green-400 mb-2">{"> ls -la /projects/"}</div>
          <h2 className="text-4xl font-bold text-white mb-4">Project Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            12+ technical projects demonstrating end-to-end ownership from design to deployment
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-green-500">
            <TabsTrigger
              value="infrastructure"
              className="font-mono data-[state=active]:bg-green-600 data-[state=active]:text-black"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Infrastructure
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="font-mono data-[state=active]:bg-cyan-600 data-[state=active]:text-black"
            >
              <Bot className="w-4 h-4 mr-2" />
              AI & Automation
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="font-mono data-[state=active]:bg-blue-600 data-[state=active]:text-black"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Web & Utilities
            </TabsTrigger>
            <TabsTrigger
              value="blockchain"
              className="font-mono data-[state=active]:bg-purple-600 data-[state=active]:text-black"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Blockchain & IoT
            </TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-gray-900 border-green-500 hover:border-cyan-400 transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <project.icon className="w-8 h-8 text-green-400" />
                        {project.hasLiveDemo && <Badge className="bg-green-600 text-black font-mono">LIVE DEMO</Badge>}
                      </div>
                      <CardTitle className="text-white font-mono">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-mono text-green-400 mb-2">Stack:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-mono text-cyan-400 mb-2">Key Features:</h4>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gray-800 p-3 rounded border border-gray-700">
                          <div className="text-xs font-mono text-green-400 mb-1">Outcome:</div>
                          <div className="text-sm text-white">{project.outcome}</div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-black font-mono">
                            <Play className="w-4 h-4 mr-1" />
                            Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 font-mono bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
