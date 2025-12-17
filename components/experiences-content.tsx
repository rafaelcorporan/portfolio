"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Link from "next/link"

const experienceCategories = [
    {
        category: "Forger Digital | Enterprise Network Monitoring Dashboard • Full-time",
        videoUrl: "/1.webm",
        modalTitle: "Enterprise Network Monitoring Dashboard",
        modalDescription: "Real-time VLAN health tracking with Prometheus and Grafana integration",
        technologies: ["Prometheus", "Grafana", "Python", "Cisco APIs"],
        items: [
            { name: "Role & Timeline", description: "Senior Infrastructure & Networking Engineer | Feb 2024 - Mar 2024" },
            { name: "Challenge", description: "Required real-time visibility into complex enterprise VLANs and network component health." },
            { name: "Solution", description: "Architected a comprehensive monitoring dashboard integrating Prometheus for metrics collection and Grafana for visualization." },
            { name: "Actions", description: "Designed custom data collection agents, configured Prometheus exporters for network devices, created dynamic Grafana dashboards with real-time alerts for key metrics (bandwidth, latency, device status)." },
            { name: "Impact/Results", description: "Delivered real-time VLAN health tracking, reducing network issue detection time by 70% and improving operational efficiency through proactive alerting." }
        ]
    },
    {
        category: "Forger Digital | Cloud Migration Management Portal • Full-time",
        videoUrl: "/2.webm",
        modalTitle: "Cloud Migration Management Portal",
        modalDescription: "Automated cloud migration workflows with infrastructure as code",
        technologies: ["AWS", "Terraform", "Docker", "CI/CD"],
        items: [
            { name: "Role & Timeline", description: "Senior DevOps & Cloud Engineer | Mar 2024 - May 2024" },
            { name: "Challenge", description: "Needed to automate and manage complex, multi-cloud migration workflows efficiently." },
            { name: "Solution", description: "Developed an automated portal using AWS services (EC2, S3, VPC) and Infrastructure as Code (Terraform) for seamless migrations." },
            { name: "Actions", description: "Implemented CI/CD pipelines for infrastructure changes, created Terraform modules for common migration tasks, built a user interface for tracking migration progress and dependencies." },
            { name: "Impact/Results", description: "Delivered automated cloud workflows, reducing manual effort by 85% and significantly accelerating migration timeframes while minimizing errors." }
        ]
    },
    {
        category: "Forger Digital | Secure IoT Device Management Platform • Full-time",
        videoUrl: "/3.webm",
        modalTitle: "Secure IoT Device Management Platform",
        modalDescription: "Zero-trust device authentication with TLS/DTLS encryption",
        technologies: ["AWS IoT Core", "TLS/DTLS", "React", "Node.js"],
        items: [
            { name: "Role & Timeline", description: "Network Security Architect | May 2024 - Jul 2024" },
            { name: "Challenge", description: "Required a secure, scalable system to manage and authenticate a large fleet of IoT devices." },
            { name: "Solution", description: "Designed and implemented a zero-trust, secure platform for IoT device registration, authentication, and management." },
            { name: "Actions", description: "Developed robust certificate-based authentication mechanisms, implemented secure MQTT communication protocols, integrated AWS IoT Core for device lifecycle management and data ingestion." },
            { name: "Impact/Results", description: "Ensured enterprise-grade security for IoT infrastructure, protecting against unauthorized access and data breaches. Enabled scalable device management." }
        ]
    },
    {
        category: "Forger Digital | Predictive Network Maintenance System • Full-time",
        videoUrl: "/4.webm",
        modalTitle: "Predictive Network Maintenance System",
        modalDescription: "AI-driven predictive analytics reducing downtime by 30%",
        technologies: ["TensorFlow", "ELK Stack", "Grafana", "Python"],
        items: [
            { name: "Role & Timeline", description: "ML Infrastructure & Predictive Analytics Engineer | Jun 2024 - Aug 2024" },
            { name: "Challenge", description: "Needed to predict network failures proactively to prevent downtime and reduce reactive maintenance costs." },
            { name: "Solution", description: "Built an AI-powered predictive maintenance system using machine learning models (e.g., PyTorch) to analyze network telemetry." },
            { name: "Actions", description: "Developed data pipelines for collecting historical network performance data, trained ML models to identify failure patterns and anomalies, created an alerting system for predicted issues." },
            { name: "Impact/Results", description: "Delivered AI-driven predictive analytics, improving network uptime by 20% and reducing unplanned maintenance incidents by 40%." }
        ]
    },
    {
        category: "Forger Digital | Intelligent Customer Support Chatbot • Full-time",
        videoUrl: "/5.webm",
        modalTitle: "Intelligent Customer Support Chatbot",
        modalDescription: "OpenAI-powered chatbot with RAG and real-time processing",
        technologies: ["OpenAI", "RAG", "WebSockets", "Next.js"],
        items: [
            { name: "Role & Timeline", description: "AI Integration & Customer Experience Engineer | Jul 2024 - Sep 2024" },
            { name: "Challenge", description: "Required an efficient, always-available solution to handle common customer support queries." },
            { name: "Solution", description: "Created an advanced, context-aware chatbot using large language models (e.g., OpenAI GPT) and Retrieval-Augmented Generation (RAG) for accuracy." },
            { name: "Actions", description: "Integrated real-time data access via WebSockets for dynamic responses, implemented natural language processing for query understanding, designed conversational flows for common issues." },
            { name: "Impact/Results", description: "Delivered OpenAI-powered assistance, reducing average response time by 60% and improving customer satisfaction by handling basic queries instantly." }
        ]
    },
    {
        category: "Forger Digital | AI-Powered Security Threat Detection • Full-time",
        videoUrl: "/6.webm",
        modalTitle: "AI-Powered Security Threat Detection",
        modalDescription: "PyTorch-based anomaly detection with Wireshark integration",
        technologies: ["PyTorch", "Wireshark", "Python", "Elasticsearch"],
        items: [
            { name: "Role & Timeline", description: "Security & AI Threat Detection Engineer | Aug 2024 - Oct 2024" },
            { name: "Challenge", description: "Needed to enhance security posture by automatically identifying and flagging potential network threats and anomalies." },
            { name: "Solution", description: "Architected a real-time threat detection system leveraging machine learning (e.g., PyTorch) to analyze network traffic patterns." },
            { name: "Actions", description: "Developed ML models trained on normal and anomalous traffic data, integrated with network monitoring tools for continuous analysis, created automated alerting and reporting mechanisms." },
            { name: "Impact/Results", description: "Delivered PyTorch-based anomaly detection, enhancing overall system security by identifying potential threats faster and with higher accuracy than manual methods." }
        ]
    },
    {
        category: "Self-employed | Data Graphs Converter • Freelance",
        videoUrl: "/7.webm",
        modalTitle: "Data Graphs Converter",
        modalDescription: "Transform CSV data into interactive visualizations",
        technologies: ["D3.js", "Python", "Pandas", "React"],
        items: [
            { name: "Role & Timeline", description: "Full-Stack Data Visualization Engineer | Sep 2024 - Nov 2024" },
            { name: "Challenge", description: "Needed a tool to convert raw data formats into interactive, shareable visualizations for analysis." },
            { name: "Solution", description: "Built a web application allowing users to upload data and convert it into various interactive graph formats using D3.js." },
            { name: "Actions", description: "Implemented backend data processing with Python and Pandas, created a flexible frontend using D3.js for rendering multiple chart types, designed an intuitive UI for data upload and customization." },
            { name: "Impact/Results", description: "Delivered a robust tool for data visualization, simplifying complex dataset analysis and enabling non-technical users to generate insights." }
        ]
    },
    {
        category: "Self-employed | Financial Dashboard • Freelance",
        videoUrl: "/8.webm",
        modalTitle: "Financial Dashboard",
        modalDescription: "Real-time crypto and fiat balance tracking with Plaid integration",
        technologies: ["React", "Plaid API", "Chart.js", "Node.js"],
        items: [
            { name: "Role & Timeline", description: "Financial Technology & Data Analytics Engineer | Oct 2024 - Dec 2024" },
            { name: "Challenge", description: "Required a centralized platform for visualizing and analyzing complex financial data streams." },
            { name: "Solution", description: "Developed a comprehensive financial dashboard integrating with external APIs (e.g., Plaid) for real-time data retrieval and visualization." },
            { name: "Actions", description: "Designed secure data ingestion pipelines, implemented Chart.js for financial charting (e.g., balance trends, transaction history), ensured compliance with financial data handling standards." },
            { name: "Impact/Results", description: "Delivered Chart.js-powered financial insights, improving data accessibility and reporting efficiency for complex financial metrics." }
        ]
    },
    {
        category: "Self-employed | WePay - Crypto Wallet • Freelance",
        videoUrl: "/12.webm",
        modalTitle: "WePay - Crypto Wallet",
        modalDescription: "Multi-signature cryptocurrency wallet with MetaMask integration",
        technologies: ["Solidity", "MetaMask SDK", "Web3.js", "React"],
        items: [
            { name: "Role & Timeline", description: "Blockchain & Cryptocurrency Developer | Nov 2024 - Jan 2025" },
            { name: "Challenge", description: "Needed to develop a secure, user-friendly cryptocurrency wallet supporting multiple assets (potentially XRP, others)." },
            { name: "Solution", description: "Built a secure wallet application integrating with blockchain SDKs (e.g., Web3.js, MetaMask SDK) for transaction management." },
            { name: "Actions", description: "Implemented robust private key management (likely client-side encryption), developed transaction signing and broadcasting logic, integrated with various blockchain networks for multi-asset support." },
            { name: "Impact/Results", description: "Delivered a Solidity-powered (or similar) wallet solution, enabling secure digital asset management with a focus on user experience and security." }
        ]
    },
    {
        category: "Self-employed | IoT-Dashboard • Freelance",
        videoUrl: "/9.webm",
        modalTitle: "IoT-Dashboard",
        modalDescription: "Real-time sensor data visualization with Three.js rendering",
        technologies: ["MQTT", "WebSockets", "Three.js", "Node.js"],
        items: [
            { name: "Role & Timeline", description: "IoT & Full-Stack Developer | Dec 2024 - Feb 2025" },
            { name: "Challenge", description: "Required a real-time dashboard to visualize and manage data streams from multiple IoT sensors and devices." },
            { name: "Solution", description: "Created a real-time dashboard integrating with IoT communication protocols (MQTT) and WebSocket connections for live data updates." },
            { name: "Actions", description: "Implemented MQTT broker integration for receiving sensor data, used WebSockets for instant client-side updates, potentially used Three.js for 3D data visualization or spatial representation." },
            { name: "Impact/Results", description: "Delivered MQTT/WebSockets-powered IoT monitoring, providing real-time operational insights and enabling proactive management of IoT infrastructure." }
        ]
    },
    {
        category: "Self-employed | URL Shorter - Yuupi • Freelance",
        videoUrl: "/10.webm",
        modalTitle: "URL Shorter - Yuupi",
        modalDescription: "High-performance URL shortener with 2ms redirect latency",
        technologies: ["Node.js", "Redis", "Rate Limiting", "Docker"],
        items: [
            { name: "Role & Timeline", description: "Technical Lead & Performance Optimization Engineer | Jan 2025 - Mar 2025" },
            { name: "Challenge", description: "Needed to create a high-performance, globally accessible URL shortening service." },
            { name: "Solution", description: "Led development of a high-performance service using Node.js for backend logic, Redis for fast key-value lookups, and Cloudflare Workers for global edge deployment." },
            { name: "Actions", description: "Designed efficient data models for storing URL mappings, implemented caching strategies with Redis, leveraged Cloudflare Workers for low-latency redirects worldwide." },
            { name: "Impact/Results", description: "Delivered a scalable service with sub-millisecond latency for link redirection, achieving global performance through edge computing." }
        ]
    },
    {
        category: "Self-employed | Online Video Converter • Freelance",
        videoUrl: "/11.webm",
        modalTitle: "Online Video Converter",
        modalDescription: "Browser-only video processing with WebAssembly FFmpeg",
        technologies: ["FFmpeg", "WebAssembly", "Cloudflare Workers", "React"],
        items: [
            { name: "Role & Timeline", description: "Full-Stack Media Processing Engineer | Feb 2025 - Apr 2025" },
            { name: "Challenge", description: "Needed to provide a fast, user-friendly web-based tool for converting video files." },
            { name: "Solution", description: "Developed a web-based converter leveraging FFmpeg for powerful backend processing and WebAssembly for potential client-side operations." },
            { name: "Actions", description: "Implemented FFmpeg integration for format conversion, explored WebAssembly for client-side transcoding, integrated with Cloudflare Workers for efficient processing and global distribution." },
            { name: "Impact/Results", description: "Delivered a fast, user-friendly video conversion tool leveraging advanced transcoding technologies, optimizing processing speed and user experience." }
        ]
    }
]

