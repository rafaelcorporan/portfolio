"use client"

import { useEffect } from "react"

export function HideNextJSIndicator() {
  useEffect(() => {
    const removeIndicator = () => {
      // Remove by all possible selectors
      const selectors = [
        'a[href*="nextjs.org"]',
        'a[href*="vercel.com"]',
        '[data-nextjs-toast]',
        '#__next-build-watcher',
        '#__next-dev-overlay',
        '[id*="next"]',
        '[class*="next"]',
      ]
      
      selectors.forEach(sel => {
        try {
          document.querySelectorAll(sel).forEach(el => {
            const parent = el.closest('div') || el.parentElement
            if (parent) {
              parent.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;'
              parent.remove()
            } else {
              el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;'
              el.remove()
            }
          })
        } catch(e) {}
      })
      
      // BRUTE FORCE: Remove ANY small fixed element at bottom corners using getBoundingClientRect
      const allElements = document.querySelectorAll('*')
      allElements.forEach(el => {
        const htmlEl = el as HTMLElement
        if (!htmlEl || !htmlEl.getBoundingClientRect) return
        
        try {
          const rect = htmlEl.getBoundingClientRect()
          const computed = window.getComputedStyle(htmlEl)
          const pos = computed.position
          
          if (pos === 'fixed') {
            const viewportHeight = window.innerHeight
            const viewportWidth = window.innerWidth
            const isAtBottom = rect.bottom >= viewportHeight - 10
            const isAtLeft = rect.left <= 10
            const isAtRight = rect.right >= viewportWidth - 10
            const isSmall = rect.width < 100 && rect.height < 100
            
            // Remove ANY small fixed element at bottom corners
            if ((isAtBottom && (isAtLeft || isAtRight)) && isSmall) {
              htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;'
              htmlEl.remove()
            }
            
            // Also check for elements with Next.js content
            const text = htmlEl.textContent || ''
            const html = htmlEl.innerHTML || ''
            if ((isAtBottom && (isAtLeft || isAtRight)) && 
                (text.includes('N') || text.includes('Next.js') || html.includes('nextjs') || html.includes('vercel') || 
                 htmlEl.querySelector('svg') || htmlEl.querySelector('img'))) {
              htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;'
              htmlEl.remove()
            }
          }
        } catch(e) {
          // Ignore errors
        }
      })
    }

    // Immediate execution
    removeIndicator()
    
    // Continuous monitoring with setInterval
    const interval = setInterval(removeIndicator, 10)
    
    // MutationObserver with maximum coverage
    const observer = new MutationObserver(() => {
      removeIndicator()
    })
    
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    })
    
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      })
    }

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}

