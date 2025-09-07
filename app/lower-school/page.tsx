import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LowerSchoolPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">Lower School</h1>
          <p className="text-xl text-teal-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Where learning is driven by curiosity and joyful discovery through integrated curriculum and hands-on experiences for grades 1-5.
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

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Waldorf Lower School Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Main Lesson Approach</h3>
              <p className="text-teal-700 mb-6 leading-relaxed">
                Our curriculum is built around the concept of "main lessons" - in-depth, block studies that allow 
                students to immerse themselves fully in one subject at a time. This approach aligns with how children 
                naturally learn and develop, fostering deep understanding and retention.
              </p>
              <p className="text-teal-700 leading-relaxed">
                Each main lesson block runs for 3-4 weeks, allowing students to thoroughly explore subjects like 
                mathematics, language arts, history, and science through storytelling, artistic work, and hands-on activities.
              </p>
            </div>
            <div>
              <Card className="border-teal-200">
                <CardContent className="p-8">
                  <h4 className="text-xl font-serif text-primary mb-4">Typical Day Structure</h4>
                  <ul className="space-y-3 text-teal-600">
                    <li><strong>8:00-10:00 AM:</strong> Main Lesson Block</li>
                    <li><strong>10:00-10:30 AM:</strong> Snack & Outdoor Time</li>
                    <li><strong>10:30 AM-12:00 PM:</strong> Subject Classes</li>
                    <li><strong>12:00-1:00 PM:</strong> Lunch & Play</li>
                    <li><strong>1:00-3:00 PM:</strong> Afternoon Activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Overview */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Grade-by-Grade Journey</h2>
          <div className="grid gap-8">
            {/* First Grade */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-4">First Grade</h3>
                    <p className="text-sm text-teal-600 mb-4">Ages 6-7</p>
                    <p className="text-teal-700 leading-relaxed">
                      The bridge from kindergarten to formal academics through fairy tales, nature stories, 
                      and the introduction of letters and numbers through artistic activities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Subjects</h4>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Form Drawing & Letter Introduction</li>
                      <li>• Number Stories & Math</li>
                      <li>• Fairy Tales & Storytelling</li>
                      <li>• Watercolor Painting</li>
                      <li>• Music & Movement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Focus Areas</h4>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Social skills development</li>
                      <li>• Wonder and imagination</li>
                      <li>• Basic academic readiness</li>
                      <li>• Fine motor development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Grade */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-4">Second Grade</h3>
                    <p className="text-sm text-teal-600 mb-4">Ages 7-8</p>
                    <p className="text-teal-700 leading-relaxed">
                      Building confidence in reading and writing through fables and legends that teach 
                      moral lessons and develop character.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Subjects</h4>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Fables & Legends</li>
                      <li>• Reading & Writing Development</li>
                      <li>• Four Operations in Math</li>
                      <li>• Nature Stories</li>
                      <li>• Handwork (knitting)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Focus Areas</h4>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Moral development</li>
                      <li>• Reading fluency</li>
                      <li>• Mathematical thinking</li>
                      <li>• Hand-eye coordination</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Grade */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-4">Third Grade</h3>
                    <p className="text-sm text-teal-600 mb-4">Ages 8-9</p>
                    <p className="text-teal-700 leading-relaxed">
                      A pivotal year focusing on practical skills, farming, and house building while 
                      strengthening academic foundations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Subjects</h4>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Farming & Gardening</li>
                      <li>• House Building</li>
                      <li>• Measurement & Fractions</li>
                      <li>• Hebrew Stories</li>
                      <li>• Grammar & Punctuation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Focus Areas</h4>
                    <ul className="text-sm text-teal-600 space-y-1">
                      <li>• Practical life skills</li>
                      <li>• Connection to earth</li>
                      <li>• Academic confidence</li>
                      <li>• Community cooperation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fourth & Fifth Grades */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-4">Fourth & Fifth Grades</h3>
                    <p className="text-sm text-teal-600 mb-4">Ages 9-11</p>
                    <p className="text-teal-700 leading-relaxed mb-6">
                      Students dive deeper into academic subjects while developing critical thinking skills 
                      through Norse mythology, geography, and increasingly complex mathematical concepts.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Fourth Grade Highlights</h4>
                      <ul className="text-sm text-teal-600 space-y-1">
                        <li>• Norse Mythology</li>
                        <li>• Local Geography & History</li>
                        <li>• Long Division & Fractions</li>
                        <li>• Animal Studies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Fifth Grade Highlights</h4>
                      <ul className="text-sm text-teal-600 space-y-1">
                        <li>• Ancient Civilizations</li>
                        <li>• Decimals & Ratios</li>
                        <li>• Botany & Plant Studies</li>
                        <li>• Geography of the World</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-4">Upper Elementary Focus</h4>
                    <p className="text-teal-700 leading-relaxed mb-4">
                      These grades mark a transition toward more independent thinking and academic rigor, 
                      while maintaining the artistic and imaginative elements that characterize Waldorf education.
                    </p>
                    <ul className="space-y-2 text-teal-600">
                      <li><strong>Academic Growth:</strong> Strengthened literacy and numeracy skills</li>
                      <li><strong>Historical Perspective:</strong> Understanding human development through time</li>
                      <li><strong>Scientific Inquiry:</strong> Observation and wonder about the natural world</li>
                      <li><strong>Social Development:</strong> Increased responsibility and leadership</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Through the Arts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Learning Through the Arts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-teal-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">Visual Arts</h3>
                <p className="text-teal-700 leading-relaxed">
                  Watercolor painting, form drawing, and illustration integrated into main lessons to deepen 
                  understanding and engage multiple learning styles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">Music & Movement</h3>
                <p className="text-teal-700 leading-relaxed">
                  Recorder, singing, and eurythmy (movement) that develop rhythm, coordination, and 
                  support academic learning through embodied experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">Handwork</h3>
                <p className="text-teal-700 leading-relaxed">
                  Knitting, crocheting, and sewing that develop fine motor skills, patience, and 
                  mathematical thinking while creating beautiful, useful objects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Is Lower School Right for Your Child?</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Discover how our integrated approach to learning can nurture your child's academic, artistic, 
            and social development during these crucial elementary years.
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