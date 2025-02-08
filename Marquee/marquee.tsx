"use client"

import type React from "react"
import { useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
}

export default function Marquee({ children, direction = "left", speed = 20, pauseOnHover = true }: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  return (
    <div className="w-full overflow-hidden bg-background">
      <div
        className={`inline-flex whitespace-nowrap ${
          isPaused ? "animate-pause" : direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span className="mx-4" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  )
}

