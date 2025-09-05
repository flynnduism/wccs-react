import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Curriculum 1st Grade</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learning to knit teaches you that you can figure out most anything
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">1st graders recite poetry</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Through the beauty of spoken word, our first grade students develop language skills, memory, and
                  confidence while connecting with the rhythms and sounds of language.
                </p>
              </div>
              <div className="bg-stone-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-stone-500">Poetry Recitation Image</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="md:order-2">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                  A butterfly, ladybug and snail in the 1st grade play
                </h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Our students bring stories to life through dramatic play, developing imagination, social skills, and
                  creative expression in a supportive environment.
                </p>
              </div>
              <div className="bg-stone-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-stone-500">Grade Play Image</span>
              </div>
            </div>

            <div className="text-center">
              <Link href="/inquiry-form">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">Inquire Now</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
