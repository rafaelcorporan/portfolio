'use client'

import { useEffect, useRef } from 'react'

export function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined' && containerRef.current) {
      // Set the Unicorn Studio project attribute
      containerRef.current.setAttribute('data-us-project', 'zQ1A4lUhjBbGT4s7DQ6x')
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '1440px', 
        height: '900px', 
        position: 'fixed', 
        zIndex: -1, 
        top: 0, 
        left: 0 
      }} 
    />
  )
}