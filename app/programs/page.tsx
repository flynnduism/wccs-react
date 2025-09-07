import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Programs</h1>
          <p className="text-xl text-teal-700 leading-relaxed max-w-3xl mx-auto">
            From early childhood through middle school, our programs nurture the whole child through developmentally
            appropriate Waldorf education.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Early Childhood */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4">Early Childhood</h3>
                <p className="text-teal-600 mb-4">
                  Fostering the wonder in early childhood through play-based learning, creative activities, and
                  nurturing care.
                </p>
                <ul className="text-sm text-teal-600 mb-6 space-y-1">
                  <li>• Sweet Pea Parent & Child (18 months - 3 years)</li>
                  <li>• Preschool (3-4 years)</li>
                  <li>• Kindergarten (5-6 years)</li>
                </ul>
                <Link href="/early-childhood">
                  <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Lower School */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4">Lower School</h3>
                <p className="text-teal-600 mb-4">
                  Where learning is diverse, deep and joyful through integrated curriculum and hands-on experiences.
                </p>
                <ul className="text-sm text-teal-600 mb-6 space-y-1">
                  <li>• Grades 1-5</li>
                  <li>• Main lesson blocks</li>
                  <li>• Artistic integration</li>
                  <li>• Practical skills</li>
                </ul>
                <Link href="/lower-school">
                  <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Middle School */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4">Middle School</h3>
                <p className="text-teal-600 mb-4">
                  Bringing thinking, feeling & intuition to a new level through challenging academics and meaningful
                  projects.
                </p>
                <ul className="text-sm text-teal-600 mb-6 space-y-1">
                  <li>• Grades 6-8</li>
                  <li>• Project-based learning</li>
                  <li>• Community service</li>
                  <li>• Leadership development</li>
                </ul>
                <Link href="/middle-school">
                  <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-8">Additional Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-primary mb-4">Sweet Pea Parent & Child</h3>
                <p className="text-teal-600 mb-4">
                  A nurturing program for toddlers and infants with their caregivers, featuring songs, movement, play,
                  and community.
                </p>
                <Link href="/sweet-pea">
                  <Button variant="outline" className="border-primary text-primary bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-teal-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-primary mb-4">After Care</h3>
                <p className="text-teal-600 mb-4">
                  Extended care program that provides a safe, nurturing environment for students after regular school hours.
                </p>
                <Link href="/programs/after-care">
                  <Button variant="outline" className="border-primary text-primary bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-teal-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-primary mb-4">Break Camps</h3>
                <p className="text-teal-600 mb-4">
                  Fun and educational camps during school breaks, featuring outdoor adventures, arts, and seasonal activities.
                </p>
                <Link href="/programs/break-camps">
                  <Button variant="outline" className="border-primary text-primary bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-teal-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-primary mb-4">Willow Homeschooling Program</h3>
                <p className="text-teal-600 mb-4">
                  Support and resources for families choosing homeschooling, with access to curriculum and community connections.
                </p>
                <Link href="/programs/willow-homeschooling">
                  <Button variant="outline" className="border-primary text-primary bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
