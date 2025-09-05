import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PurposeAndPathPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-8">Our Purpose and Path</h1>
            <p className="text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Wildcat Canyon Community School is reimagining Waldorf education and seeks to provide an inclusive,
              joyful, and immersive learning experience where students, PreK-8th, develop deep connections to the
              indigenous land, the seasons, self, and the community.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-sky-900 mb-8">WCCS Origin Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-stone-700 leading-relaxed mb-6">
                After the closure of East Bay Waldorf School during the pandemic, Wildcat Canyon Community School
                sprouted from the compost of the former school. Inspired by the structure of backyard class pods that
                organically and collectively emerged during the year of pandemic closure, we reopened our doors as a
                parent/teacher cooperative with a mission of accessibility, inclusion, and Waldorf-inspired education.
              </p>
              <p className="text-stone-700 leading-relaxed">
                WCCS is a startup, grassroots school drawing its name from our beautiful campus adjacent to Wildcat
                Canyon. We are an independent AWSNA accredited school, self-managed and collaboratively led by three
                bodies: the faculty, the cooperative administration, and the Circle of Trustees.
              </p>
            </div>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-16 bg-sky-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center">WCCS Purpose</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-lg text-stone-700 leading-relaxed">
                We aspire to co-create a world where the highest ideals of our educational methods are accessible to
                every child. Where belonging and peace are rights held by all. Where education includes healthy
                spiritual development, and joy in learning becomes a stepping stone to meaningful change in the world.
                Where we honor the land, the wisdom of our elders and ancestors, and duty to the generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Path */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center">WCCS Path</h2>
            <div className="bg-stone-50 rounded-lg p-8">
              <p className="text-lg text-stone-700 leading-relaxed">
                Wildcat Canyon Community School embraces a progressive approach to Waldorf education in which the
                curriculum is continually regenerated for relevance in the present time. We honor the child's natural
                phases of learning and ignite the spark of individuality in each child, developing a lifelong commitment
                to learning, creativity, and social responsibility. WCCS is committed to dynamic governance by the
                teachers and cooperative community leadership; an economic model that values people over money;
                uplifting social, racial, and land justice in all domains; and ongoing training and practice in
                restorative and transformative justice.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 bg-stone-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center">Who We Are</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-8 text-center">
              At Wildcat Canyon Community School, we are dedicated to educating the whole child, nourishing their
              creativity, curiosity, and love of learning and the natural world. We strive to bring Waldorf education to
              modern times. At WCCS you will find that we are a beautiful tapestry of families who:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">Value the outdoors and education in nature</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">
                    Hope for a place where BIPOC families are welcomed and find themselves reflected in the faculty and
                    the curriculum
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">
                    Value the arts, imagination, and developmentally appropriate academics
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">Are white allies who want to support a diverse community</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">
                    Span the spectrum of gender and hope for support with correct pronoun use and bathroom autonomy
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">Are deeply committed to anthroposophy and Waldorf education</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">Gather together and work in community</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">
                    Are neurodiverse and hope for an education that meets our children on many levels
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">Are seeking an education with a spiritual foundation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-stone-700">Hope to decolonize Waldorf education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 bg-sky-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <blockquote className="text-2xl italic text-sky-900 mb-4">
              "The most important thing is to establish an education through which human beings learn once again how to
              live with one another."
            </blockquote>
            <footer className="text-lg text-stone-600">— Rudolf Steiner</footer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">Join Our Journey</h2>
            <p className="text-lg text-stone-700 mb-8">
              Ready to be part of our reimagined approach to Waldorf education? We'd love to hear from you.
            </p>
            <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg">
              <Link href="/inquiry-form">Inquire Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
