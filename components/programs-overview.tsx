import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProgramsOverview() {
  const programs = [
    {
      title: "Early Childhood",
      subtitle: "Fostering the wonder in early childhood",
      description: "Where learning begins with play, rhythm, and meaningful connection",
      color: "bg-teal-50/80",
      href: "/early-childhood",
    },
    {
      title: "Lower School: Grades 1-5",
      subtitle: "Where learning is driven and joyful",
      description: "Building foundational skills through imagination and discovery",
      color: "bg-teal-50/80",
      href: "/lower-school",
    },
    {
      title: "Middle School: Grades 6-8",
      subtitle: "Bringing thinking, feeling & intuition to a new level",
      description: "Preparing students for high school with confidence and purpose",
      color: "bg-teal-50/80",
      href: "/middle-school",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/30 to-teal-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link key={index} href={program.href}>
              <Card
                className={`${program.color} border-teal-200 text-center p-8 shadow-sm hover:shadow-lg transition-all cursor-pointer hover:scale-105`}
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
                  <p className="text-teal-700 text-sm mb-2 font-medium">{program.subtitle}</p>
                  <p className="text-teal-600 text-sm leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visit"
            className="inline-flex items-center text-primary hover:text-teal-800 font-medium text-lg group"
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
