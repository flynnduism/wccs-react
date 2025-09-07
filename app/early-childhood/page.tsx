import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function EarlyChildhoodPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">Early Childhood</h1>
          <p className="text-xl text-teal-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Fostering the wonder in early childhood through nurturing environments where young children can develop
            naturally through play, rhythm, and meaningful activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Link href="/inquiry-form">Inquire Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-teal-50 px-8 py-3 bg-transparent"
            >
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-sky-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">Sweet Pea Parent & Child</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  A nurturing program for infants, toddlers, and their caregivers featuring songs, movement, play, and
                  snack time in a warm, supportive environment.
                </p>
                <p className="text-sm text-teal-600 mb-4">Ages: 6 months - 3 years</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-teal-50 bg-transparent"
                >
                  <Link href="/sweet-pea">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">Preschool</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  A gentle introduction to school life through imaginative play, artistic activities, nature
                  exploration, and the development of social skills in a homelike environment.
                </p>
                <p className="text-sm text-teal-600 mb-4">Ages: 3-4 years</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-teal-50 bg-transparent"
                >
                  <Link href="/inquiry-form">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-teal-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">Kindergarten</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  A rich foundation for learning through storytelling, creative play, handwork, gardening, and
                  preparation for the academic journey ahead.
                </p>
                <p className="text-sm text-teal-600 mb-4">Ages: 5-6 years</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-teal-50 bg-transparent"
                >
                  <Link href="/inquiry-form">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">Our Early Childhood Philosophy</h2>
            <p className="text-lg text-teal-700 leading-relaxed text-pretty">
              We believe that young children learn best through imitation, rhythm, and reverence. Our approach honors
              the natural development of the child, providing a nurturing environment where imagination can flourish and
              foundational skills develop organically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-serif text-primary mb-4">Rhythm & Routine</h3>
              <p className="text-teal-700 leading-relaxed">
                Daily, weekly, and seasonal rhythms provide security and predictability, allowing children to develop
                inner confidence and trust in their environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-serif text-primary mb-4">Imaginative Play</h3>
              <p className="text-teal-700 leading-relaxed">
                Through unstructured play with natural materials, children develop creativity, problem-solving skills,
                and social competence in an organic way.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-serif text-primary mb-4">Nature Connection</h3>
              <p className="text-teal-700 leading-relaxed">
                Regular outdoor time and nature-based activities foster a deep connection to the natural world and
                support healthy physical development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-teal-200">
              <h3 className="text-xl font-serif text-primary mb-4">Artistic Expression</h3>
              <p className="text-teal-700 leading-relaxed">
                Watercolor painting, modeling, and handwork activities develop fine motor skills while nurturing the
                child's innate artistic capacities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Ready to Learn More?</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            We invite you to visit our campus and experience the warmth and wonder of our Early Childhood program
            firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-teal-50 px-8 py-3 bg-transparent"
            >
              <Link href="/inquiry-form">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
