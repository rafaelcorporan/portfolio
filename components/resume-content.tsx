"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Udara NYC",
    role: "VoIP Network Project Lead",
    period: "Mar 2019 – Sep 2024",
    location: "Remote / Multi-site",
    description: "Architected and deployed a secure, multi-location VoIP network with site-specific gateways and centralized DigitalOcean VPS core.",
    details: [
      "Architected and deployed a secure, multi-location VoIP network with site-specific gateways and centralized DigitalOcean VPS core.",
      "Implemented end-to-end encrypted VPN tunneling and optimized VOS Softswitch for high-availability call routing.",
      "Integrated simulation training platform (Sim Center) and managed Gateway Registration System for dynamic call flow.",
      "Dual role as Project Manager & IT Recruiter: Led 5+ engineers, coordinated resource allocation, and delivered all milestones on schedule."
    ]
  },
  {
    company: "Tech Alliance, NYC",
    role: "IT Specialist",
    period: "Apr 2014 – Sep 2017",
    location: "New York, NY",
    description: "Provided end-to-end desktop/server support; rapidly promoted to Web Administrator.",
    details: [
      "Provided end-to-end desktop/server support; rapidly promoted to Web Administrator.",
      "Deployed and managed Oracle DB on SUSE Linux 11; built LAMP stack servers and WordPress sites.",
      "Automated MySQL backups via Bash/cron; maintained mixed (Windows XP–Server 2012) and Linux environments."
    ]
  },
  {
    company: "OnuxTech",
    role: "IT Consultant",
    period: "Feb 2008 - Nov 2013",
    location: "Freeport, NY",
    description: "Designed and constructed data centers from ground up; implemented structured cabling and redundancy.",
    details: [
      "Designed and constructed data centers from ground up; implemented structured cabling and redundancy.",
      "Increased application uptime >99.5% by enhancing failover and reducing mean-time-to-recovery.",
      "Developed full-stack web applications and provided comprehensive IT consulting services."
    ]
  },
  {
    company: "DP World Caucedo",
    role: "System Engineer & Network Admin",
    period: "Oct 2003 – May 2007",
    location: "Dominican Republic",
    description: "Promoted from Crane Operator to System Engineer within 9 months, then to Network Administrator within 2 years.",
    accomplishments: [
      "Promoted from Crane Operator to System Engineer within 9 months at the company",
      "Promoted from System Engineer to Network Administrator within 2 years at the company"
    ],
    details: [
      "Deployed and maintained HP/Dell workstations and servers",
      "Performed Windows/Linux OS imaging and cloning using Acronis and Norton Ghost",
      "Designed and installed structured cabling (UTP, multimode/single-mode fiber)",
      "Configured Cisco Catalyst switches (2955, 4506): VLANs, password recovery, IOS upgrades/backups (TFTP)",
      "Set up wireless infrastructure: Cisco Aironet APs (350/1300 series), Linksys WRT54G/WAP54G, SSID, WEP",
      "Configured Cisco 2600 routers with OSPF, EIGRP, NAT and secure remote access (VTY, password recovery)",
      "Administered core services: Active Directory (Domain Controllers, OUs, GPOs), DNS, DHCP, DFS",
      "Implemented Routing and Remote Access (RRAS) for site-to-site and client VPN (NAT/IPSec)",
      "Ensured continuity via clustered servers and fault-tolerant configurations"
    ]
  },
]

const skills = {
  frontend: [
    "CSS 3", "HTML 5", "React", "Next.js", "TypeScript", "Web Components",
    "CSS-in-JS", "React Native", "Flutter"
  ],
  backend: [
    "Node.js", "Python (FastAPI, Django)", "Go", "Rust", "WebSockets",
    "WebRTC", "WebAssembly", "PhpMyAdmin"
  ],
  cloudDevOps: [
    "AWS", "Azure", "Vercel", "Netlify", "Cloudflare",
    "Lambda", "Cloudflare Workers", "Docker", "Kubernetes",
    "GitHub Actions", "SQL", "NoSQL"
  ],
  ai: [
    "AI Prompt Engineering", "Automation (n8n)", "LLM Integration",
    "OpenAI API", "Claude API", "Model Context Protocol"
  ]
}