export function ExperiencesContent() {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([])
    const [selectedExperience, setSelectedExperience] = useState<typeof experienceCategories[0] | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        // Initialize all cards as invisible
        setVisibleCards(new Array(experienceCategories.length).fill(false))

        // Animate cards appearing one by one
        experienceCategories.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => {
                    const newVisible = [...prev]
                    newVisible[index] = true
                    return newVisible
                })
            }, index * 150) // 150ms delay between each card
        })
    }, [])

    const handleExperienceClick = (experience: typeof experienceCategories[0]) => {
        setSelectedExperience(experience)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedExperience(null)
    }

    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold text-black">Experiences</h1>
                    <Link href="/resume">
                        <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">
                            View Resume
                        </Button>
                    </Link>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Professional <span className="text-gray-600">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        A showcase of my recent project work and professional roles. Click on any card to view the project demonstration.
                    </p>
                </div>

                <div className="space-y-6">
                    {experienceCategories.map((category, index) => (
                        <Card
                            key={index}
                            className={`bg-gray-100 border-none hover:shadow-lg hover:scale-[1.02] transition-all duration-500 transform cursor-pointer group ${visibleCards[index]
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                                }`}
                            onClick={() => handleExperienceClick(category)}
                        >
                            <CardContent className="p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-6 group-hover:text-gray-700 transition-colors">{category.category}</h3>

                                <div className="grid grid-cols-1 gap-6">
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

            {/* Video Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-4xl bg-gray-900 border-gray-700 p-0">
                    {selectedExperience && (
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            <div className="p-6 border-b border-gray-700">
                                <DialogTitle className="text-2xl font-bold text-white mb-2">{selectedExperience.modalTitle}</DialogTitle>
                                <p className="text-gray-400 mb-4">{selectedExperience.modalDescription}</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedExperience.technologies.map((tech) => (
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
                                    <source src={selectedExperience.videoUrl} type="video/webm" />
                                    <source src={selectedExperience.videoUrl.replace('.webm', '.mp4')} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
