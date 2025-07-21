"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import emailjs from '@emailjs/browser'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [selectedProject, setSelectedProject] = useState<{title: string, videoUrl: string} | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Initialize EmailJS here to avoid SSR issues
      emailjs.init('STHfOFB5LJzn3I9Jn')
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }

      await emailjs.send(
        'service_0i2abk7',
        'template_jbwlvlv',
        templateParams,
        'STHfOFB5LJzn3I9Jn'
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-end items-center mb-12">
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 bg-transparent"
            onClick={() => window.open('https://www.linkedin.com/in/rafaelcorporan/', '_blank')}
          >
            Connect on LinkedIn
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Get in touch.</h2>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-gray-300 text-black h-12 rounded-lg"
                />
                <div className="absolute right-3 top-3 w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">*</span>
                </div>
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white border-gray-300 text-black h-12 rounded-lg"
              />
            </div>
            <Textarea
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white border-gray-300 text-black rounded-lg"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-black hover:bg-gray-100 h-12 rounded-lg font-medium disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
            
            {submitStatus === 'success' && (
              <div className="text-green-400 text-center mt-4">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-400 text-center mt-4">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Resume</h3>
          <p className="text-gray-400 mb-8">Read about my full story in the resume</p>
          <Button 
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/resume.pdf'
              link.download = 'resume.pdf'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          >
            Download Resume
          </Button>
        </div>

        {/* Animated Projects Banner */}
        <div className="bg-black py-5 mb-16 overflow-hidden">
          <div className="relative">
            <div className="flex animate-scroll whitespace-nowrap">
              {[...projects, ...projects, ...projects].map((project, index) => (
                <div 
                  key={index} 
                  className="text-white font-medium text-sm md:text-base mx-8 opacity-60 flex-shrink-0 cursor-pointer hover:opacity-100 hover:scale-[1.3] hover:font-bold transition-all duration-300 hover:text-white"
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
              animation: scroll 10s linear infinite;
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
      </div>
    </section>
  )
}
