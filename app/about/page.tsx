import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">About Wildcat Canyon Community School</h1>
          <p className="text-xl text-teal-700 leading-relaxed max-w-3xl mx-auto">
            Wildcat Canyon Community School is reimagining Waldorf education and seeks to provide an inclusive, joyful,
            and immersive learning experience where students, PreK-8th, develop deep connections to the indigenous land,
            the seasons, self, and the community.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-primary mb-6">Our Mission</h2>
              <p className="text-teal-700 leading-relaxed mb-6">
                We are committed to creating an educational environment that honors the whole child - their
                intellectual, artistic, and practical capacities. Our approach integrates academic excellence with
                creativity, critical thinking, and social responsibility.
              </p>
              <p className="text-teal-700 leading-relaxed">
                Through our reimagined Waldorf curriculum, we foster deep connections to the natural world, indigenous
                wisdom, and community engagement while preparing students for the challenges and opportunities of the
                21st century.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-primary mb-6">Our Vision</h2>
              <p className="text-teal-700 leading-relaxed mb-6">
                We envision a school community where every child thrives in an atmosphere of respect, wonder, and joy.
                Our students develop as confident, creative, and compassionate individuals who are prepared to
                contribute meaningfully to their communities and the world.
              </p>
              <p className="text-teal-700 leading-relaxed">
                We strive to be a model of inclusive education that celebrates diversity, honors indigenous
                perspectives, and creates pathways for all families to access high-quality Waldorf education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-teal-700 mb-8">
            Discover how Wildcat Canyon Community School can nurture your child's growth and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule a Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-teal-50 bg-transparent"
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
