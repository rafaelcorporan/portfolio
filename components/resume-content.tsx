"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const objective = "Full-Stack Developer & AI Systems Architect with 10+ years of experience designing and deploying Network infrastructure and cloud-native backends to LLM-integrated applications. Combines deep expertise in network architecture, scalable DevOps, and ethical AI to build secure, future-proof systems. Proven leader in cross-functional environments, with a track record of remote collaboration, and delivering full-stack solutions that balance innovation with operational rigor."

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["CSS 3", "HTML 5", "React", "Next.js", "TypeScript", "Web Components", "CSS-in-JS", "React Native", "Flutter"]
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Python (FastAPI, Django)", "Go", "Rust", "WebSockets", "WebRTC", "WebAssembly", "PhpMyAdmin"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Vercel", "Netlify", "Cloudflare", "Lambda", "Cloudflare Workers", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    category: "Databases & AI",
    skills: ["SQL", "NoSQL", "AI Prompt Engineering", "Automation (n8n)", "Internet Marketing"]
  }
]

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
      "Developed full-stack applications and managed enterprise infrastructure projects."
    ]
  },
  {
    company: "DP World Caucedo",
    role: "System Engineer & Network Admin",
    period: "Oct 2003 – May 2007",
    description: "Promoted from Crane Operator to System Engineer within 9 months, then to Network Administrator within 2 years.",
    accomplishments: [
      "Promoted from Crane Operator to System Engineer within 9 months",
      "Promoted from System Engineer to Network Administrator within 2 years"
    ],
    details: [
      "Hardware & Systems Deployment: Deployed and maintained HP/Dell workstations and servers; performed Windows/Linux OS imaging and cloning using Acronis and Norton Ghost.",
      "Enterprise Networking & Security: Designed and installed structured cabling (UTP, multimode/single-mode fiber); configured Cisco Catalyst switches (2955, 4506) with VLANs, password recovery, IOS upgrades/backups (TFTP).",
      "Wireless Infrastructure: Set up Cisco Aironet APs (350/1300 series), Linksys WRT54G/WAP54G with SSID and WEP security.",
      "Router Configuration: Configured Cisco 2600 routers with OSPF, EIGRP, NAT and secure remote access (VTY, password recovery).",
      "Microsoft Infrastructure: Administered Active Directory (Domain Controllers, OUs, GPOs), DNS, DHCP, DFS.",
      "High Availability: Implemented Routing and Remote Access (RRAS) for site-to-site and client VPN (NAT/IPSec); ensured continuity via clustered servers and fault-tolerant configurations."
    ]
  }
]

const education = [
  {
    institution: "UNICDA - Dominican American University",
    degree: "Diploma in Management of Operations",
    period: ""
  },
  {
    institution: "INFOTEP",
    degree: "Diploma in Industrial Mechanic",
    description: "Basics of industrial mechanics, Lathe & Milling machines operator, Tools sharpener and Machines maintenance",
    period: ""
  },
  {
    institution: "Borough of Manhattan Community College",
    degree: "CISCO NETWORK ASSOCIATE (CCNA)",
    period: ""
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

const aiTraining = [
  {
    provider: "OpenAI Academy",
    courses: ["Prompt Engineering", "Workflow Automation"]
  },
  {
    provider: "Google Cloud AI",
    courses: ["Implementation"]
  },
  {
    provider: "ANTHROPIC (Claude AI)",
    courses: [
      "AI Fluency: Framework & Foundations",
      "Claude Code in Action",
      "Claude with Amazon Bedrock",
      "Claude with Google Cloud's Vertex AI",
      "Claude with the Anthropic API",
      "Introduction to Model Context Protocol",
      "Teaching AI Fluency",
      "Model Context Protocol: Advanced Topics"
    ],
    period: "January 2024 - December 2025"
  }
]

export function ResumeContent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  useEffect(() => {
    // Initialize all cards as invisible
    setVisibleCards(new Array(experiences.length).fill(false))

    // Animate cards appearing one by one
    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => {
          const newVisible = [...prev]
          newVisible[index] = true
          return newVisible
        })
      }, index * 200) // 200ms delay between each card
    })
  }, [])
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Contact Info */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Rafael Corporan</h1>
              <p className="text-xl text-gray-600">Full-Stack Developer & AI Systems Architect</p>
            </div>
            <Button
              className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </Button>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(347) 829-4952</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>rafaelcorporan@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Professional Objective */}
        <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-none">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Professional Objective</h2>
            <p className="text-gray-700 leading-relaxed">{objective}</p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-50 border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`bg-gray-100 border-none hover:shadow-lg transition-all duration-500 transform ${visibleCards[index]
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                  }`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{exp.company}</h3>
                  <p className="text-lg text-gray-700 mb-2">{exp.role}</p>
                  <p className="text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  {exp.accomplishments && exp.accomplishments.length > 0 && (
                    <div className="mb-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-800 mb-2">Major Accomplishments:</h4>
                      <ul className="space-y-1">
                        {exp.accomplishments.map((accomplishment, accIndex) => (
                          <li key={accIndex} className="text-green-700 flex items-start">
                            <span className="text-green-600 mr-2">+</span>
                            {accomplishment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.details && exp.details.length > 0 && (
                    <>
                      {expandedCard === index && (
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {exp.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button
                        variant="link"
                        className="text-blue-600 p-0 h-auto font-normal"
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">{edu.institution}</h3>
                  <p className="text-lg text-gray-700 mb-1">{edu.degree}</p>
                  {edu.description && (
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3">{cert.category}</h3>
                  <ul className="space-y-2">
                    {cert.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start text-sm">
                        <span className="text-blue-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Training */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">AI Training & Certifications</h2>
          <div className="space-y-4">
            {aiTraining.map((training, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-black">{training.provider}</h3>
                    {training.period && (
                      <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                        {training.period}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {training.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-purple-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
