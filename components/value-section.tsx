"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ValueSection() {
  const [selectedProject, setSelectedProject] = useState<{title: string, videoUrl: string} | null>(null)
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])

  useEffect(() => {
    // Initialize all elements as invisible
    setVisibleElements(new Array(6).fill(false))
    
    // Animate elements appearing one by one
    const elementsCount = 6
    for (let i = 0; i < elementsCount; i++) {
      setTimeout(() => {
        setVisibleElements(prev => {
          const newVisible = [...prev]
          newVisible[i] = true
          return newVisible
        })
      }, i * 300) // 300ms delay between each element
    }
  }, [])
  
  const projects = [
    { title: "Enterprise Network Monitoring", videoUrl: "/1.webm" },
    { title: "AI Customer Support", videoUrl: "/5.webm" },
    { title: "Secure IoT Management", videoUrl: "/3.webm" },
    { title: "WePay Crypto Wallet", videoUrl: "/12.webm" },
    { title: "AI Threat Detection", videoUrl: "/6.webm" },
    { title: "Financial Analytics", videoUrl: "/8.webm" },
    { title: "URL Shortener", videoUrl: "/10.webm" },
    { title: "Online Video Converter", videoUrl: "/11.webm" },
    { title: "IoT Dashboard", videoUrl: "/9.webm" },
    { title: "Multi-Factor Authentication", videoUrl: "/7.webm" },
    { title: "Cloud Migration", videoUrl: "/2.webm" },
    { title: "DevOps Automation", videoUrl: "/8.webm" }
  ]

  return (
    <section id="value" className="py-20 bg-white">
      {/* Animated Projects Banner */}
      <div className={`bg-black py-10 mb-16 overflow-hidden transition-all duration-500 transform ${
        visibleElements[0] 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div 
                key={index} 
                className="text-white font-medium text-xl md:text-2xl mx-8 opacity-60 flex-shrink-0 cursor-pointer hover:opacity-100 hover:scale-[1.3] hover:font-bold transition-all duration-300 hover:text-white"
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-full bg-black border-gray-700">
          {selectedProject && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
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
          )}
        </DialogContent>
      </Dialog>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-500 transform ${
            visibleElements[1] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>Value in technical excellence.</h2>
          <p className={`text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed transition-all duration-500 transform ${
            visibleElements[1] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            I am driven by a desire to solve complex technical challenges. My passion in building robust
            infrastructure and leading projects towards innovative outcomes. I believe in a systematic approach that
            unlocks business value by providing reliable technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className={`transition-all duration-700 transform ${
            visibleElements[3] 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-black mb-4">Infrastructure</h3>
            <p className="text-gray-600 leading-relaxed">
              I am IT Expert with AI innovation Full-stack 'Vibe Coder' who thrives on ideation, execution, and optimization,
              delivering seamless front-to-backend solutions with a future-forward mindset, who uses proven technologies to effectively design and implement scalable systems. Reliability is key to my work, and I am an active problem-solver who works effectively with stakeholders from diverse disciplines to achieve the best possible outcome.
            </p>
          </div>

          <div className={`transition-all duration-700 transform ${
            visibleElements[4] 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-black mb-4">AI Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              I see AI as a vital business tool that allows us to proactively solve complex problems. I learn about user
              behavior, needs, and expectations. I strongly believe that when we become an expert on our domain, it puts
              us in a better position to set direction and follow our vision together, achieving strategic advantage. I leverage cutting-edge AI technologies including machine learning models, natural language processing, and computer vision to create intelligent automation solutions.
            </p>
          </div>

          <div className={`transition-all duration-700 transform ${
            visibleElements[5] 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-black mb-4">Leadership</h3>
            <p className="text-gray-600 leading-relaxed">
              In my experience, change comes from aligned teams and shared technical vision for people to grow. I am
              committed to helping others succeed by creating a collaborative work environment, cross functional, and
              empowering my peers to reach their full potential. I foster innovation through mentorship and knowledge sharing, building high-performing teams that deliver exceptional results. My leadership approach focuses on clear communication, strategic planning breakthrough solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
