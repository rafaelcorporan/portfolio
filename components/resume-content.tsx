"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "UDARA",
    role: "VoIP NETWORK PROJECT LEAD",
    period: "March/2019 - September 2024",
    description: "Designed and deployed a multi-location VoIP network with dedicated Gateways at each site.",
    details: [
      "Configured a Digital Ocean VPS as the network core.",
      "Implemented a secure VPN for encrypted communications.",
      "Integrated Sim Center System for simulation training.",
      "Managed GW Register System for call routing and registration.",
      "Optimized VOS Softswitch System for call management.",
      "Dual role as Project Manager & IT Recruiter: Led teams, allocated resources, and mitigated risks to ensure on time delivery."
    ]
  },
  {
    company: "TECH ALLIANCE, NYC",
    role: "IT SPECIALIST & NETWORK ADMIN",
    period: "April 2014 - September 2017",
    description: "Provided comprehensive desktop and server technical support for clients.",
    details: [
      "Became the web administrator within a year, deploying and managing an Oracle database on Suse Linux 11.",
      "Set up Linux web servers based on LAMP stack and WordPress sites.",
      "Created shell scripts and cron jobs for MySQL database backups.",
      "Managed various Windows OS environments, including XP, 7, 11, and Server 2008, 2012.",
      "Configured enterprise-level network infrastructure and security protocols.",
      "Implemented database optimization strategies for improved performance.",
      "Provided technical consulting services for infrastructure planning and deployment."
    ]
  },
  {
    company: "ONUXTECH, FREEPORT NY",
    role: "IT CONSULTANT",
    period: "February 2008 - November 2013",
    description: "Managed office cabling and built data centers from scratch. Significantly increased infrastructure failover and reduced operational downtime, leading to increased application availability.",
    details: [
      "Designed and implemented comprehensive network infrastructure from ground up.",
      "Installed and configured enterprise-grade cabling systems including Cat5e/Cat6 structured cabling.",
      "Built redundant data center environments with proper power distribution and cooling systems.",
      "Implemented backup power solutions including UPS systems and emergency generators.",
      "Configured network switches, routers, and firewalls for optimal performance and security.",
      "Established disaster recovery protocols and failover mechanisms.",
      "Reduced system downtime by 85% through proactive monitoring and maintenance procedures.",
      "Provided 24/7 technical support and emergency response services for critical infrastructure."
    ]
  },
  {
    company: "DP WORLD CAUCEDO",
    role: "SYSTEM ENGINEER & NETWORK ADMIN",
    period: "October/2003 – May/2007",
    description: "Managed IT infrastructure: HP/Dell laptops, desktops, and servers (PowerEdge, ProLiant) – racking, configuring Windows Server, patching, updates.",
    details: [
      "Performed disk cloning (Norton Ghost, Acronis) and OS installations (Windows XP/7/10/Server, Linux Fedora/Ubuntu/SUSE).",
      "Deployed LAN and structured cabling (UTP & Fiber Optic) throughout enterprise facilities.",
      "Configured Cisco Catalyst switches (VLANs, IOS updates, backups) and routers (RIP, OSPF, EIGRP, PPP, NAT).",
      "Set up Wireless APs (Cisco, Linksys WRT54G/WAP54G) for comprehensive wireless coverage.",
      "Managed Microsoft Infrastructure: Active Directory (Domain Controllers, OUs, GPOs, backup/restore).",
      "Administered DNS (zone management), WINS, DHCP (scopes, fault tolerance) services.",
      "Maintained Network Services (FTP, Web, Print, File servers) for enterprise operations.",
      "Implemented Routing & Remote Access (NAT, VPN) for secure remote connectivity.",
      "Established high availability solutions (Cluster Servers, DFS) for business continuity.",
      "Performed regular system monitoring, maintenance, and security updates across all platforms.",
      "Provided 24/7 technical support for critical infrastructure and emergency response.",
      "Trained junior staff on network administration and troubleshooting procedures.",
      "Documented network topology, configurations, and standard operating procedures."
    ]
  },
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
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-black">Resume</h1>
          <Button 
            className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </Button>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            I've worked as a <span className="text-black">senior technical engineer</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-600">
            and in <span className="text-black">technical leadership</span> roles for:
          </h3>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`bg-gray-100 border-none hover:shadow-lg hover:scale-105 transition-all duration-500 transform ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">{exp.company}</h3>
                <p className="text-lg text-gray-700 mb-2">{exp.role}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700 mb-6">{exp.description}</p>
                
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

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">See portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
