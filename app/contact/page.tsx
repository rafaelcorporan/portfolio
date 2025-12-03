"use client"

import { ContactForm } from "@/components/contact-form"


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-16 relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          src='https://my.spline.design/texturesandrefractions-fnboAF5JXEBBhCOpJ4VBXeJL/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ContactForm />
      </div>
    </main>
  )
}
