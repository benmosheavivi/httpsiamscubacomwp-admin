"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
}

export function LocationMap({
  location = "Sairee Beach, Koh Tao",
  coordinates = "10.0956° N, 99.8228° E",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className || ""}`}
      style={{
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        animate={{
          height: isExpanded ? 400 : 200,
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-0" />

        {/* Expanded map content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-[1]"
            >
              {/* Water background */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5" />

              {/* Stylized map SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Main roads */}
                <line x1="0" y1="35" x2="100" y2="35" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="0.8" />
                <line x1="0" y1="65" x2="100" y2="65" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="0.8" />

                {/* Vertical main roads */}
                <line x1="30" y1="0" x2="30" y2="100" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="0.8" />
                <line x1="70" y1="0" x2="70" y2="100" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="0.8" />

                {/* Secondary streets */}
                {[20, 50, 80].map((y, i) => (
                  <line key={`h-${i}`} x1="0" y1={y} x2="100" y2={y} stroke="hsl(var(--foreground))" strokeOpacity="0.06" strokeWidth="0.4" />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="100" stroke="hsl(var(--foreground))" strokeOpacity="0.06" strokeWidth="0.4" />
                ))}
              </svg>

              {/* Buildings */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="absolute top-[20%] left-[20%] w-8 h-6 rounded-sm bg-muted-foreground/10" />
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }} className="absolute top-[40%] left-[60%] w-10 h-5 rounded-sm bg-muted-foreground/10" />
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="absolute top-[60%] left-[35%] w-6 h-8 rounded-sm bg-muted-foreground/10" />
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }} className="absolute top-[25%] left-[75%] w-7 h-5 rounded-sm bg-muted-foreground/10" />
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="absolute top-[70%] left-[15%] w-9 h-4 rounded-sm bg-muted-foreground/10" />
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45 }} className="absolute top-[55%] left-[80%] w-5 h-7 rounded-sm bg-muted-foreground/10" />

              {/* Location pin */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative">
                  <svg width="32" height="40" viewBox="0 0 24 30" fill="none">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18C24 5.37 18.63 0 12 0z" fill="hsl(var(--primary))" />
                    <circle cx="12" cy="12" r="5" fill="hsl(var(--primary-foreground))" />
                  </svg>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern - collapsed */}
        <motion.div
          animate={{ opacity: isExpanded ? 0 : 0.5 }}
          className="absolute inset-0 z-[1]"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>
        </motion.div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          {/* Top section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: isExpanded ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </motion.div>
            </div>

            {/* Status indicator */}
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-500"
              />
              <span className="text-xs font-medium text-foreground/70">Live</span>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div>
            <motion.h3
              layout
              className="text-lg font-display font-semibold text-foreground mb-1"
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-sm text-muted-foreground"
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Animated underline */}
            <motion.div
              animate={{ width: isHovered ? "100%" : "30%" }}
              transition={{ duration: 0.4 }}
              className="h-0.5 bg-gradient-to-r from-primary to-primary/0 mt-2 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="text-xs text-muted-foreground text-center mt-2"
      >
        Click to {isExpanded ? "collapse" : "expand"}
      </motion.p>
    </motion.div>
  )
}
