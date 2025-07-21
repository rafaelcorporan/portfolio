"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, Download } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-green-400 mb-2">{"> ./contact.sh --init"}</div>
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">Ready to discuss your next technical challenge? Let's connect.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-green-500">
            <CardHeader>
              <CardTitle className="font-mono text-green-400">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white font-mono"
                />
                <Input
                  type="email"
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white font-mono"
                />
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white font-mono"
                />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-black font-mono">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gray-900 border-cyan-500">
              <CardHeader>
                <CardTitle className="font-mono text-cyan-400">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:rafael@example.com"
                  className="flex items-center gap-3 text-white hover:text-green-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-mono">rafael@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/rafael-corporan"
                  className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-mono">LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/rafael-corporan"
                  className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-mono">GitHub Portfolio</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-purple-500">
              <CardHeader>
                <CardTitle className="font-mono text-purple-400">Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </CardContent>
            </Card>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="font-mono text-green-400 mb-2">{"> uptime"}</div>
              <div className="text-gray-300 text-sm">
                Available for: Full-time opportunities, Contract work, Technical consulting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
