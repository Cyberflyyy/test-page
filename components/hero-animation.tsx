"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <motion.div
        className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-600/20 to-sky-400/20 rounded-full"
        initial={{ x: -20, y: -20 }}
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-sky-300/10 rounded-full"
        initial={{ x: 50, y: 50 }}
        animate={{
          x: [50, 80, 50],
          y: [50, 30, 50],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-sky-50 rounded-2xl shadow-lg border border-sky-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-sky-400" />
            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="h-3 sm:h-4 w-3/4 bg-gray-200 rounded-full" />
                <div className="h-3 sm:h-4 w-full bg-gray-200 rounded-full" />
                <div className="h-3 sm:h-4 w-5/6 bg-gray-200 rounded-full" />
                <div className="h-3 sm:h-4 w-2/3 bg-gray-200 rounded-full" />
              </div>

              <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg w-1/2 mx-auto">
                <div className="h-2 sm:h-3 w-full bg-white/30 rounded-full" />
              </div>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="h-10 sm:h-16 bg-gray-200 rounded-lg" />
                <div className="h-10 sm:h-16 bg-gray-200 rounded-lg" />
                <div className="h-10 sm:h-16 bg-gray-200 rounded-lg" />
                <div className="h-10 sm:h-16 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
