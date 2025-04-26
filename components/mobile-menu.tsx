"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200"
          >
            <div className="container py-4 px-4 flex flex-col space-y-4">
              <Link
                href="#o-nas"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-sky-50 hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                O nas
              </Link>
              <Link
                href="#projekty"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-sky-50 hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                Projekty
              </Link>
              <Link
                href="#proces"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-sky-50 hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                Proces
              </Link>
              <Link
                href="#kontakt"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-sky-50 hover:text-blue-500 transition-colors"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
              <Button
                className="bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-600 hover:to-sky-500 w-full mt-2"
                onClick={closeMenu}
              >
                Skontaktuj się
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
