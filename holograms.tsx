"use client"

import { useEffect, useRef } from "react"

const TEMPLATES = [
  `<svg width="45" height="45" viewBox="0 0 45 45"><rect x="15" y="15" width="15" height="15" fill="rgba(0,229,255,0.1)" stroke="#00e5ff" stroke-width="1"/><line x1="22" y1="15" x2="22" y2="5" stroke="#00e5ff" stroke-width="0.8"/><line x1="22" y1="30" x2="22" y2="40" stroke="#00e5ff" stroke-width="0.8"/><line x1="15" y1="22" x2="5" y2="22" stroke="#00e5ff" stroke-width="0.8"/><line x1="30" y1="22" x2="40" y2="22" stroke="#00e5ff" stroke-width="0.8"/><circle cx="22" cy="5" r="2" fill="#00e5ff"/><circle cx="22" cy="40" r="2" fill="#00e5ff"/><circle cx="5" cy="22" r="2" fill="#00e5ff"/><circle cx="40" cy="22" r="2" fill="#00e5ff"/><text x="22" y="26" text-anchor="middle" fill="#00e5ff" font-size="5" font-family="monospace">AI</text></svg>`,
  `<svg width="50" height="40" viewBox="0 0 50 40"><path d="M5,12 L5,5 L12,5" fill="none" stroke="#00e5ff" stroke-width="1.2"/><path d="M38,5 L45,5 L45,12" fill="none" stroke="#00e5ff" stroke-width="1.2"/><path d="M5,28 L5,35 L12,35" fill="none" stroke="#00e5ff" stroke-width="1.2"/><path d="M45,28 L45,35 L38,35" fill="none" stroke="#00e5ff" stroke-width="1.2"/><text x="25" y="23" text-anchor="middle" fill="#00e5ff" font-size="5" font-family="monospace">LOCK</text></svg>`,
  `<svg width="55" height="35" viewBox="0 0 55 35"><rect width="55" height="35" fill="rgba(0,20,40,0.3)" stroke="#00e5ff" stroke-width="0.8"/><rect x="5" y="7" width="30" height="4" fill="rgba(0,229,255,0.5)"/><rect x="5" y="14" width="22" height="4" fill="rgba(0,229,255,0.3)"/><rect x="5" y="21" width="38" height="4" fill="rgba(0,229,255,0.4)"/><rect x="5" y="28" width="18" height="4" fill="rgba(0,229,255,0.3)"/></svg>`,
  `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="4,3"/><circle cx="20" cy="20" r="8" fill="none" stroke="#00e5ff" stroke-width="0.8"/><circle cx="20" cy="20" r="2" fill="#00e5ff"/><line x1="20" y1="4" x2="20" y2="12" stroke="#00e5ff" stroke-width="0.8"/><line x1="20" y1="28" x2="20" y2="36" stroke="#00e5ff" stroke-width="0.8"/><line x1="4" y1="20" x2="12" y2="20" stroke="#00e5ff" stroke-width="0.8"/><line x1="28" y1="20" x2="36" y2="20" stroke="#00e5ff" stroke-width="0.8"/></svg>`,
  `<svg width="60" height="35" viewBox="0 0 60 35"><rect width="60" height="35" fill="rgba(0,20,40,0.3)" stroke="#00e5ff" stroke-width="0.8"/><polyline points="5,28 15,18 25,22 35,10 45,15 55,5" fill="none" stroke="#00e5ff" stroke-width="1.2"/><polyline points="5,28 15,18 25,22 35,10 45,15 55,5 55,32 5,32" fill="rgba(0,229,255,0.05)"/></svg>`,
  `<svg width="35" height="40" viewBox="0 0 35 40"><polygon points="17,2 32,10 32,28 17,36 2,28 2,10" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" stroke-width="1"/><circle cx="17" cy="19" r="4" fill="none" stroke="#00e5ff" stroke-width="0.8"/><circle cx="17" cy="19" r="1.5" fill="#00e5ff"/></svg>`,
  `<svg width="70" height="30" viewBox="0 0 70 30"><line x1="0" y1="10" x2="30" y2="10" stroke="#00e5ff" stroke-width="0.8"/><line x1="30" y1="10" x2="30" y2="20" stroke="#00e5ff" stroke-width="0.8"/><line x1="30" y1="20" x2="65" y2="20" stroke="#00e5ff" stroke-width="0.8"/><circle cx="30" cy="10" r="2" fill="none" stroke="#00e5ff" stroke-width="1"/><circle cx="65" cy="20" r="2" fill="#00e5ff"/><text x="2" y="8" fill="#00e5ff" font-size="5" font-family="monospace">config</text></svg>`,
  `<svg width="65" height="30" viewBox="0 0 65 30"><rect width="65" height="30" fill="rgba(0,20,40,0.4)" stroke="#00e5ff" stroke-width="0.8"/><path d="M0,0 L8,0 M0,0 L0,8" stroke="#00e5ff" stroke-width="1.5"/><path d="M65,0 L57,0 M65,0 L65,8" stroke="#00e5ff" stroke-width="1.5"/><text x="5" y="12" fill="#00e5ff" font-size="5" font-family="monospace">SYS: ONLINE</text><rect x="5" y="17" width="30" height="4" fill="rgba(0,229,255,0.15)" stroke="#00e5ff" stroke-width="0.5"/><rect x="5" y="17" width="22" height="4" fill="rgba(0,229,255,0.5)"/></svg>`,
  `<svg width="80" height="25" viewBox="0 0 80 25"><rect width="80" height="25" fill="rgba(0,10,30,0.5)" stroke="#00e5ff" stroke-width="0.8"/><text x="5" y="10" fill="#00e5ff" font-size="5" font-family="monospace">CMD :</text><rect x="30" y="4" width="44" height="8" fill="rgba(0,229,255,0.1)" stroke="#00e5ff" stroke-width="0.5"/><text x="5" y="21" fill="#00e5ff" font-size="4.5" font-family="monospace">&gt;&gt;&gt; REV_AI.exe</text></svg>`,
  `<svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="16" fill="none" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="6,3"/><circle cx="19" cy="19" r="10" fill="none" stroke="#00e5ff" stroke-width="0.8"/><line x1="19" y1="3" x2="19" y2="9" stroke="#00e5ff" stroke-width="0.8"/><line x1="19" y1="29" x2="19" y2="35" stroke="#00e5ff" stroke-width="0.8"/></svg>`,
]

export function Holograms({ count = 150 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    for (let i = 0; i < count; i++) {
      const div = document.createElement("div")
      div.className = "absolute opacity-0"
      div.style.left = `${Math.random() * 99}%`
      div.style.top = `${Math.random() * 98}%`
      div.style.animation = `holoFade ${3 + Math.random() * 6}s ${Math.random() * 10}s infinite ease-in-out`

      const scale = 0.1 + Math.random() * 0.8
      div.style.transform = `scale(${scale})`
      div.style.transformOrigin = "top left"
      div.style.filter =
        "drop-shadow(0 0 4px #00e5ff) drop-shadow(0 0 8px rgba(0,229,255,0.5))"
      div.innerHTML = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)]
      el.appendChild(div)
    }

    return () => {
      el.innerHTML = ""
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    />
  )
}
