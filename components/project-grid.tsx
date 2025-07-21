"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    id: "network-monitoring",
    title: "Enterprise Network Monitoring",
    role: "Senior Infrastructure Engineer",
    description: "Real-time VLAN health tracking and network optimization",
    tags: ["PROMETHEUS", "GRAFANA", "PYTHON", "CISCO APIs"],
    featured: true,
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support",
    role: "ML Integration Lead",
    description: "Intelligent chatbot with RAG and real-time processing",
    tags: ["OPENAI", "RAG", "WEBSOCKETS", "NEXT.JS"],
  },
  {
    id: "iot-platform",
    title: "Secure IoT Management",
    role: "IoT Security Architect",
    description: "Zero-trust device authentication platform",
    tags: ["AWS IOT", "TLS/DTLS", "REACT", "NODE.JS"],
  },
  {
    id: "crypto-wallet",
    title: "WePay Crypto Wallet",
    role: "Blockchain Developer",
    description: "Multi-signature cryptocurrency wallet solution",
    tags: ["SOLIDITY", "METAMASK", "WEB3.JS", "REACT"],
  },
  {
    id: "threat-detection",
    title: "AI Threat Detection",
    role: "Security ML Engineer",
    description: "PyTorch-based anomaly detection system",
    tags: ["PYTORCH", "WIRESHARK", "PYTHON", "ELASTICSEARCH"],
  },
  {
    id: "financial-dashboard",
    title: "Financial Analytics",
    role: "FinTech Developer",
    description: "Real-time crypto and fiat balance tracking",
    tags: ["REACT", "PLAID API", "CHART.JS", "NODE.JS"],
  },
]

export function ProjectGrid() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            I've worked as a <span className="text-white">senior technical engineer</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400">
            and in <span className="text-white">technical leadership</span> roles for:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <Card
                className={`bg-gray-900 border-gray-700 hover:border-gray-500 transition-all cursor-pointer h-full ${
                  project.featured ? "md:col-span-1 border-2 border-blue-500" : ""
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-2">{project.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
