"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Mail, Phone, Check } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Udara NYC",
    role: "VoIP Network Project Lead - Remote / Multi-site",
    period: "Mar 2019 – Sep 2024",
    description: "Architected and deployed a secure, multi-location VoIP network with site-specific gateways and centralized DigitalOcean VPS core.",
    details: [
      "Implemented end-to-end encrypted VPN tunneling and optimized VOS Softswitch for high-availability call routing.",
      "Integrated simulation training platform (Sim Center) and managed Gateway Registration System for dynamic call flow.",
      "Dual role as Project Manager & IT Recruiter: Led 5+ engineers, coordinated resource allocation, and delivered all milestones on schedule."
    ]
  },
  {
    company: "Tech Alliance, NYC",
    role: "IT Specialist",
    period: "Apr 2014 – Sep 2017",
    description: "Provided end-to-end desktop/server support; rapidly promoted to Web Administrator.",
    details: [
      "Deployed and managed Oracle DB on SUSE Linux 11; built LAMP stack servers and WordPress sites.",
      "Automated MySQL backups via Bash/cron; maintained mixed (Windows XP–Server 2012) and Linux environments."
    ]
  },
  {
    company: "OnuxTech, Freeport NY",
    role: "IT Consultant & Full-Stack Developer",
    period: "Feb 2008 - Nov 2013",
    description: "Designed and constructed data centers from ground up; implemented structured cabling and redundancy.",
    details: [
      "Increased application uptime >99.5% by enhancing failover and reducing mean-time-to-recovery.",
      "Developed full-stack web applications and provided comprehensive IT consulting services."
    ]
  },
  {
    company: "DP World Caucedo",
    role: "System Engineer & Network Admin",
    period: "Oct 2003 – May 2007",
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

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["CSS 3", "HTML 5", "React", "Next.js", "TypeScript", "Web Components", "CSS-in-JS", "React Native", "Flutter"]
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Python (FastAPI, Django)", "Go", "Rust", "WebSockets", "WebRTC", "WebAssembly", "PhpMyAdmin"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Vercel", "Netlify", "Cloudflare", "Lambda", "Cloudflare Workers", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    title: "Databases & AI",
    skills: ["SQL", "NoSQL", "AI Prompt Engineering", "Automation (n8n)", "Internet Marketing"]
  }
]

const aiCertifications = [
  {
    title: "OpenAI Academy",
    items: ["Prompt Engineering", "Workflow Automation"]
  },
  {
    title: "Google Cloud AI",
    items: ["Implementation"]
  },
  {
    title: "ANTHROPIC (Claude AI)",
    period: "January 2024 - December 2025",
    items: [
      "AI Fluency: Framework & Foundations",
      "Claude Code in Action",
      "Claude with Amazon Bedrock",
      "Claude with Google Cloud's Vertex AI",
      "Claude with the Anthropic API",
      "Introduction to Model Context Protocol",
      "Teaching AI Fluency",
      "Model Context Protocol: Advanced Topics"
    ]
  }
]

const certifications = [
  {
    category: "Cisco Academy / ITLA",
    items: [
      "CCNA 1: Networking Basics Cisco system",
      "CCNA 2: Routers and Routing Basics Cisco system",
      "CCNA 3: Switching Basics & Intermediate Routing",
      "CCNA 4: WAN Technologies",
      "HP IT Essentials I PC Hardware and Software",
      "HP IT Essentials II Network Operating Systems",
      "Network Security I",
      "Network Security II"
    ]
  },
  {
    category: "CompTIA",
    items: ["CompTIA A+"]
  },
  {
    category: "Linux",
    items: [
      "GNU/Linux Structure",
      "Linux Red Hat 7"
    ]
  },
  {
    category: "Panduit Network",
    items: ["Voice and Data Cabling"]
  },
  {
    category: "Test-Out",
    items: [
      "Managing & Maintaining Windows Server 2003",
      "Planning a Server 2003 Network Infrastructure",
      "Implementing an Active Directory Infrastructure",
      "Installing, Configuring & Admin Windows Vista Ultimate",
      "Installing, Configuring & Admin Windows XP Professional"
    ]
  }
]

export function ResumeContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
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
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8 gap-4">
          <div>
            <h1 className="text-5xl font-bold text-black mb-2">Rafael Corporan</h1>
            <p className="text-lg text-gray-600 mb-4">Full-Stack Developer & AI Systems Architect</p>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-700 text-sm">
              <a href="tel:+13478294952" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(347) 829-4952</span>
              </a>
              <a href="mailto:rafaelcorporan@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>rafaelcorporan@gmail.com</span>
              </a>
            </div>
          </div>
          <Button
            className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 rounded-full text-sm font-medium mt-4 md:mt-0"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </Button>
        </div>

        {/* Professional Objective */}
        <div className="mb-12 p-8 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Professional Objective</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Full-Stack Developer & AI Systems Architect with 10+ years of experience designing and deploying Network
            infrastructure and cloud-native backends to LLM-integrated applications. Combines deep expertise in network
            architecture, scalable DevOps, and ethical AI to build secure, future-proof systems. Proven leader in cross-
            functional environments, with a track record of remote collaboration, and delivering full-stack solutions that
            balance innovation with operational rigor.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-base font-bold text-black mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Professional Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-8 bg-gray-50 rounded-lg transition-all duration-500 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <h3 className="text-xl font-bold text-black mb-1">{exp.company}</h3>
                <p className="text-sm text-gray-700 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                <p className="text-sm text-gray-700 mb-4">{exp.description}</p>

                {exp.accomplishments && (
                  <div className="mb-4 p-4 bg-black rounded-lg border-l-4" style={{ borderColor: '#3AFA05', fontFamily: 'Courier New, monospace' }}>
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
                      <div className="mb-4 mt-4">
                        <ul className="space-y-2">
                          {exp.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-gray-700 flex items-start text-sm">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button
                      variant="link"
                      className="text-blue-600 p-0 h-auto font-medium text-sm hover:text-blue-800 mt-2"
                      onClick={() => toggleCard(index)}
                    >
                      {expandedCard === index ? 'Read less' : 'Read more'}
                      {expandedCard === index ?
                        <ChevronUp className="w-4 h-4 ml-1" /> :
                        <ChevronDown className="w-4 h-4 ml-1" />
                      }
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white">
                <h3 className="text-base font-bold text-black mb-3">{cert.category}</h3>
                <ul className="space-y-2">
                  {cert.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start text-sm text-gray-700">
                      <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* AI Training & Certifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">AI Training & Certifications</h2>

          <div className="space-y-8">
            {aiCertifications.map((cert, idx) => (
              <div key={idx} className="bg-pink-50/30 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-black">{cert.title}</h3>
                  {cert.period && (
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-100">
                      {cert.period}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm border border-gray-100 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/portfolio">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full text-base font-medium transition-all">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
