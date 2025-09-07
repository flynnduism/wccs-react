import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MiddleSchoolPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">Middle School</h1>
          <p className="text-xl text-teal-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Bringing thinking, feeling, and intuition to a new level through challenging academics, meaningful projects, 
            and community engagement for grades 6-8.
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

      {/* The Middle School Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">The Adolescent Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Honoring Adolescent Development</h3>
              <p className="text-teal-700 mb-6 leading-relaxed">
                The middle school years are a time of profound transformation. Our program is designed to meet 
                adolescents where they are - honoring their developing capacity for critical thinking, their 
                growing sense of justice, and their deep need for meaningful work.
              </p>
              <p className="text-teal-700 leading-relaxed">
                Through challenging academics, practical projects, and opportunities for leadership, students 
                develop confidence, creativity, and a strong sense of their place in the world.
              </p>
            </div>
            <div>
              <Card className="border-teal-200">
                <CardContent className="p-8">
                  <h4 className="text-xl font-serif text-primary mb-4">Core Principles</h4>
                  <ul className="space-y-3 text-teal-600">
                    <li><strong>Academic Challenge:</strong> Rigorous curriculum that prepares for high school</li>
                    <li><strong>Creative Expression:</strong> Arts integrated across all subjects</li>
                    <li><strong>Practical Skills:</strong> Real-world projects and applications</li>
                    <li><strong>Social Justice:</strong> Developing ethical thinking and responsibility</li>
                    <li><strong>Community Service:</strong> Contributing to the wider community</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Curriculum */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Three-Year Journey</h2>
          
          {/* Sixth Grade */}
          <Card className="border-teal-200 hover:shadow-lg transition-shadow mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">Sixth Grade</h3>
                  <p className="text-sm text-teal-600 mb-4">Ages 11-12</p>
                  <p className="text-teal-700 leading-relaxed">
                    The transition year where students develop greater independence while exploring ancient 
                    civilizations and beginning more complex mathematical and scientific thinking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Main Lesson Blocks</h4>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Ancient Rome & Medieval History</li>
                    <li>• Geography of South America</li>
                    <li>• Business Math & Economics</li>
                    <li>• Physics: Sound & Light</li>
                    <li>• Mineralogy & Geology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Special Features</h4>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Class play performance</li>
                    <li>• Woodworking projects</li>
                    <li>• Scientific observation</li>
                    <li>• Poetry & creative writing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seventh Grade */}
          <Card className="border-teal-200 hover:shadow-lg transition-shadow mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">Seventh Grade</h3>
                  <p className="text-sm text-teal-600 mb-4">Ages 12-13</p>
                  <p className="text-teal-700 leading-relaxed">
                    A pivotal year emphasizing exploration, discovery, and the connection between human 
                    achievement and scientific understanding through Renaissance studies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Main Lesson Blocks</h4>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Renaissance & Age of Exploration</li>
                    <li>• Geography of Africa</li>
                    <li>• Algebra & Mathematical Thinking</li>
                    <li>• Physics: Mechanics & Heat</li>
                    <li>• Human Anatomy & Health</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Special Features</h4>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Scientific experiments</li>
                    <li>• Biography studies</li>
                    <li>• Creative writing & poetry</li>
                    <li>• Social justice projects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eighth Grade */}
          <Card className="border-teal-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">Eighth Grade</h3>
                  <p className="text-sm text-teal-600 mb-4">Ages 13-14</p>
                  <p className="text-teal-700 leading-relaxed">
                    The culminating year focused on preparing for high school while exploring modern history, 
                    advanced sciences, and taking on significant leadership responsibilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Main Lesson Blocks</h4>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Modern History & Social Issues</li>
                    <li>• Geography of Asia & Australia</li>
                    <li>• Pre-Algebra & Statistics</li>
                    <li>• Chemistry & Organic Processes</li>
                    <li>• Meteorology & Weather</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Special Features</h4>
                  <ul className="text-sm text-teal-600 space-y-2">
                    <li>• Senior project presentation</li>
                    <li>• Community service leadership</li>
                    <li>• High school preparation</li>
                    <li>• Graduation ceremony</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Signature Middle School Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Project-Based Learning</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  Students engage in multi-week projects that integrate multiple disciplines, from designing 
                  and building architectural models to researching and presenting on social justice issues.
                </p>
                <ul className="space-y-2 text-teal-600">
                  <li>• Interdisciplinary approach</li>
                  <li>• Real-world applications</li>
                  <li>• Collaborative problem-solving</li>
                  <li>• Public presentation of work</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Community Service</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  Each student participates in meaningful community service projects, developing empathy, 
                  social responsibility, and leadership skills while making a positive impact.
                </p>
                <ul className="space-y-2 text-teal-600">
                  <li>• Local community partnerships</li>
                  <li>• Environmental stewardship</li>
                  <li>• Social justice advocacy</li>
                  <li>• Service learning integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Arts Integration</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  Visual arts, music, and drama are woven throughout the curriculum, with culminating 
                  performances and exhibitions showcasing student creativity and understanding.
                </p>
                <ul className="space-y-2 text-teal-600">
                  <li>• Annual class plays</li>
                  <li>• Art exhibitions</li>
                  <li>• Musical performances</li>
                  <li>• Creative writing publications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Outdoor Education</h3>
                <p className="text-teal-700 mb-6 leading-relaxed">
                  Regular outdoor experiences and camping trips provide opportunities for personal growth, 
                  team building, and deeper connection with the natural world.
                </p>
                <ul className="space-y-2 text-teal-600">
                  <li>• Wilderness expeditions</li>
                  <li>• Environmental science</li>
                  <li>• Team-building challenges</li>
                  <li>• Leadership development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preparing for High School */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-8">Preparing for the Next Chapter</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Our middle school graduates are well-prepared for high school and beyond, with strong academic 
            foundations, creative thinking skills, and a deep sense of social responsibility.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-serif text-primary mb-4">Academic Excellence</h3>
              <p className="text-teal-600 text-sm">
                Strong preparation in all core subjects with critical thinking and research skills
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-primary mb-4">Creative Confidence</h3>
              <p className="text-teal-600 text-sm">
                Artistic skills and creative problem-solving abilities that serve across all disciplines
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-primary mb-4">Social Responsibility</h3>
              <p className="text-teal-600 text-sm">
                Leadership skills and ethical thinking developed through community engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Ready to Explore Middle School?</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Discover how our middle school program can support your adolescent through this important 
            developmental period with challenge, creativity, and community.
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