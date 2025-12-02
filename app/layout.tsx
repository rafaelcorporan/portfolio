import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { HideNextJSIndicator } from "./hide-nextjs-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rafael - Full Stack Dev.",
  description:
    "Full-Stack Engineer specializing in Infrastructure Hardening to AI Integration. 12+ technical projects showcasing expertise from legacy IT to modern AI solutions.",
  generator: 'v0.dev',
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // NUCLEAR OPTION: Remove ANY small fixed element at bottom corners
                function removeNextJSIndicator() {
                  // Remove by all possible selectors
                  const selectors = [
                    'a[href*="nextjs.org"]',
                    'a[href*="vercel.com"]',
                    '[data-nextjs-toast]',
                    '#__next-build-watcher',
                    '#__next-dev-overlay',
                    '[id*="next"]',
                    '[class*="next"]',
                  ];
                  
                  selectors.forEach(sel => {
                    try {
                      document.querySelectorAll(sel).forEach(el => {
                        const parent = el.closest('div') || el.parentElement;
                        if (parent) {
                          parent.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
                          parent.remove();
                        } else {
                          el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
                          el.remove();
                        }
                      });
                    } catch(e) {}
                  });
                  
                  // BRUTE FORCE: Remove ANY small fixed element at bottom corners
                  const allElements = document.querySelectorAll('*');
                  allElements.forEach(el => {
                    if (!el || !el.getBoundingClientRect) return;
                    
                    const rect = el.getBoundingClientRect();
                    const computed = window.getComputedStyle(el);
                    const pos = computed.position;
                    
                    if (pos === 'fixed') {
                      const viewportHeight = window.innerHeight;
                      const viewportWidth = window.innerWidth;
                      const isAtBottom = rect.bottom >= viewportHeight - 10; // Within 10px of bottom
                      const isAtLeft = rect.left <= 10; // Within 10px of left
                      const isAtRight = rect.right >= viewportWidth - 10; // Within 10px of right
                      const isSmall = rect.width < 100 && rect.height < 100; // Small element
                      
                      // Remove ANY small fixed element at bottom corners
                      if ((isAtBottom && (isAtLeft || isAtRight)) && isSmall) {
                        el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;';
                        el.remove();
                      }
                      
                      // Also check for elements with "N" text or circular shape
                      const text = el.textContent || '';
                      const html = el.innerHTML || '';
                      if ((isAtBottom && (isAtLeft || isAtRight)) && 
                          (text.includes('N') || html.includes('nextjs') || html.includes('vercel') || 
                           el.querySelector('svg') || el.querySelector('img'))) {
                        el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;';
                        el.remove();
                      }
                    }
                  });
                }
                
                // Run IMMEDIATELY - before anything else
                removeNextJSIndicator();
                
                // Run on every possible event
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeNextJSIndicator);
                }
                document.addEventListener('load', removeNextJSIndicator);
                window.addEventListener('load', removeNextJSIndicator);
                
                // Continuous monitoring with setInterval
                setInterval(removeNextJSIndicator, 10);
                
                // MutationObserver with maximum coverage
                const observer = new MutationObserver(() => {
                  removeNextJSIndicator();
                });
                
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeOldValue: false,
                  characterData: true,
                });
                
                // Also observe body specifically
                if (document.body) {
                  observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                  });
                }
              })();
            `,
          }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Hide Next.js indicator - ULTRA AGGRESSIVE - ALL POSITIONS */
            a[href*="nextjs.org"],
            a[href*="vercel.com"],
            a[href*="nextjs.org"] *,
            a[href*="vercel.com"] *,
            [style*="position: fixed"][style*="bottom: 0"][style*="left: 0"],
            [style*="position: fixed"][style*="left: 0"][style*="bottom: 0"],
            [style*="position: fixed"][style*="bottom: 0"][style*="right: 0"],
            [style*="position: fixed"][style*="right: 0"][style*="bottom: 0"],
            [style*="position:fixed"][style*="bottom:0"][style*="left:0"],
            [style*="position:fixed"][style*="bottom:0"][style*="right:0"],
            div[style*="position: fixed"]:has(a[href*="nextjs.org"]),
            div[style*="position: fixed"]:has(a[href*="vercel.com"]),
            div[style*="position:fixed"]:has(a[href*="nextjs.org"]),
            div[style*="position:fixed"]:has(a[href*="vercel.com"]),
            #__next-build-watcher,
            #__next-dev-overlay,
            [data-nextjs-toast] {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
              position: absolute !important;
              left: -9999px !important;
              z-index: -9999 !important;
            }
          `
        }} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <HideNextJSIndicator />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
