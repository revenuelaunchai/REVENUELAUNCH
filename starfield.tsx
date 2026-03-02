"use client"

import { useEffect, useRef } from "react"

export function Starfield({ count = 200 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div")
      star.className = "absolute rounded-full animate-[twinkle_3s_infinite_ease-in-out]"

      const size = Math.random()
      if (size > 0.8) {
        star.style.width = "3px"
        star.style.height = "3px"
        star.style.boxShadow = "0 0 4px rgba(255,255,255,0.8)"
      } else if (size > 0.5) {
        star.style.width = "2px"
        star.style.height = "2px"
      } else {
        star.style.width = "1px"
        star.style.height = "1px"
      }

      star.style.background = "white"
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 3}s`

      el.appendChild(star)
    }

    return () => {
      el.innerHTML = ""
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
