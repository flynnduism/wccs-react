import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">Community</h1>
          <p className="text-xl text-teal-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            At Wildcat Canyon Community School, we believe that education is a collaborative effort between 
            families, teachers, and the broader community.
          </p>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Building Community Together</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Our Community Approach</h3>
              <p className="text-teal-700 mb-6 leading-relaxed">
                We foster a warm, inclusive community where families, teachers, and students work together 
                to create an environment of mutual support, shared learning, and collective growth.
              </p>
              <p className="text-teal-700 leading-relaxed">
                Through regular gatherings, collaborative projects, and shared celebrations, we strengthen 
                the bonds that make our school a true learning community.
              </p>
            </div>
            <div>
              <Card className="border-teal-200">
                <CardContent className="p-8">
                  <h4 className="text-xl font-serif text-primary mb-4">Community Pillars</h4>
                  <ul className="space-y-3 text-teal-600">
                    <li><strong>Collaboration:</strong> Working together toward shared goals</li>
                    <li><strong>Inclusion:</strong> Welcoming all families and perspectives</li>
                    <li><strong>Sustainability:</strong> Caring for our environment and future</li>
                    <li><strong>Connection:</strong> Building meaningful relationships</li>
                    <li><strong>Service:</strong> Contributing to the wider community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Community Events & Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Seasonal Celebrations */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Seasonal Celebrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Throughout the year, we celebrate the changing seasons with festivals that honor natural 
                  rhythms and bring our community together in joy and wonder.
                </p>
                <ul className="space-y-2 text-teal-600 text-sm">
                  <li>• Michaelmas Harvest Festival (Fall)</li>
                  <li>• Winter Spiral & Holiday Celebrations</li>
                  <li>• Spring Equinox Garden Festival</li>
                  <li>• May Day & Summer Solstice</li>
                </ul>
              </CardContent>
            </Card>

            {/* Parent Education */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Parent Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  We offer regular workshops and discussion groups to support parents in understanding 
                  child development and Waldorf education principles.
                </p>
                <ul className="space-y-2 text-teal-600 text-sm">
                  <li>• Monthly parent study groups</li>
                  <li>• Child development workshops</li>
                  <li>• Technology and media guidance</li>
                  <li>• Parenting support circles</li>
                </ul>
              </CardContent>
            </Card>

            {/* Work Days */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Community Work Days</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Regular work days bring families together to maintain and improve our campus while 
                  building connections and sharing the responsibility of our school community.
                </p>
                <ul className="space-y-2 text-teal-600 text-sm">
                  <li>• Garden maintenance and planting</li>
                  <li>• Classroom preparation and cleaning</li>
                  <li>• Campus beautification projects</li>
                  <li>• Seasonal decorating</li>
                </ul>
              </CardContent>
            </Card>

            {/* Fundraising Events */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Fundraising & Social Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Our fundraising events are also opportunities for community building, featuring local 
                  artists, food, and entertainment that celebrate our school culture.
                </p>
                <ul className="space-y-2 text-teal-600 text-sm">
                  <li>• Annual Canyon Fest music festival</li>
                  <li>• School auction and dinner</li>
                  <li>• Holiday craft fairs</li>
                  <li>• Community potluck dinners</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Parent Involvement */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Ways to Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-teal-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">Governance</h3>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Join our Board of Directors or participate in committees that guide school policy and planning.
                </p>
                <ul className="text-sm text-teal-600 space-y-1">
                  <li>• Board of Directors</li>
                  <li>• Finance Committee</li>
                  <li>• Building & Grounds</li>
                  <li>• Development Committee</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">Classroom Support</h3>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Support teachers and students through volunteer opportunities in and out of the classroom.
                </p>
                <ul className="text-sm text-teal-600 space-y-1">
                  <li>• Class parent coordination</li>
                  <li>• Field trip assistance</li>
                  <li>• Special event planning</li>
                  <li>• Guest expert sharing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">Skills & Talents</h3>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Share your professional skills and personal talents to enrich our school community.
                </p>
                <ul className="text-sm text-teal-600 space-y-1">
                  <li>• Guest teaching & workshops</li>
                  <li>• Artistic contributions</li>
                  <li>• Technical expertise</li>
                  <li>• Mentoring opportunities</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-8 text-center">Community Guidelines</h2>
          <Card className="border-teal-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">Respectful Communication</h3>
                  <p className="text-teal-700 leading-relaxed mb-4">
                    We foster open, honest dialogue while maintaining respect for all community members and their perspectives.
                  </p>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Listen actively and speak thoughtfully</li>
                    <li>• Assume positive intent</li>
                    <li>• Address concerns directly and constructively</li>
                    <li>• Celebrate diverse viewpoints</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">Shared Responsibility</h3>
                  <p className="text-teal-700 leading-relaxed mb-4">
                    Every community member contributes to the health and vitality of our school through participation and service.
                  </p>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Participate in school events when possible</li>
                    <li>• Contribute time, skills, or resources</li>
                    <li>• Support school policies and teachers</li>
                    <li>• Help maintain our beautiful campus</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Join Our Community</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Whether you're a prospective family or a current community member looking to get more involved, 
            we welcome your participation in building our vibrant school community.
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
              <Link href="/inquiry-form">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}