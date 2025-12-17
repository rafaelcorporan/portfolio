"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Check } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Udara, NYC",
    role: "VoIP Network Project Lead - Remote / Multi-site",
    period: "Mar 2019 – Sep 2024",
    description: "Architected and deployed a secure, multi-location VoIP network with centralized DigitalOcean VPS core. Implemented encrypted VPN tunneling and optimized Softswitch for high-availability call routing. Integrated simulation training platform (Sim Center) and managed dynamic Gateway Registration System. Led a team of 5 engineers, managing resources and delivering milestones on schedule."
  },
  {
    company: "Tech Alliance NYC",
    role: "IT Specialist / Web Administrator",
    period: "Apr 2014 – Sep 2017",
    description: "Provided enterprise desktop/server support and promoted to Web Administrator. • Deployed Oracle DB on SUSE Linux; built LAMP stack servers and WordPress sites. • Automated MySQL backups via Bash/cron; maintained mixed Windows/Linux environments."
  },
  {
    company: "OnuxTech, Freeport NY",
    role: "IT Consultant",
    period: "Feb 2008 - Nov 2013",
    description: "Designed and constructed data centers from ground up; implemented structured cabling and redundancy. Increased application uptime >99.5% by enhancing fail over and reducing mean-time-to-recovery."
  },
  {
    company: "DP World Caucedo",
    role: "System Engineer & Network Admin",
    period: "Oct 2003 – May 2007",
    description: "Major Accomplishments:\nPromoted from Crane Operator to System Engineer in 9 months.\nPromoted from Operator to System Engineer to Network Administrator within 2 years.",
    details: [
      "Hardware & Systems Deployment: Deployed and maintained HP/Dell workstations and servers. Performed Windows/Linux OS imaging and cloning with Acronis and Norton Ghost.",
      "Enterprise Networking & Security: Configured Cisco Catalyst switches (2955, 4506): VLANs, password recovery, IOS upgrades/backups. Set up wireless networks: Cisco Aironet APs, Linksys WRT54G/WAP54G, SSID, WEP. Configured Cisco 2600 routers with OSPF, EIGRP, NAT, and secure remote access.",
      "Microsoft Infrastructure & High Availability: Administered Active Directory, DNS, DHCP, DFS."
    ]
  },
]

const skillCategories = [
  {
    title: "",
    skills: ["CSS 3", "HTML 5", "React", "Next.js", "TypeScript", "Web Components"]
  },
  {
    title: "",
    skills: ["CSS-in-JS", "React Native", "Flutter", "Node.js", "Python (FastAPI, Django)"]
  },
  {
    title: "",
    skills: ["Go", "Rust", "WebSockets", "WebRTC", "WebAssembly", "Internet marketing", "PhpMyAdmin"]
  },
  {
    title: "",
    skills: ["AWS", "Azure", "Vercel", "Netlify", "Cloudflare", "Lambda", "Cloudflare Workers", "Vercel (v0)"]
  },
  {
    title: "",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Databases: SQL, NoSQL", "AI Prompt Engineering", "Automation (n8n)"]
  }
]

const aiCertifications = [
  {
    title: "OpenAI Academy",
    items: ["Prompt Engineering, Workflow Automation"]
  },
  {
    title: "Google Cloud AI",
    items: ["Implementation & Deployment"]
  },
  {
    title: "Anthropic Claude Academy",
    items: ["AI Fluency, Claude API, Bedrock,", "Vertex AI, Model Context Protocol"]
  },
  {
    title: "ANTHROPIC (Claude AI)",
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
    category: "Panduit Network",
    items: ["Formerly Voice and Data Cabling."]
  },
  {
    category: "UNICDA) Dominican American University",
    items: ["Diploma in Management of Operations"]
  },
  {
    category: "Cisco Academy / ITLA",
    items: [
      "HP IT Essentials I PC Hardware and Software",
      "HP IT Essentials II Network Operating Systems"
    ]
  },
  {
    category: "Borough of Manhattan Community College",
    items: ["CompTIA A+"]
  },
  {
    category: "Cisco Academy / ITLA",
    items: [
      "Network Security I",
      "Network Security II",
      "GNU/Linux Structure",
      "Linux Red Hat 7"
    ]
  },
  {
    category: "Test-Out",
    items: [
      "Managing & Maintaining Windows Server 2003",
      "Planning a Server 2003 Network Infrastructure",
      "Implementing an Active Directory Infrastructure",
      "Installing, Configuring & Admin Windows XP Pro"
    ]
  },
  {
    category: "Cisco Certified Network Associate (CCNA)",
    items: [
      "CCNA 1: Networking Basics Cisco system",
      "CCNA 2: Routers and Routing Basics Cisco system",
      "CCNA 3: Switching Basics & Intermediate Routing",
      "CCNA 4: WAN Technologies",
      "Install, configure, & troubleshoot Cisco nets devices"
    ]
  }
]

export function ResumeContent() {
  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Rafael_Corporan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-8 md:px-12 bg-white text-black">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8 gap-4 border-b-2 border-black pb-6">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tight">Rafael Corporan</h1>
            <p className="text-xl text-gray-800 mb-4 font-medium">Full-Stack Developer & AI Systems Architect</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <span className="font-semibold">mobile:</span> (347) 829-4952
              </span>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="mailto:rafaelcorporan@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <span className="font-semibold">e-mail:</span> rafaelcorporan@gmail.com
              </a>

            </div>
          </div>
          <Button
            className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full text-sm font-medium shrink-0 print:hidden"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
        </div>

        {/* Professional Summary */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3 uppercase tracking-wider">Professional Summary:</h2>
          <p className="text-gray-800 leading-relaxed text-base text-justify">
            Innovative Full-Stack Developer & AI Systems Architect with 10+ years of experience designing secure network
            infrastructures, building cloud-native applications, and integrating large language models (LLMs) into enterprise
            solutions. Skilled in DevOps, automation, and scalable backend systems, with a proven record of leading crossfunctional teams and delivering consulting-grade solutions. Adept at bridging technical depth with business
            strategy to drive digital transformation and operational efficiency.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-4 uppercase tracking-wider">S K I L L S:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-8 text-sm md:text-base">
            {skillCategories.map((category, idx) => (
              <ul key={idx} className="list-disc pl-5 space-y-1 text-gray-800 marker:text-gray-500">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="leading-snug">{skill}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-6 uppercase tracking-wider">Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row justify-between mb-1 items-baseline">
                  <h3 className="text-lg font-bold text-black">{exp.company}</h3>
                  <span className="text-gray-600 font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-base font-semibold text-gray-800 mb-2">{exp.role}</p>
                <div className="text-gray-800 leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {exp.description}
                </div>
                {exp.details && (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-sm md:text-base marker:text-gray-500">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 mb-6 uppercase tracking-wider">EDUCATION & CERTS</h2>
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-bold text-black">February 2003 - November 2025</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-black mb-1 text-base">{cert.category}</h3>
                  <ul className="space-y-1 text-gray-800">
                    {cert.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-black mb-3 text-base border-b border-gray-200 pb-1">AI - Trainings</h3>
              <div className="space-y-6">
                {aiCertifications.map((cert, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800 marker:text-gray-500">
                      {cert.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-snug">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
