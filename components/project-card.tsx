import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <span className="inline-flex items-center text-white font-medium text-sm">
              Zobacz szczegóły
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-base sm:text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
