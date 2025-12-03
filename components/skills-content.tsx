"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const skillCategories = [
    {
        category: "AI & Prompt Engineering",
        items: [
            { name: "AI Prompt Engineering", description: "Advanced techniques for OpenAI and Google AI models" },
            { name: "Multimodal Interfaces", description: "Developing interfaces that handle text, image, and data inputs" },
            { name: "Chatbot Development", description: "Building conversational AI agents and assistants" },
            { name: "Ethical AI", description: "Implementing responsible and fair AI practices" },
            { name: "Real-time Data Processing", description: "Handling live data streams for AI models and analytics" },
            { name: "AI Integration", description: "Leveraging PyTorch, LLM fine-tuning, and Retrieval-Augmented Generation (RAG)" }
        ]
    },
    {
        category: "Frontend Development",
        items: [
            { name: "Core Technologies", description: "HTML/CSS, JavaScript/TypeScript" },
            { name: "Frameworks & Libraries", description: "React (with Next.js), Web Components, Zustand" },
            { name: "Mobile Development", description: "React Native, Flutter" },
            { name: "Performance & Optimization", description: "Rendering optimization, performance monitoring" },
            { name: "Security & Testing", description: "OWASP best practices, React Testing Library (RTL)" },
            { name: "SEO & Accessibility", description: "Search engine optimization, WCAG compliance" }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Languages & Runtime", description: "Node.js, Python (FastAPI, Django), Go, Rust" },
            { name: "API Development", description: "REST, GraphQL, gRPC" },
            { name: "Authentication & Security", description: "OAuth, JWT, SSO, Zero Trust Architecture" },
            { name: "Real-time Technologies", description: "WebAssembly, WebSockets, WebRTC" }
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            { name: "Serverless Computing", description: "AWS Lambda, Vercel, Cloudflare Workers" },
            { name: "Containerization", description: "Docker, Kubernetes" },
            { name: "Infrastructure as Code (IaC)", description: "Terraform, Pulumi" },
            { name: "CI/CD Pipelines", description: "GitHub Actions" },
            { name: "Monitoring & Observability", description: "ELK Stack, Prometheus, Grafana" },
            { name: "Cloud Platforms", description: "AWS, Azure, Vercel, Netlify" }
        ]
    },
    {
        category: "Data & Systems",
        items: [
            { name: "Database Technologies", description: "SQL, NoSQL, NewSQL, Distributed File Systems (DFS)" },
            { name: "Networking", description: "Cisco (CCNA), VLANs, Routing (RIP/OSPF/EIGRP), Wireless, Structured Cabling" },
            { name: "Systems Administration", description: "Windows/Linux (Fedora/Ubuntu/SUSE), Active Directory, DNS, DHCP, Clustering, VPN" },
            { name: "System Administration Tools", description: "Webmin, phpMyAdmin" },
            { name: "Operating Systems", description: "Windows Server 2022, macOS, Linux" }
        ]
    },
    {
        category: "Emerging Technologies",
        items: [
            { name: "Automation", description: "Python, Bash, Node.js scripting" },
            { name: "Edge Computing", description: "Processing data closer to the source" },
            { name: "Internet of Things (IoT)", description: "Device management, data processing, real-time analytics" },
            { name: "Blockchain & Cryptocurrency", description: "Smart contract development (Solidity), Web3 integration, MetaMask SDK" }
        ]
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "UI/UX Design", description: "Figma" },
            { name: "VoIP & Telephony", description: "VOS Softswitch, SIP, Gateway Registration" }
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Problem Solving & Research", description: "Analytical thinking and information gathering" },
            { name: "Communication & Collaboration", description: "Effective verbal and written communication, remote teamwork" },
            { name: "Leadership & Mentoring", description: "Guiding and developing other team members" },
            { name: "Product Mindset & Adaptability", description: "Focusing on user value and embracing change" },
            { name: "Negotiation & Time Management", description: "Managing stakeholder expectations and prioritizing tasks" },
            { name: "Languages", description: "Fluent in Spanish" }
        ]
    }
]

export function SkillsContent() {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([])

    useEffect(() => {
        // Initialize all cards as invisible
        setVisibleCards(new Array(skillCategories.length).fill(false))

        // Animate cards appearing one by one
        skillCategories.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => {
                    const newVisible = [...prev]
                    newVisible[index] = true
                    return newVisible
                })
            }, index * 150) // 150ms delay between each card
        })
    }, [])

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold text-black">Skills</h1>
                    <Link href="/resume">
                        <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">
                            View Resume
                        </Button>
                    </Link>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Technical expertise & <span className="text-gray-600">capabilities</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        A comprehensive overview of my technical stack and professional competencies.
                    </p>
                </div>

                <div className="space-y-6">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            className={`bg-gray-100 border-none hover:shadow-lg hover:scale-[1.02] transition-all duration-500 transform ${visibleCards[index]
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                                }`}
                        >
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-black mb-6">{category.category}</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex flex-col">
                                            <span className="font-semibold text-black text-lg mb-1">{item.name}</span>
                                            <span className="text-gray-600 text-sm leading-relaxed">{item.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/portfolio">
                        <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">See portfolio</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