const certifications = [
  {
    category: "AI Training & Certificate",
    period: "January 2024 - December 2025",
    items: [
      "OpenAI Academy (Prompt Engineering, Workflow Automation)",
      "Google Cloud AI Implementation",
      "Anthropic Claude AI - AI Fluency: Framework & Foundations",
      "Claude Code in Action",
      "Claude with Amazon Bedrock",
      "Claude with Google Cloud's Vertex AI",
      "Claude with the Anthropic API",
      "Introduction to Model Context Protocol",
      "Teaching AI Fluency",
      "Model Context Protocol: Advanced Topics"
    ]
  },
  {
    category: "Cisco Certificate",
    items: [
      "CCNA 1: Networking Basics Cisco System",
      "CCNA 2: Routers and Routing Basics Cisco System",
      "CCNA 3: Switching Basics & Intermediate Routing",
      "CCNA 4: WAN Technologies",
      "Network Security I & II"
    ]
  },
  {
    category: "Microsoft Certificate",
    items: [
      "Managing & Maintaining Windows Server 2003",
      "Planning a Server 2003 Network Infrastructure",
      "Implementing an Active Directory Infrastructure",
      "Installing, Configuring & Admin Windows Vista Ultimate",
      "Installing, Configuring & Admin Windows XP Professional"
    ]
  },
  {
    category: "Other Certificate",
    items: [
      "CompTIA A+",
      "HP IT Essentials I: PC Hardware and Software",
      "HP IT Essentials II: Network Operating Systems",
      "Panduit Network (Voice and Data Cabling)",
      "GNU/Linux Structure",
      "Linux Red Hat 7"
    ]
  }
]

const education = [
  {
    institution: "UNICDA - Dominican American University",
    degree: "Diploma in Management of Operations"
  },
  {
    institution: "INFOTEP",
    degree: "Diploma in Industrial Mechanic",
    details: "Basics of industrial mechanics, Lathe & Milling machines operator, Tools sharpener and Machines maintenance"
  },
  {
    institution: "Borough of Manhattan Community College",
    degree: "CISCO NETWORK ASSOCIATE (CCNA)"
  }
]

export function ResumeContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Rafael_Corporan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  useEffect(() => {
    setVisibleCards(new Array(experiences.length).fill(false))

    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => {
          const newVisible = [...prev]
          newVisible[index] = true
          return newVisible
        })
      }, index * 200)
    })
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Rafael Corporan</h1>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
              <a href="tel:+13478294952" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(347) 829-4952</span>
              </a>
              <a href="mailto:rafaelcorporan@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>rafaelcorporan@gmail.com</span>
              </a>
            </div>
          </div>
          <Button
            className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
        </div>

        {/* Objective */}
        <Card className="mb-12 border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Objective
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Full-Stack Developer & AI Systems Architect with 10+ years of experience designing and deploying Network
              infrastructure and cloud-native backends to LLM-integrated applications. Combines deep expertise in network
              architecture, scalable DevOps, and ethical AI to build secure, future-proof systems. Proven leader in cross-
              functional environments, with a track record of remote collaboration, and delivering full-stack solutions that
              balance innovation with operational rigor.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-12 border-none shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-600 rounded"></span>
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloudDevOps.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Automation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">AI & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-blue-600 rounded"></span>
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 transform ${visibleCards[index]
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                  }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">{exp.company}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">{exp.role}</p>
                      {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
                    </div>
                    <span className="text-gray-600 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  {exp.accomplishments && (
                    <div className="mb-4 p-4 bg-black rounded-lg border-l-4" style={{ borderColor: '#3AFA05' }}>
                      <h4 className="font-semibold mb-2" style={{ color: '#3AFA05' }}>Major Accomplishments:</h4>
                      <ul className="space-y-1">
                        {exp.accomplishments.map((accomplishment, idx) => (
                          <li key={idx} className="flex items-start" style={{ color: '#3AFA05' }}>
                            <span className="mr-2 font-bold" style={{ color: '#3AFA05' }}>+</span>
                            {accomplishment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.details && exp.details.length > 0 && (
                    <>
                      {expandedCard === index && (
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {exp.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button
                        variant="link"
                        className="text-blue-600 p-0 h-auto font-semibold hover:text-blue-800"
                        onClick={() => toggleCard(index)}
                      >
                        {expandedCard === index ? 'Show less' : 'Show more details'}
                        {expandedCard === index ?
                          <ChevronUp className="w-4 h-4 ml-1" /> :
                          <ChevronDown className="w-4 h-4 ml-1" />
                        }
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-purple-600 rounded"></span>
            Education & Certifications
          </h2>

          {/* Education */}
          <Card className="mb-6 border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-black mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    {edu.details && <p className="text-sm text-gray-500 mt-1">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-black">{cert.category}</h3>
                    {cert.period && <span className="text-sm text-gray-500">{cert.period}</span>}
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${expandedSection === cert.category ? 'max-h-[2000px]' : 'max-h-0'
                    }`}>
                    <ul className="space-y-2 mt-4">
                      {cert.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-gray-700 flex items-start">
                          <span className="text-purple-600 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="link"
                    className="text-purple-600 p-0 h-auto font-semibold hover:text-purple-800 mt-2"
                    onClick={() => toggleSection(cert.category)}
                  >
                    {expandedSection === cert.category ? 'Show less' : `View all certifications`}
                    {expandedSection === cert.category ?
                      <ChevronUp className="w-4 h-4 ml-1" /> :
                      <ChevronDown className="w-4 h-4 ml-1" />
                    }
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
