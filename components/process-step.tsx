import type { ReactNode } from "react"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  icon: ReactNode
}

export default function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="relative">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-bold text-sm sm:text-base">
          {number}
        </div>
        {number !== "05" && (
          <div className="absolute top-10 sm:top-12 left-1/2 w-0.5 h-[calc(100%+1rem)] sm:h-[calc(100%+1.5rem)] bg-gradient-to-b from-sky-400 to-transparent -translate-x-1/2"></div>
        )}
      </div>
      <div className="flex-1 pt-1">
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
          <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full text-blue-600">{icon}</div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-base ml-8 sm:ml-11">{description}</p>
      </div>
    </div>
  )
}
