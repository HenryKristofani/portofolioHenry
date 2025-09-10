"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ParallaxWrapperProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

const ParallaxWrapper = ({ children, speed = 0.5, className = "" }: ParallaxWrapperProps) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxWrapper
