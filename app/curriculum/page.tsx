import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-stone-50">

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Curriculum</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              A reimagined Waldorf education that nurtures the whole child through academic excellence, artistic expression, and practical skills
            </p>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-semibold text-amber-900 mb-6">Academic Excellence</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Our curriculum integrates rigorous academics with hands-on learning experiences. Students develop strong 
                  foundations in mathematics, language arts, sciences, and social studies while engaging in meaningful, 
                  age-appropriate activities that spark curiosity and deepen understanding.
                </p>
                <Link href="/curriculum/methods" className="text-amber-600 hover:text-amber-700 font-medium">
                  Learn about our methods →
                </Link>
              </div>
              <div className="bg-stone-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-stone-500">Academic Learning Image</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="md:order-2">
                <h2 className="text-3xl font-semibold text-amber-900 mb-6">Artistic Expression</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  The arts are woven throughout our curriculum as both subjects in their own right and as tools for 
                  learning. Students engage in music, visual arts, drama, and handwork, developing creativity, 
                  aesthetic sense, and fine motor skills.
                </p>
                <Link href="/curriculum/special-subjects" className="text-amber-600 hover:text-amber-700 font-medium">
                  Explore special subjects →
                </Link>
              </div>
              <div className="bg-stone-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-stone-500">Arts & Crafts Image</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-semibold text-amber-900 mb-6">Practical Life Skills</h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Students develop practical capabilities through gardening, cooking, woodworking, and other hands-on 
                  activities. These experiences build confidence, responsibility, and connection to the material world 
                  while supporting academic learning.
                </p>
                <Link href="/curriculum/outside-classroom" className="text-amber-600 hover:text-amber-700 font-medium">
                  See outdoor learning →
                </Link>
              </div>
              <div className="bg-stone-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-stone-500">Practical Skills Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Grade Level Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Learning by Grade Level</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Our curriculum is developmentally appropriate, meeting children where they are and supporting their natural growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/early-childhood" className="group bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors">
                <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700">Early Childhood</h3>
                <p className="text-stone-600 mb-4">Ages 3-6: Learning through play, imagination, and imitation</p>
                <div className="text-amber-600 group-hover:text-amber-700 font-medium">Learn more →</div>
              </Link>
              
              <Link href="/lower-school" className="group bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors">
                <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700">Lower School</h3>
                <p className="text-stone-600 mb-4">Grades 1-5: Building foundations through stories and hands-on learning</p>
                <div className="text-amber-600 group-hover:text-amber-700 font-medium">Learn more →</div>
              </Link>
              
              <Link href="/middle-school" className="group bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors">
                <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700">Middle School</h3>
                <p className="text-stone-600 mb-4">Grades 6-8: Developing critical thinking and independence</p>
                <div className="text-amber-600 group-hover:text-amber-700 font-medium">Learn more →</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-stone-700 mb-8">
              Discover how our curriculum can nurture your child's development and love of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/visit">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">Schedule a Visit</Button>
              </Link>
              <Link href="/inquiry-form">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
