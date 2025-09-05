import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProgramsOverview() {
  const programs = [
    {
      title: "Early Childhood",
      subtitle: "Fostering the wonder in early childhood",
      description: "Where learning is driven and joyful",
      color: "bg-sky-100/80",
    },
    {
      title: "Lower School: Grades 1-5",
      subtitle: "Where learning is driven and joyful",
      description: "Bringing thinking, feeling & intuition to a new level",
      color: "bg-sky-100/80",
    },
    {
      title: "Middle School: Grades 6-8",
      subtitle: "Bringing thinking, feeling & intuition to a new level",
      description: "Where learning is driven and joyful",
      color: "bg-sky-100/80",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-sky-100/50 to-sky-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`${program.color} border-0 text-center p-8 shadow-sm hover:shadow-md transition-shadow`}
            >
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{program.title}</h3>
                <p className="text-slate-700 text-sm mb-2 font-medium">{program.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visit"
            className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium text-lg group"
          >
            Visit Our Campus
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
